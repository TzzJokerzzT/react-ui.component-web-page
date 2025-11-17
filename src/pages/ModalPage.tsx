import { useState } from 'react';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useModal,
} from '../components/Modal';

// Icons for demos
const HeartIcon = () => (
  <svg
    fill="none"
    height="20"
    viewBox="0 0 24 24"
    width="20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);

const MailIcon = () => (
  <svg
    fill="none"
    height="20"
    viewBox="0 0 24 24"
    width="20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
    <polyline
      points="22,6 12,13 2,6"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);

const WarningIcon = () => (
  <svg
    fill="none"
    height="20"
    viewBox="0 0 24 24"
    width="20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
    <path
      d="M12 9v4"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
    <path
      d="m12 17 .01 0"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);

export default function ModalPage() {
  // Basic modal
  const basicModal = useModal();
  
  // Size modals
  const [sizeModal, setSizeModal] = useState<string | null>(null);
  
  // Backdrop modals
  const [backdropModal, setBackdropModal] = useState<string | null>(null);
  
  // Placement modals
  const [placementModal, setPlacementModal] = useState<string | null>(null);
  
  // Scroll behavior modals
  const [scrollModal, setScrollModal] = useState<string | null>(null);
  
  // Special features
  const draggableModal = useModal();
  const nonDismissableModal = useModal();
  const customModal = useModal();
  const formModal = useModal();
  const confirmModal = useModal();
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    formModal.onClose();
    setFormData({ name: '', email: '', message: '' });
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-4">Modal Component</h1>
        <p className="text-lg text-foreground-600 mb-6">
          A flexible modal dialog component with various sizes, backdrops, animations, and advanced features like dragging.
        </p>
      </div>

      {/* Basic Modal */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Basic Modal</h2>
        <div className="flex gap-4">
          <button
            onClick={basicModal.onOpen}
            className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Open Modal
          </button>
        </div>
        
        <Modal
          isOpen={basicModal.isOpen}
          onOpenChange={basicModal.onOpenChange}
          size="md"
        >
          <ModalContent>
            <ModalHeader>
              <h3 className="text-lg font-semibold">Basic Modal</h3>
            </ModalHeader>
            <ModalBody>
              <p className="text-foreground-600">
                This is a basic modal with default settings. It can be dismissed by clicking the backdrop,
                pressing the Escape key, or clicking the close button.
              </p>
            </ModalBody>
            <ModalFooter>
              <button
                onClick={basicModal.onClose}
                className="px-4 py-2 text-foreground-600 hover:text-foreground transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={basicModal.onClose}
                className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Confirm
              </button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </section>

      {/* Modal Sizes */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Modal Sizes</h2>
        <div className="flex flex-wrap gap-4">
          {(['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', 'full'] as const).map((size) => (
            <button
              key={size}
              onClick={() => setSizeModal(size)}
              className="bg-secondary text-secondary-foreground px-4 py-2 rounded-lg font-medium hover:bg-secondary/90 transition-colors"
            >
              {size.toUpperCase()}
            </button>
          ))}
        </div>
        
        <Modal
          isOpen={sizeModal !== null}
          onOpenChange={(isOpen) => !isOpen && setSizeModal(null)}
          size={sizeModal as any}
        >
          <ModalContent>
            <ModalHeader>
              <h3 className="text-lg font-semibold">Size: {sizeModal}</h3>
            </ModalHeader>
            <ModalBody>
              <p className="text-foreground-600">
                This modal is using the "{sizeModal}" size variant. Each size provides different 
                dimensions suitable for various content types and screen sizes.
              </p>
            </ModalBody>
            <ModalFooter>
              <button
                onClick={() => setSizeModal(null)}
                className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Close
              </button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </section>

      {/* Backdrop Variants */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Backdrop Variants</h2>
        <div className="flex gap-4">
          {(['transparent', 'opaque', 'blur'] as const).map((backdrop) => (
            <button
              key={backdrop}
              onClick={() => setBackdropModal(backdrop)}
              className="bg-warning text-warning-foreground px-4 py-2 rounded-lg font-medium hover:bg-warning/90 transition-colors capitalize"
            >
              {backdrop}
            </button>
          ))}
        </div>
        
        <Modal
          isOpen={backdropModal !== null}
          onOpenChange={(isOpen) => !isOpen && setBackdropModal(null)}
          backdrop={backdropModal as any}
        >
          <ModalContent>
            <ModalHeader>
              <h3 className="text-lg font-semibold">Backdrop: {backdropModal}</h3>
            </ModalHeader>
            <ModalBody>
              <p className="text-foreground-600">
                This modal uses the "{backdropModal}" backdrop variant. Notice how the background
                behaves differently with each variant.
              </p>
              <ul className="list-disc list-inside mt-4 space-y-1 text-sm text-foreground-600">
                <li><strong>Transparent:</strong> No backdrop overlay</li>
                <li><strong>Opaque:</strong> Solid dark overlay</li>
                <li><strong>Blur:</strong> Blurred background effect</li>
              </ul>
            </ModalBody>
            <ModalFooter>
              <button
                onClick={() => setBackdropModal(null)}
                className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Close
              </button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </section>

      {/* Placement Options */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Placement Options</h2>
        <div className="flex flex-wrap gap-4">
          {(['auto', 'top', 'top-center', 'center', 'bottom', 'bottom-center'] as const).map((placement) => (
            <button
              key={placement}
              onClick={() => setPlacementModal(placement)}
              className="bg-success text-success-foreground px-4 py-2 rounded-lg font-medium hover:bg-success/90 transition-colors"
            >
              {placement.replace('-', ' ').toUpperCase()}
            </button>
          ))}
        </div>
        
        <Modal
          isOpen={placementModal !== null}
          onOpenChange={(isOpen) => !isOpen && setPlacementModal(null)}
          placement={placementModal as any}
          size="sm"
        >
          <ModalContent>
            <ModalHeader>
              <h3 className="text-lg font-semibold">Placement: {placementModal}</h3>
            </ModalHeader>
            <ModalBody>
              <p className="text-foreground-600">
                This modal is positioned using the "{placementModal}" placement option.
                Notice how the modal appears in different positions on the screen.
              </p>
            </ModalBody>
            <ModalFooter>
              <button
                onClick={() => setPlacementModal(null)}
                className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Close
              </button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </section>

      {/* Scroll Behavior */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Scroll Behavior</h2>
        <div className="flex gap-4">
          {(['normal', 'inside', 'outside'] as const).map((scroll) => (
            <button
              key={scroll}
              onClick={() => setScrollModal(scroll)}
              className="bg-danger text-danger-foreground px-4 py-2 rounded-lg font-medium hover:bg-danger/90 transition-colors capitalize"
            >
              {scroll}
            </button>
          ))}
        </div>
        
        <Modal
          isOpen={scrollModal !== null}
          onOpenChange={(isOpen) => !isOpen && setScrollModal(null)}
          scrollBehavior={scrollModal as any}
          size="md"
        >
          <ModalContent>
            <ModalHeader>
              <h3 className="text-lg font-semibold">Scroll: {scrollModal}</h3>
            </ModalHeader>
            <ModalBody>
              <div className="space-y-4">
              <p className="text-foreground-600">
                Este modal demuestra el comportamiento de scroll "{scrollModal}". 
                {scrollModal === 'normal' && " El contenido tiene una altura máxima y se scrollea dentro del body."}
                {scrollModal === 'inside' && " Todo el scroll ocurre dentro del cuerpo del modal, manteniendo el header y footer fijos."}
                {scrollModal === 'outside' && " El modal completo se hace scrolleable en la página, permitiendo contenido muy largo."}
              </p>
                {Array.from({ length: 15 }, (_, i) => (
                  <p key={i} className="text-foreground-600 mb-4">
                    <strong>Párrafo {i + 1}:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    {scrollModal === 'inside' && (
                      <span className="text-primary"> (Scroll dentro del body del modal)</span>
                    )}
                    {scrollModal === 'outside' && (
                      <span className="text-primary"> (Scroll en toda la página)</span>
                    )}
                    {scrollModal === 'normal' && (
                      <span className="text-primary"> (Scroll normal con altura limitada)</span>
                    )}
                  </p>
                ))}
              </div>
            </ModalBody>
            <ModalFooter>
              <button
                onClick={() => setScrollModal(null)}
                className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Close
              </button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </section>

      {/* Draggable Modal */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Draggable Modal</h2>
        <div className="flex gap-4">
          <button
            onClick={draggableModal.onOpen}
            className="bg-secondary text-secondary-foreground px-6 py-2 rounded-lg font-medium hover:bg-secondary/90 transition-colors"
          >
            Open Draggable Modal
          </button>
        </div>
        
        <Modal
          isOpen={draggableModal.isOpen}
          onOpenChange={draggableModal.onOpenChange}
          isDraggable
          allowOverflow
          size="sm"
        >
          <ModalContent>
            <ModalHeader>
              <div className="flex items-center gap-2">
                <span>🎯</span>
                <h3 className="text-lg font-semibold">Draggable Modal</h3>
              </div>
            </ModalHeader>
            <ModalBody>
              <p className="text-foreground-600">
                ¡Este modal se puede arrastrar! Intenta hacer click y arrastrar en el modal
                para moverlo por la pantalla. El cursor cambiará para indicar que es arrastrable.
              </p>
              <p className="text-sm text-foreground-500 mt-2">
                💡 Tip: El modal regresa al centro cuando se vuelve a abrir.
              </p>
              <p className="text-sm text-foreground-500 mt-1">
                🎯 Mejor experiencia: Arrastra desde el header (título) del modal.
              </p>
            </ModalBody>
            <ModalFooter>
              <button
                onClick={draggableModal.onClose}
                className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Close
              </button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </section>

      {/* Non-dismissable Modal */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Non-dismissable Modal</h2>
        <div className="flex gap-4">
          <button
            onClick={nonDismissableModal.onOpen}
            className="bg-warning text-warning-foreground px-6 py-2 rounded-lg font-medium hover:bg-warning/90 transition-colors"
          >
            Open Non-dismissable Modal
          </button>
        </div>
        
        <Modal
          isOpen={nonDismissableModal.isOpen}
          onOpenChange={nonDismissableModal.onOpenChange}
          isDismissable={false}
          isKeyboardDismissDisabled={true}
          hideCloseButton={true}
          size="sm"
        >
          <ModalContent>
            <ModalHeader>
              <div className="flex items-center gap-2">
                <WarningIcon />
                <h3 className="text-lg font-semibold">Important Action Required</h3>
              </div>
            </ModalHeader>
            <ModalBody>
              <p className="text-foreground-600">
                This modal cannot be dismissed by clicking outside, pressing Escape, or using the close button.
                You must explicitly click one of the action buttons below.
              </p>
            </ModalBody>
            <ModalFooter>
              <button
                onClick={nonDismissableModal.onClose}
                className="px-4 py-2 text-foreground-600 hover:text-foreground transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={nonDismissableModal.onClose}
                className="bg-warning text-warning-foreground px-4 py-2 rounded-lg font-medium hover:bg-warning/90 transition-colors"
              >
                Acknowledge
              </button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </section>

      {/* Form Modal */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Form Modal</h2>
        <div className="flex gap-4">
          <button
            onClick={formModal.onOpen}
            className="bg-success text-success-foreground px-6 py-2 rounded-lg font-medium hover:bg-success/90 transition-colors"
          >
            Open Contact Form
          </button>
        </div>
        
        <Modal
          isOpen={formModal.isOpen}
          onOpenChange={(isOpen) => {
            formModal.onOpenChange(isOpen);
            if (!isOpen) resetForm();
          }}
          size="md"
        >
          <ModalContent>
            <ModalHeader>
              <div className="flex items-center gap-2">
                <MailIcon />
                <h3 className="text-lg font-semibold">Contact Us</h3>
              </div>
            </ModalHeader>
            <form onSubmit={handleFormSubmit}>
              <ModalBody>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2 border border-divider rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2 border border-divider rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="w-full px-3 py-2 border border-divider rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
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
                    formModal.onClose();
                    resetForm();
                  }}
                  className="px-4 py-2 text-foreground-600 hover:text-foreground transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-success text-success-foreground px-4 py-2 rounded-lg font-medium hover:bg-success/90 transition-colors flex items-center gap-2"
                >
                  <MailIcon />
                  Send Message
                </button>
              </ModalFooter>
            </form>
          </ModalContent>
        </Modal>
      </section>

      {/* Confirmation Modal */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Confirmation Modal</h2>
        <div className="flex gap-4">
          <button
            onClick={confirmModal.onOpen}
            className="bg-danger text-danger-foreground px-6 py-2 rounded-lg font-medium hover:bg-danger/90 transition-colors"
          >
            Delete Account
          </button>
        </div>
        
        <Modal
          isOpen={confirmModal.isOpen}
          onOpenChange={confirmModal.onOpenChange}
          size="sm"
          backdrop="blur"
        >
          <ModalContent>
            <ModalHeader>
              <div className="flex items-center gap-2 text-danger">
                <WarningIcon />
                <h3 className="text-lg font-semibold">Confirm Deletion</h3>
              </div>
            </ModalHeader>
            <ModalBody>
              <p className="text-foreground-600">
                Are you sure you want to delete your account? This action cannot be undone and
                all your data will be permanently removed.
              </p>
            </ModalBody>
            <ModalFooter>
              <button
                onClick={confirmModal.onClose}
                className="px-4 py-2 text-foreground-600 hover:text-foreground transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={confirmModal.onClose}
                className="bg-danger text-danger-foreground px-4 py-2 rounded-lg font-medium hover:bg-danger/90 transition-colors"
              >
                Delete Account
              </button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </section>

      {/* Custom Styled Modal */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Custom Styled Modal</h2>
        <div className="flex gap-4">
          <button
            onClick={customModal.onOpen}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all"
          >
            Open Custom Modal
          </button>
        </div>
        
        <Modal
          isOpen={customModal.isOpen}
          onOpenChange={customModal.onOpenChange}
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
                <h3 className="text-lg font-semibold">Custom Styled Modal</h3>
              </div>
            </ModalHeader>
            <ModalBody>
              <div className="space-y-4">
                <p className="text-foreground-600">
                  This modal demonstrates custom styling using the `classNames` prop. You can
                  override the styles of different parts of the modal.
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
              <button
                onClick={customModal.onClose}
                className="px-4 py-2 text-purple-600 hover:text-purple-800 transition-colors"
              >
                Close
              </button>
              <button
                onClick={customModal.onClose}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all"
              >
                <div className="flex items-center gap-2">
                  <HeartIcon />
                  Like It!
                </div>
              </button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </section>

      {/* Props Reference */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-foreground mb-6">Props Reference</h2>
        
        {/* Modal Props */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-foreground mb-4">Modal</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-divider rounded-lg">
              <thead>
                <tr className="bg-default-50">
                  <th className="border border-divider px-4 py-3 text-left font-semibold text-foreground">Prop</th>
                  <th className="border border-divider px-4 py-3 text-left font-semibold text-foreground">Type</th>
                  <th className="border border-divider px-4 py-3 text-left font-semibold text-foreground">Default</th>
                  <th className="border border-divider px-4 py-3 text-left font-semibold text-foreground">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-divider px-4 py-3 font-mono text-sm">children</td>
                  <td className="border border-divider px-4 py-3 font-mono text-sm text-foreground-600">ReactNode</td>
                  <td className="border border-divider px-4 py-3 font-mono text-sm text-foreground-600">-</td>
                  <td className="border border-divider px-4 py-3 text-sm text-foreground-600">Modal content (usually ModalContent)</td>
                </tr>
                <tr>
                  <td className="border border-divider px-4 py-3 font-mono text-sm">size</td>
                  <td className="border border-divider px-4 py-3 font-mono text-sm text-foreground-600">'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | 'full'</td>
                  <td className="border border-divider px-4 py-3 font-mono text-sm text-foreground-600">'md'</td>
                  <td className="border border-divider px-4 py-3 text-sm text-foreground-600">Modal size</td>
                </tr>
                <tr>
                  <td className="border border-divider px-4 py-3 font-mono text-sm">radius</td>
                  <td className="border border-divider px-4 py-3 font-mono text-sm text-foreground-600">'none' | 'sm' | 'md' | 'lg'</td>
                  <td className="border border-divider px-4 py-3 font-mono text-sm text-foreground-600">'md'</td>
                  <td className="border border-divider px-4 py-3 text-sm text-foreground-600">Border radius</td>
                </tr>
                <tr>
                  <td className="border border-divider px-4 py-3 font-mono text-sm">shadow</td>
                  <td className="border border-divider px-4 py-3 font-mono text-sm text-foreground-600">'none' | 'sm' | 'md' | 'lg'</td>
                  <td className="border border-divider px-4 py-3 font-mono text-sm text-foreground-600">'md'</td>
                  <td className="border border-divider px-4 py-3 text-sm text-foreground-600">Drop shadow</td>
                </tr>
                <tr>
                  <td className="border border-divider px-4 py-3 font-mono text-sm">backdrop</td>
                  <td className="border border-divider px-4 py-3 font-mono text-sm text-foreground-600">'transparent' | 'opaque' | 'blur'</td>
                  <td className="border border-divider px-4 py-3 font-mono text-sm text-foreground-600">'opaque'</td>
                  <td className="border border-divider px-4 py-3 text-sm text-foreground-600">Backdrop type</td>
                </tr>
                <tr>
                  <td className="border border-divider px-4 py-3 font-mono text-sm">scrollBehavior</td>
                  <td className="border border-divider px-4 py-3 font-mono text-sm text-foreground-600">'normal' | 'inside' | 'outside'</td>
                  <td className="border border-divider px-4 py-3 font-mono text-sm text-foreground-600">'normal'</td>
                  <td className="border border-divider px-4 py-3 text-sm text-foreground-600">Scroll behavior</td>
                </tr>
                <tr>
                  <td className="border border-divider px-4 py-3 font-mono text-sm">placement</td>
                  <td className="border border-divider px-4 py-3 font-mono text-sm text-foreground-600">'auto' | 'top' | 'top-center' | 'center' | 'bottom' | 'bottom-center'</td>
                  <td className="border border-divider px-4 py-3 font-mono text-sm text-foreground-600">'center'</td>
                  <td className="border border-divider px-4 py-3 text-sm text-foreground-600">Modal position</td>
                </tr>
                <tr>
                  <td className="border border-divider px-4 py-3 font-mono text-sm">isOpen</td>
                  <td className="border border-divider px-4 py-3 font-mono text-sm text-foreground-600">boolean</td>
                  <td className="border border-divider px-4 py-3 font-mono text-sm text-foreground-600">false</td>
                  <td className="border border-divider px-4 py-3 text-sm text-foreground-600">Whether the modal is open</td>
                </tr>
                <tr>
                  <td className="border border-divider px-4 py-3 font-mono text-sm">defaultOpen</td>
                  <td className="border border-divider px-4 py-3 font-mono text-sm text-foreground-600">boolean</td>
                  <td className="border border-divider px-4 py-3 font-mono text-sm text-foreground-600">false</td>
                  <td className="border border-divider px-4 py-3 text-sm text-foreground-600">Default open state (uncontrolled)</td>
                </tr>
                <tr>
                  <td className="border border-divider px-4 py-3 font-mono text-sm">isDismissable</td>
                  <td className="border border-divider px-4 py-3 font-mono text-sm text-foreground-600">boolean</td>
                  <td className="border border-divider px-4 py-3 font-mono text-sm text-foreground-600">true</td>
                  <td className="border border-divider px-4 py-3 text-sm text-foreground-600">Whether clicking backdrop closes modal</td>
                </tr>
                <tr>
                  <td className="border border-divider px-4 py-3 font-mono text-sm">isKeyboardDismissDisabled</td>
                  <td className="border border-divider px-4 py-3 font-mono text-sm text-foreground-600">boolean</td>
                  <td className="border border-divider px-4 py-3 font-mono text-sm text-foreground-600">false</td>
                  <td className="border border-divider px-4 py-3 text-sm text-foreground-600">Whether Escape key is disabled</td>
                </tr>
                <tr>
                  <td className="border border-divider px-4 py-3 font-mono text-sm">shouldBlockScroll</td>
                  <td className="border border-divider px-4 py-3 font-mono text-sm text-foreground-600">boolean</td>
                  <td className="border border-divider px-4 py-3 font-mono text-sm text-foreground-600">true</td>
                  <td className="border border-divider px-4 py-3 text-sm text-foreground-600">Whether to block body scroll when open</td>
                </tr>
                <tr>
                  <td className="border border-divider px-4 py-3 font-mono text-sm">hideCloseButton</td>
                  <td className="border border-divider px-4 py-3 font-mono text-sm text-foreground-600">boolean</td>
                  <td className="border border-divider px-4 py-3 font-mono text-sm text-foreground-600">false</td>
                  <td className="border border-divider px-4 py-3 text-sm text-foreground-600">Whether to hide the close button</td>
                </tr>
                <tr>
                  <td className="border border-divider px-4 py-3 font-mono text-sm">closeButton</td>
                  <td className="border border-divider px-4 py-3 font-mono text-sm text-foreground-600">ReactNode</td>
                  <td className="border border-divider px-4 py-3 font-mono text-sm text-foreground-600">-</td>
                  <td className="border border-divider px-4 py-3 text-sm text-foreground-600">Custom close button element</td>
                </tr>
                <tr>
                  <td className="border border-divider px-4 py-3 font-mono text-sm">motionProps</td>
                  <td className="border border-divider px-4 py-3 font-mono text-sm text-foreground-600">MotionProps</td>
                  <td className="border border-divider px-4 py-3 font-mono text-sm text-foreground-600">-</td>
                  <td className="border border-divider px-4 py-3 text-sm text-foreground-600">Framer Motion animation props</td>
                </tr>
                <tr>
                  <td className="border border-divider px-4 py-3 font-mono text-sm">portalContainer</td>
                  <td className="border border-divider px-4 py-3 font-mono text-sm text-foreground-600">HTMLElement</td>
                  <td className="border border-divider px-4 py-3 font-mono text-sm text-foreground-600">document.body</td>
                  <td className="border border-divider px-4 py-3 text-sm text-foreground-600">Portal container element</td>
                </tr>
                <tr>
                  <td className="border border-divider px-4 py-3 font-mono text-sm">disableAnimation</td>
                  <td className="border border-divider px-4 py-3 font-mono text-sm text-foreground-600">boolean</td>
                  <td className="border border-divider px-4 py-3 font-mono text-sm text-foreground-600">false</td>
                  <td className="border border-divider px-4 py-3 text-sm text-foreground-600">Whether to disable animations</td>
                </tr>
                <tr>
                  <td className="border border-divider px-4 py-3 font-mono text-sm">classNames</td>
                  <td className="border border-divider px-4 py-3 font-mono text-sm text-foreground-600">Partial&lt;ModalSlots&gt;</td>
                  <td className="border border-divider px-4 py-3 font-mono text-sm text-foreground-600">-</td>
                  <td className="border border-divider px-4 py-3 text-sm text-foreground-600">Custom class names for different parts</td>
                </tr>
                <tr>
                  <td className="border border-divider px-4 py-3 font-mono text-sm">className</td>
                  <td className="border border-divider px-4 py-3 font-mono text-sm text-foreground-600">string</td>
                  <td className="border border-divider px-4 py-3 font-mono text-sm text-foreground-600">-</td>
                  <td className="border border-divider px-4 py-3 text-sm text-foreground-600">Additional CSS class</td>
                </tr>
                <tr>
                  <td className="border border-divider px-4 py-3 font-mono text-sm">onOpenChange</td>
                  <td className="border border-divider px-4 py-3 font-mono text-sm text-foreground-600">(isOpen: boolean) =&gt; void</td>
                  <td className="border border-divider px-4 py-3 font-mono text-sm text-foreground-600">-</td>
                  <td className="border border-divider px-4 py-3 text-sm text-foreground-600">Callback when open state changes</td>
                </tr>
                <tr>
                  <td className="border border-divider px-4 py-3 font-mono text-sm">onClose</td>
                  <td className="border border-divider px-4 py-3 font-mono text-sm text-foreground-600">() =&gt; void</td>
                  <td className="border border-divider px-4 py-3 font-mono text-sm text-foreground-600">-</td>
                  <td className="border border-divider px-4 py-3 text-sm text-foreground-600">Callback when modal closes</td>
                </tr>
                <tr>
                  <td className="border border-divider px-4 py-3 font-mono text-sm">isDraggable</td>
                  <td className="border border-divider px-4 py-3 font-mono text-sm text-foreground-600">boolean</td>
                  <td className="border border-divider px-4 py-3 font-mono text-sm text-foreground-600">false</td>
                  <td className="border border-divider px-4 py-3 text-sm text-foreground-600">Whether the modal can be dragged</td>
                </tr>
                <tr>
                  <td className="border border-divider px-4 py-3 font-mono text-sm">allowOverflow</td>
                  <td className="border border-divider px-4 py-3 font-mono text-sm text-foreground-600">boolean</td>
                  <td className="border border-divider px-4 py-3 font-mono text-sm text-foreground-600">false</td>
                  <td className="border border-divider px-4 py-3 text-sm text-foreground-600">Whether dragged modal can go outside viewport</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* ModalContent Props */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-foreground mb-4">ModalContent</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-divider rounded-lg">
              <thead>
                <tr className="bg-default-50">
                  <th className="border border-divider px-4 py-3 text-left font-semibold text-foreground">Prop</th>
                  <th className="border border-divider px-4 py-3 text-left font-semibold text-foreground">Type</th>
                  <th className="border border-divider px-4 py-3 text-left font-semibold text-foreground">Default</th>
                  <th className="border border-divider px-4 py-3 text-left font-semibold text-foreground">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-divider px-4 py-3 font-mono text-sm">children</td>
                  <td className="border border-divider px-4 py-3 font-mono text-sm text-foreground-600">ReactNode</td>
                  <td className="border border-divider px-4 py-3 font-mono text-sm text-foreground-600">-</td>
                  <td className="border border-divider px-4 py-3 text-sm text-foreground-600">Content to display</td>
                </tr>
                <tr>
                  <td className="border border-divider px-4 py-3 font-mono text-sm">className</td>
                  <td className="border border-divider px-4 py-3 font-mono text-sm text-foreground-600">string</td>
                  <td className="border border-divider px-4 py-3 font-mono text-sm text-foreground-600">-</td>
                  <td className="border border-divider px-4 py-3 text-sm text-foreground-600">Additional CSS class</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* ModalHeader Props */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-foreground mb-4">ModalHeader</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-divider rounded-lg">
              <thead>
                <tr className="bg-default-50">
                  <th className="border border-divider px-4 py-3 text-left font-semibold text-foreground">Prop</th>
                  <th className="border border-divider px-4 py-3 text-left font-semibold text-foreground">Type</th>
                  <th className="border border-divider px-4 py-3 text-left font-semibold text-foreground">Default</th>
                  <th className="border border-divider px-4 py-3 text-left font-semibold text-foreground">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-divider px-4 py-3 font-mono text-sm">children</td>
                  <td className="border border-divider px-4 py-3 font-mono text-sm text-foreground-600">ReactNode</td>
                  <td className="border border-divider px-4 py-3 font-mono text-sm text-foreground-600">-</td>
                  <td className="border border-divider px-4 py-3 text-sm text-foreground-600">Header content</td>
                </tr>
                <tr>
                  <td className="border border-divider px-4 py-3 font-mono text-sm">className</td>
                  <td className="border border-divider px-4 py-3 font-mono text-sm text-foreground-600">string</td>
                  <td className="border border-divider px-4 py-3 font-mono text-sm text-foreground-600">-</td>
                  <td className="border border-divider px-4 py-3 text-sm text-foreground-600">Additional CSS class</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* ModalBody Props */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-foreground mb-4">ModalBody</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-divider rounded-lg">
              <thead>
                <tr className="bg-default-50">
                  <th className="border border-divider px-4 py-3 text-left font-semibold text-foreground">Prop</th>
                  <th className="border border-divider px-4 py-3 text-left font-semibold text-foreground">Type</th>
                  <th className="border border-divider px-4 py-3 text-left font-semibold text-foreground">Default</th>
                  <th className="border border-divider px-4 py-3 text-left font-semibold text-foreground">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-divider px-4 py-3 font-mono text-sm">children</td>
                  <td className="border border-divider px-4 py-3 font-mono text-sm text-foreground-600">ReactNode</td>
                  <td className="border border-divider px-4 py-3 font-mono text-sm text-foreground-600">-</td>
                  <td className="border border-divider px-4 py-3 text-sm text-foreground-600">Body content</td>
                </tr>
                <tr>
                  <td className="border border-divider px-4 py-3 font-mono text-sm">className</td>
                  <td className="border border-divider px-4 py-3 font-mono text-sm text-foreground-600">string</td>
                  <td className="border border-divider px-4 py-3 font-mono text-sm text-foreground-600">-</td>
                  <td className="border border-divider px-4 py-3 text-sm text-foreground-600">Additional CSS class</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* ModalFooter Props */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-foreground mb-4">ModalFooter</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-divider rounded-lg">
              <thead>
                <tr className="bg-default-50">
                  <th className="border border-divider px-4 py-3 text-left font-semibold text-foreground">Prop</th>
                  <th className="border border-divider px-4 py-3 text-left font-semibold text-foreground">Type</th>
                  <th className="border border-divider px-4 py-3 text-left font-semibold text-foreground">Default</th>
                  <th className="border border-divider px-4 py-3 text-left font-semibold text-foreground">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-divider px-4 py-3 font-mono text-sm">children</td>
                  <td className="border border-divider px-4 py-3 font-mono text-sm text-foreground-600">ReactNode</td>
                  <td className="border border-divider px-4 py-3 font-mono text-sm text-foreground-600">-</td>
                  <td className="border border-divider px-4 py-3 text-sm text-foreground-600">Footer content (usually buttons)</td>
                </tr>
                <tr>
                  <td className="border border-divider px-4 py-3 font-mono text-sm">className</td>
                  <td className="border border-divider px-4 py-3 font-mono text-sm text-foreground-600">string</td>
                  <td className="border border-divider px-4 py-3 font-mono text-sm text-foreground-600">-</td>
                  <td className="border border-divider px-4 py-3 text-sm text-foreground-600">Additional CSS class</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* useModal Hook */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-foreground mb-4">useModal Hook</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-divider rounded-lg">
              <thead>
                <tr className="bg-default-50">
                  <th className="border border-divider px-4 py-3 text-left font-semibold text-foreground">Prop</th>
                  <th className="border border-divider px-4 py-3 text-left font-semibold text-foreground">Type</th>
                  <th className="border border-divider px-4 py-3 text-left font-semibold text-foreground">Default</th>
                  <th className="border border-divider px-4 py-3 text-left font-semibold text-foreground">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-divider px-4 py-3 font-mono text-sm">isOpen</td>
                  <td className="border border-divider px-4 py-3 font-mono text-sm text-foreground-600">boolean</td>
                  <td className="border border-divider px-4 py-3 font-mono text-sm text-foreground-600">-</td>
                  <td className="border border-divider px-4 py-3 text-sm text-foreground-600">Controlled open state</td>
                </tr>
                <tr>
                  <td className="border border-divider px-4 py-3 font-mono text-sm">defaultOpen</td>
                  <td className="border border-divider px-4 py-3 font-mono text-sm text-foreground-600">boolean</td>
                  <td className="border border-divider px-4 py-3 font-mono text-sm text-foreground-600">false</td>
                  <td className="border border-divider px-4 py-3 text-sm text-foreground-600">Default open state (uncontrolled)</td>
                </tr>
                <tr>
                  <td className="border border-divider px-4 py-3 font-mono text-sm">onOpenChange</td>
                  <td className="border border-divider px-4 py-3 font-mono text-sm text-foreground-600">(isOpen: boolean) =&gt; void</td>
                  <td className="border border-divider px-4 py-3 font-mono text-sm text-foreground-600">-</td>
                  <td className="border border-divider px-4 py-3 text-sm text-foreground-600">Callback when state changes</td>
                </tr>
                <tr>
                  <td className="border border-divider px-4 py-3 font-mono text-sm">onClose</td>
                  <td className="border border-divider px-4 py-3 font-mono text-sm text-foreground-600">() =&gt; void</td>
                  <td className="border border-divider px-4 py-3 font-mono text-sm text-foreground-600">-</td>
                  <td className="border border-divider px-4 py-3 text-sm text-foreground-600">Callback when modal closes</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="mt-4">
            <h4 className="text-lg font-medium text-foreground mb-3">Return Value</h4>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-divider rounded-lg">
                <thead>
                  <tr className="bg-default-50">
                    <th className="border border-divider px-4 py-3 text-left font-semibold text-foreground">Property</th>
                    <th className="border border-divider px-4 py-3 text-left font-semibold text-foreground">Type</th>
                    <th className="border border-divider px-4 py-3 text-left font-semibold text-foreground">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-divider px-4 py-3 font-mono text-sm">isOpen</td>
                    <td className="border border-divider px-4 py-3 font-mono text-sm text-foreground-600">boolean</td>
                    <td className="border border-divider px-4 py-3 text-sm text-foreground-600">Current open state</td>
                  </tr>
                  <tr>
                    <td className="border border-divider px-4 py-3 font-mono text-sm">onOpen</td>
                    <td className="border border-divider px-4 py-3 font-mono text-sm text-foreground-600">() =&gt; void</td>
                    <td className="border border-divider px-4 py-3 text-sm text-foreground-600">Function to open the modal</td>
                  </tr>
                  <tr>
                    <td className="border border-divider px-4 py-3 font-mono text-sm">onClose</td>
                    <td className="border border-divider px-4 py-3 font-mono text-sm text-foreground-600">() =&gt; void</td>
                    <td className="border border-divider px-4 py-3 text-sm text-foreground-600">Function to close the modal</td>
                  </tr>
                  <tr>
                    <td className="border border-divider px-4 py-3 font-mono text-sm">onOpenChange</td>
                    <td className="border border-divider px-4 py-3 font-mono text-sm text-foreground-600">(isOpen: boolean) =&gt; void</td>
                    <td className="border border-divider px-4 py-3 text-sm text-foreground-600">Function to toggle modal state</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Usage Information */}
      <section className="mt-12 p-6 bg-default-50 rounded-lg">
        <h2 className="text-2xl font-semibold text-foreground mb-4">Usage Information</h2>
        <div className="space-y-4 text-foreground-600">
          <div>
            <h3 className="font-medium text-foreground mb-2">Key Features:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Multiple sizes (xs to 5xl, full)</li>
              <li>Different backdrop variants (transparent, opaque, blur)</li>
              <li>Flexible placement options</li>
              <li>Scroll behavior control (normal, inside, outside)</li>
              <li>Draggable functionality with constraints</li>
              <li>Focus management and keyboard navigation</li>
              <li>Portal rendering for z-index control</li>
              <li>Body scroll locking</li>
              <li>Smooth Framer Motion animations</li>
              <li>Full TypeScript support</li>
              <li>Customizable styling with classNames</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-foreground mb-2">Components:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li><code>Modal</code> - Main container with backdrop and portal</li>
              <li><code>ModalContent</code> - Content wrapper</li>
              <li><code>ModalHeader</code> - Header section with styling</li>
              <li><code>ModalBody</code> - Main content area</li>
              <li><code>ModalFooter</code> - Footer section for actions</li>
              <li><code>useModal</code> - Hook for modal state management</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-foreground mb-2">Accessibility:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>ARIA attributes for screen readers</li>
              <li>Focus trap within modal</li>
              <li>Escape key to close (can be disabled)</li>
              <li>Focus restoration on close</li>
              <li>Keyboard navigation support</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}