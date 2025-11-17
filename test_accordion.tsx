import React from 'react';

export const AccordionPage: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      <div className="text-center">
        <h1>Accordion Components</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div title="Test">
          <p>Test content</p>
        </div>
      </div>

      {/* Props Reference */}
      <div className="bg-white p-6">
        <h2>Props Reference</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th>Prop</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>children</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AccordionPage;