import { Input } from "../Input";

export const AccessibilityInput = () => {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold text-black dark:text-primary-50 mb-4">
        Accessibility Features
      </h2>
      <div className="space-y-4">
        <Input
          label="Accessible Input"
          placeholder="This input has full accessibility support"
          description="Try using keyboard navigation and screen readers"
          aria-label="Example accessible input field"
          data-testid="accessible-input"
        />
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h4 className="font-medium text-blue-900 mb-2">
            Accessibility Features:
          </h4>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• Built with native HTML input elements</li>
            <li>• Proper ARIA labeling and descriptions</li>
            <li>• Keyboard navigation support</li>
            <li>• Screen reader compatibility</li>
            <li>• Focus management and visual indicators</li>
            <li>• Error state communication to assistive technology</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
