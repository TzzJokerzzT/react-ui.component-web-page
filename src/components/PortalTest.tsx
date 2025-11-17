import React from 'react';
import { createPortal } from 'react-dom';

export const PortalTest: React.FC = () => {
  console.log('PortalTest rendering');
  
  // Simple portal test
  const portalContent = (
    <div style={{
      position: 'fixed',
      top: '20px',
      left: '20px',
      backgroundColor: 'yellow',
      border: '3px solid red',
      padding: '20px',
      zIndex: 10000,
      fontSize: '18px',
      fontWeight: 'bold'
    }}>
      🎯 PORTAL TEST: If you see this, createPortal works!
    </div>
  );
  
  const portalElement = typeof document !== 'undefined' ? document.body : null;
  
  return (
    <div style={{ padding: '50px' }}>
      <h1>Portal Test Page</h1>
      <p>This page tests if createPortal works in our environment.</p>
      <p>You should see a yellow box in the top-left corner if it works.</p>
      
      <div style={{ marginTop: '30px', padding: '20px', backgroundColor: '#f0f0f0' }}>
        <h2>Debug Info:</h2>
        <p>Portal element exists: {portalElement ? 'YES' : 'NO'}</p>
        <p>Portal element type: {portalElement?.tagName || 'null'}</p>
        <p>Document available: {typeof document !== 'undefined' ? 'YES' : 'NO'}</p>
      </div>
      
      {portalElement && createPortal(portalContent, portalElement)}
    </div>
  );
};