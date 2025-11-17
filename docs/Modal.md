# Modal Component

A flexible modal dialog component with various sizes, backdrops, animations, and advanced features like dragging. Built with Framer Motion animations, focus management, and full accessibility support.

## Installation

```tsx
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useModal,
} from '../components/Modal';
```

## Basic Usage

```tsx
import { useModal } from '../components/Modal';

function BasicModalExample() {
  const modal = useModal();

  return (
    <>
      <button onClick={modal.onOpen}>
        Open Modal
      </button>
      
      <Modal
        isOpen={modal.isOpen}
        onOpenChange={modal.onOpenChange}
        size="md"
      >
        <ModalContent>
          <ModalHeader>
            <h3>Basic Modal</h3>
          </ModalHeader>
          <ModalBody>
            <p>This is a basic modal with default settings.</p>
          </ModalBody>
          <ModalFooter>
            <button onClick={modal.onClose}>Cancel</button>
            <button onClick={modal.onClose}>Confirm</button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
```

## Modal Sizes

The Modal component supports multiple sizes from `xs` to `full`:

```tsx
function ModalSizesExample() {
  const [activeSize, setActiveSize] = useState<string | null>(null);
  
  return (
    <>
      {/* Size buttons */}
      {['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', 'full'].map((size) => (
        <button
          key={size}
          onClick={() => setActiveSize(size)}
        >
          {size.toUpperCase()}
        </button>
      ))}
      
      <Modal
        isOpen={activeSize !== null}
        onOpenChange={(isOpen) => !isOpen && setActiveSize(null)}
        size={activeSize as any}
      >
        <ModalContent>
          <ModalHeader>
            <h3>Size: {activeSize}</h3>
          </ModalHeader>
          <ModalBody>
            <p>This modal is using the "{activeSize}" size variant.</p>
          </ModalBody>
          <ModalFooter>
            <button onClick={() => setActiveSize(null)}>Close</button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
```

## Backdrop Variants

Different backdrop styles for various visual effects:

```tsx
function BackdropVariantsExample() {
  const [backdropType, setBackdropType] = useState<string | null>(null);
  
  return (
    <>
      {['transparent', 'opaque', 'blur'].map((backdrop) => (
        <button
          key={backdrop}
          onClick={() => setBackdropType(backdrop)}
        >
          {backdrop}
        </button>
      ))}
      
      <Modal
        isOpen={backdropType !== null}
        onOpenChange={(isOpen) => !isOpen && setBackdropType(null)}
        backdrop={backdropType as any}
      >
        <ModalContent>
          <ModalHeader>
            <h3>Backdrop: {backdropType}</h3>
          </ModalHeader>
          <ModalBody>
            <p>Notice how the background behaves differently:</p>
            <ul>
              <li><strong>Transparent:</strong> No backdrop overlay</li>
              <li><strong>Opaque:</strong> Solid dark overlay</li>
              <li><strong>Blur:</strong> Blurred background effect</li>
            </ul>
          </ModalBody>
          <ModalFooter>
            <button onClick={() => setBackdropType(null)}>Close</button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
```

## Modal Placement

Control where the modal appears on screen:

```tsx
function PlacementExample() {
  const [placement, setPlacement] = useState<string | null>(null);
  
  return (
    <>
      {['auto', 'top', 'top-center', 'center', 'bottom', 'bottom-center'].map((pos) => (
        <button
          key={pos}
          onClick={() => setPlacement(pos)}
        >
          {pos.replace('-', ' ').toUpperCase()}
        </button>
      ))}
      
      <Modal
        isOpen={placement !== null}
        onOpenChange={(isOpen) => !isOpen && setPlacement(null)}
        placement={placement as any}
        size="sm"
      >
        <ModalContent>
          <ModalHeader>
            <h3>Placement: {placement}</h3>
          </ModalHeader>
          <ModalBody>
            <p>This modal is positioned using "{placement}" placement.</p>
          </ModalBody>
          <ModalFooter>
            <button onClick={() => setPlacement(null)}>Close</button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
```

## Scroll Behavior

Control how scrolling works with long content:

```tsx
function ScrollBehaviorExample() {
  const [scrollBehavior, setScrollBehavior] = useState<string | null>(null);
  
  return (
    <>
      {['normal', 'inside', 'outside'].map((scroll) => (
        <button
          key={scroll}
          onClick={() => setScrollBehavior(scroll)}
        >
          {scroll}
        </button>
      ))}
      
      <Modal
        isOpen={scrollBehavior !== null}
        onOpenChange={(isOpen) => !isOpen && setScrollBehavior(null)}
        scrollBehavior={scrollBehavior as any}
        size="md"
      >
        <ModalContent>
          <ModalHeader>
            <h3>Scroll: {scrollBehavior}</h3>
          </ModalHeader>
          <ModalBody>
            <div className="space-y-4">
              <p>Scroll behavior: {scrollBehavior}</p>
              {/* Long content for demonstration */}
              {Array.from({ length: 15 }, (_, i) => (
                <p key={i}>
                  Paragraph {i + 1}: Lorem ipsum dolor sit amet, consectetur 
                  adipiscing elit. Sed do eiusmod tempor incididunt ut labore 
                  et dolore magna aliqua.
                </p>
              ))}
            </div>
          </ModalBody>
          <ModalFooter>
            <button onClick={() => setScrollBehavior(null)}>Close</button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
```

## Draggable Modal

Enable dragging functionality:

```tsx
function DraggableModalExample() {
  const modal = useModal();
  
  return (
    <>
      <button onClick={modal.onOpen}>
        Open Draggable Modal
      </button>
      
      <Modal
        isOpen={modal.isOpen}
        onOpenChange={modal.onOpenChange}
        isDraggable
        allowOverflow
        size="sm"
      >
        <ModalContent>
          <ModalHeader>
            <div className="flex items-center gap-2">
              <span>🎯</span>
              <h3>Draggable Modal</h3>
            </div>
          </ModalHeader>
          <ModalBody>
            <p>
              This modal can be dragged! Click and drag the modal to move it 
              around the screen. The cursor will change to indicate it's draggable.
            </p>
            <p>💡 Tip: Best experience when dragging from the header.</p>
          </ModalBody>
          <ModalFooter>
            <button onClick={modal.onClose}>Close</button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
```

## Non-dismissable Modal

Create modals that require explicit user action:

```tsx
function NonDismissableExample() {
  const modal = useModal();
  
  return (
    <>
      <button onClick={modal.onOpen}>
        Open Non-dismissable Modal
      </button>
      
      <Modal
        isOpen={modal.isOpen}
        onOpenChange={modal.onOpenChange}
        isDismissable={false}
        isKeyboardDismissDisabled={true}
        hideCloseButton={true}
        size="sm"
      >
        <ModalContent>
          <ModalHeader>
            <div className="flex items-center gap-2">
              <WarningIcon />
              <h3>Important Action Required</h3>
            </div>
          </ModalHeader>
          <ModalBody>
            <p>
              This modal cannot be dismissed by clicking outside, pressing Escape, 
              or using the close button. You must click an action button.
            </p>
          </ModalBody>
          <ModalFooter>
            <button onClick={modal.onClose}>Cancel</button>
            <button onClick={modal.onClose}>Acknowledge</button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
```

## Form Modal

Modal with form handling:

```tsx
function FormModalExample() {
  const modal = useModal();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    modal.onClose();
    setFormData({ name: '', email: '', message: '' });
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
      <button onClick={modal.onOpen}>
        Open Contact Form
      </button>
      
      <Modal
        isOpen={modal.isOpen}
        onOpenChange={(isOpen) => {
          modal.onOpenChange(isOpen);
          if (!isOpen) resetForm();
        }}
        size="md"
      >
        <ModalContent>
          <ModalHeader>
            <div className="flex items-center gap-2">
              <MailIcon />
              <h3>Contact Us</h3>
            </div>
          </ModalHeader>
          <form onSubmit={handleSubmit}>
            <ModalBody>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    placeholder="Your message..."
                    required
                  />
                </div>
              </div>
            </ModalBody>
            <ModalFooter>
              <button
                type="button"
                onClick={() => {
                  modal.onClose();
                  resetForm();
                }}
              >
                Cancel
              </button>
              <button type="submit">
                <MailIcon />
                Send Message
              </button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
}
```

## Custom Styled Modal

Apply custom styling with the `classNames` prop:

```tsx
function CustomStyledExample() {
  const modal = useModal();
  
  return (
    <>
      <button onClick={modal.onOpen}>
        Open Custom Modal
      </button>
      
      <Modal
        isOpen={modal.isOpen}
        onOpenChange={modal.onOpenChange}
        size="md"
        radius="lg"
        shadow="lg"
        classNames={{
          base: "border border-purple-200 bg-gradient-to-br from-white to-purple-50",
          header: "border-b border-purple-200 bg-gradient-to-r from-purple-500 to-pink-500 text-white",
          footer: "border-t border-purple-200 bg-purple-50",
          closeButton: "text-white hover:bg-white/20"
        }}
      >
        <ModalContent>
          <ModalHeader>
            <div className="flex items-center gap-2">
              <HeartIcon />
              <h3>Custom Styled Modal</h3>
            </div>
          </ModalHeader>
          <ModalBody>
            <div className="space-y-4">
              <p>
                This modal demonstrates custom styling using the classNames prop.
              </p>
              <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-800 mb-2">Features:</h4>
                <ul className="text-purple-700 space-y-1">
                  <li>• Custom gradient backgrounds</li>
                  <li>• Colored borders and sections</li>
                  <li>• Themed close button</li>
                  <li>• Styled header and footer</li>
                </ul>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <button onClick={modal.onClose}>Close</button>
            <button onClick={modal.onClose}>
              <HeartIcon />
              Like It!
            </button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
```

## useModal Hook

The `useModal` hook provides convenient state management:

```tsx
const modal = useModal({
  defaultOpen: false,
  onOpenChange: (isOpen) => console.log('Modal state:', isOpen),
  onClose: () => console.log('Modal closed')
});

// Available methods and properties:
modal.isOpen     // boolean - current open state
modal.onOpen()   // function - open the modal
modal.onClose()  // function - close the modal
modal.onOpenChange(boolean) // function - toggle modal state
```

## Props

### Modal Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Modal content (usually ModalContent) |
| `size` | `ModalSize` | `"md"` | Modal size: `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`, `4xl`, `5xl`, `full` |
| `radius` | `ModalRadius` | `"md"` | Border radius: `none`, `sm`, `md`, `lg` |
| `shadow` | `ModalShadow` | `"md"` | Drop shadow: `none`, `sm`, `md`, `lg` |
| `backdrop` | `ModalBackdrop` | `"opaque"` | Backdrop type: `transparent`, `opaque`, `blur` |
| `scrollBehavior` | `ModalScrollBehavior` | `"normal"` | Scroll behavior: `normal`, `inside`, `outside` |
| `placement` | `ModalPlacement` | `"center"` | Modal position: `auto`, `top`, `top-center`, `center`, `bottom`, `bottom-center` |
| `isOpen` | `boolean` | `false` | Whether the modal is open |
| `defaultOpen` | `boolean` | `false` | Default open state (uncontrolled) |
| `isDismissable` | `boolean` | `true` | Whether clicking backdrop closes modal |
| `isKeyboardDismissDisabled` | `boolean` | `false` | Whether Escape key is disabled |
| `shouldBlockScroll` | `boolean` | `true` | Whether to block body scroll when open |
| `hideCloseButton` | `boolean` | `false` | Whether to hide the close button |
| `closeButton` | `ReactNode` | - | Custom close button element |
| `motionProps` | `MotionProps` | - | Framer Motion animation props |
| `portalContainer` | `HTMLElement` | `document.body` | Portal container element |
| `disableAnimation` | `boolean` | `false` | Whether to disable animations |
| `classNames` | `Partial<ModalSlots>` | - | Custom class names for different parts |
| `className` | `string` | - | Additional CSS class |
| `onOpenChange` | `(isOpen: boolean) => void` | - | Callback when open state changes |
| `onClose` | `() => void` | - | Callback when modal closes |
| `isDraggable` | `boolean` | `false` | Whether the modal can be dragged |
| `allowOverflow` | `boolean` | `false` | Whether dragged modal can go outside viewport |

### ModalContent Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Content to display |
| `className` | `string` | - | Additional CSS class |

### ModalHeader Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Header content |
| `className` | `string` | - | Additional CSS class |

### ModalBody Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Body content |
| `className` | `string` | - | Additional CSS class |

### ModalFooter Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Footer content (usually buttons) |
| `className` | `string` | - | Additional CSS class |

### useModal Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `isOpen` | `boolean` | - | Controlled open state |
| `defaultOpen` | `boolean` | `false` | Default open state (uncontrolled) |
| `onOpenChange` | `(isOpen: boolean) => void` | - | Callback when state changes |
| `onClose` | `() => void` | - | Callback when modal closes |

## TypeScript Interfaces

```tsx
export interface ModalProps {
  children?: ReactNode;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | 'full';
  radius?: 'none' | 'sm' | 'md' | 'lg';
  shadow?: 'none' | 'sm' | 'md' | 'lg';
  backdrop?: 'transparent' | 'opaque' | 'blur';
  scrollBehavior?: 'normal' | 'inside' | 'outside';
  placement?: 'auto' | 'top' | 'top-center' | 'center' | 'bottom' | 'bottom-center';
  isOpen?: boolean;
  defaultOpen?: boolean;
  isDismissable?: boolean;
  isKeyboardDismissDisabled?: boolean;
  shouldBlockScroll?: boolean;
  hideCloseButton?: boolean;
  closeButton?: ReactNode;
  motionProps?: MotionProps;
  portalContainer?: HTMLElement;
  disableAnimation?: boolean;
  classNames?: Partial<ModalSlots>;
  className?: string;
  onOpenChange?: (isOpen: boolean) => void;
  onClose?: () => void;
  isDraggable?: boolean;
  allowOverflow?: boolean;
}

export interface ModalSlots {
  wrapper?: string;
  base?: string;
  backdrop?: string;
  header?: string;
  body?: string;
  footer?: string;
  closeButton?: string;
}

export interface UseModalReturn {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onOpenChange: (isOpen: boolean) => void;
}
```

## Key Features

- **Multiple Sizes**: From `xs` to `full` screen coverage
- **Backdrop Variants**: Transparent, opaque, or blur effects
- **Flexible Placement**: Position modals anywhere on screen
- **Scroll Control**: Normal, inside, or outside scroll behavior
- **Draggable**: Optional drag-to-move functionality
- **Focus Management**: Automatic focus trapping and restoration
- **Portal Rendering**: Renders outside normal DOM flow
- **Body Scroll Lock**: Prevents background scrolling
- **Smooth Animations**: Framer Motion powered transitions
- **Full TypeScript**: Complete type safety and IntelliSense
- **Customizable Styling**: Override styles with `classNames` prop
- **Accessibility**: ARIA attributes, keyboard navigation, screen reader support

## Accessibility

- ARIA attributes for screen readers
- Focus trap within modal content
- Escape key to close (can be disabled)
- Focus restoration when modal closes
- Keyboard navigation support
- Proper heading hierarchy with modal titles

## Real-world Use Cases

- **Confirmation Dialogs**: Delete confirmations, important actions
- **Forms**: Contact forms, user registration, settings
- **Content Display**: Image galleries, detailed information
- **Alerts and Notifications**: Important messages, warnings
- **Settings Panels**: User preferences, configuration options
- **Multi-step Wizards**: Guided user flows with navigation