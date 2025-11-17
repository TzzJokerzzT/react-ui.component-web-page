import React, { useState } from 'react';
import { Button, ButtonGroup } from './src/components/Button/button';
import { Card, CardHeader, CardBody, CardFooter } from './src/components/Card/Card';
import { Modal, ModalHeader, ModalBody, ModalFooter } from './src/components/Modal/Modal';
import { Toast } from './src/components/Toast/Toast';

export const DarkModeTest: React.FC = () => {
  const [isDark, setIsDark] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toasts, setToasts] = useState<any[]>([]);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const addToast = (type: string) => {
    const toast = {
      id: Math.random().toString(36),
      type,
      title: `${type.charAt(0).toUpperCase() + type.slice(1)} Toast`,
      description: 'This is a test toast message in dark mode'
    };
    setToasts(prev => [...prev, toast]);
    setTimeout(() => removeToast(toast.id), 5000);
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-6xl mx-auto p-6 space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Dark Mode Component Test
          </h1>
          <Button 
            onClick={toggleDarkMode}
            variant="outline"
            className="mb-8"
          >
            Toggle {isDark ? 'Light' : 'Dark'} Mode
          </Button>
        </div>

        {/* Button Tests */}
        <Card>
          <CardHeader>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Button Components</h2>
          </CardHeader>
          <CardBody>
            <div className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Solid Variants</h3>
                <div className="flex flex-wrap gap-2">
                  <Button color="default">Default</Button>
                  <Button color="primary">Primary</Button>
                  <Button color="secondary">Secondary</Button>
                  <Button color="success">Success</Button>
                  <Button color="warning">Warning</Button>
                  <Button color="danger">Danger</Button>
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Outline Variants</h3>
                <div className="flex flex-wrap gap-2">
                  <Button color="default" variant="outline">Default</Button>
                  <Button color="primary" variant="outline">Primary</Button>
                  <Button color="secondary" variant="outline">Secondary</Button>
                  <Button color="success" variant="outline">Success</Button>
                  <Button color="warning" variant="outline">Warning</Button>
                  <Button color="danger" variant="outline">Danger</Button>
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Ghost Variants</h3>
                <div className="flex flex-wrap gap-2">
                  <Button color="default" variant="ghost">Default</Button>
                  <Button color="primary" variant="ghost">Primary</Button>
                  <Button color="secondary" variant="ghost">Secondary</Button>
                  <Button color="success" variant="ghost">Success</Button>
                  <Button color="warning" variant="ghost">Warning</Button>
                  <Button color="danger" variant="ghost">Danger</Button>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Button Group</h3>
                <ButtonGroup>
                  <Button variant="outline">First</Button>
                  <Button variant="outline">Second</Button>
                  <Button variant="outline">Third</Button>
                </ButtonGroup>
              </div>
            </div>
          </CardBody>
        </Card>

        {/* Card Tests */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card color="default" variant="elevated">
            <CardHeader>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Elevated Card</h3>
            </CardHeader>
            <CardBody>
              <p className="text-gray-600 dark:text-gray-300">
                This is an elevated card with shadow effects that adapts to dark mode.
              </p>
            </CardBody>
            <CardFooter>
              <Button size="sm" variant="ghost">Action</Button>
            </CardFooter>
          </Card>

          <Card color="primary" variant="bordered">
            <CardHeader>
              <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-300">Primary Bordered Card</h3>
            </CardHeader>
            <CardBody>
              <p className="text-gray-600 dark:text-gray-300">
                A primary colored card with borders that work in both light and dark modes.
              </p>
            </CardBody>
            <CardFooter>
              <Button color="primary" size="sm">Primary Action</Button>
            </CardFooter>
          </Card>
        </div>

        {/* Modal Test */}
        <Card>
          <CardHeader>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Modal Component</h2>
          </CardHeader>
          <CardBody>
            <Button onClick={() => setIsModalOpen(true)}>
              Open Modal
            </Button>
          </CardBody>
        </Card>

        {/* Toast Tests */}
        <Card>
          <CardHeader>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Toast Components</h2>
          </CardHeader>
          <CardBody>
            <div className="flex flex-wrap gap-2">
              <Button size="sm" onClick={() => addToast('success')}>Success Toast</Button>
              <Button size="sm" onClick={() => addToast('error')}>Error Toast</Button>
              <Button size="sm" onClick={() => addToast('warning')}>Warning Toast</Button>
              <Button size="sm" onClick={() => addToast('info')}>Info Toast</Button>
              <Button size="sm" onClick={() => addToast('default')}>Default Toast</Button>
            </div>
          </CardBody>
        </Card>

        {/* Modal */}
        <Modal isOpen={isModalOpen} onOpenChange={setIsModalOpen}>
          <ModalHeader>
            <h3 className="text-lg font-semibold">Dark Mode Modal</h3>
          </ModalHeader>
          <ModalBody>
            <p>This modal adapts to dark mode with proper background, text, and border colors.</p>
            <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-800 rounded">
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Content inside the modal also responds to dark mode changes.
              </p>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button variant="outline" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setIsModalOpen(false)}>
              Confirm
            </Button>
          </ModalFooter>
        </Modal>

        {/* Toast Container */}
        <div className="fixed top-4 right-4 z-50 space-y-2">
          {toasts.map((toast) => (
            <Toast
              key={toast.id}
              {...toast}
              onRemove={removeToast}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DarkModeTest;