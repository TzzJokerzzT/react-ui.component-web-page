import React from 'react';

// Test importing components the same way as CleanPopoverTest
import { Popover } from "../components/Popover/Popover";
import { PopoverTrigger } from "../components/Popover/PopoverTrigger";
import { PopoverContent } from "../components/Popover/PopoverContent";

const SimplePopoverTest: React.FC = () => {
  console.log('🟡 SimplePopoverTest component is rendering');
  
  return (
    <div style={{ padding: '50px', backgroundColor: '#fafafa', minHeight: '100vh' }}>
      <h1 style={{ color: '#333', marginBottom: '30px', fontSize: '28px' }}>
        Simple Popover Test
      </h1>
      
      <div style={{ marginBottom: '30px', padding: '20px', backgroundColor: 'white', borderRadius: '8px' }}>
        <h2 style={{ marginBottom: '15px', color: '#555' }}>Test 1: Basic Click Test</h2>
        <p style={{ marginBottom: '15px', color: '#777' }}>
          This is a minimal test using the same import pattern as CleanPopoverTest.
        </p>
        
        <Popover>
          <PopoverTrigger>
            <button 
              style={{
                padding: '12px 24px',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                fontSize: '16px',
                cursor: 'pointer',
                fontWeight: '500'
              }}
            >
              Click Me (Simple Test)
            </button>
          </PopoverTrigger>
          <PopoverContent>
            <div>
              <h3 style={{ margin: '0 0 10px 0', color: '#333' }}>Simple Test Success!</h3>
              <p style={{ margin: '0', color: '#666' }}>
                If you see this, the basic popover functionality is working.
              </p>
            </div>
          </PopoverContent>
        </Popover>
      </div>
      
      <div style={{ marginBottom: '30px', padding: '20px', backgroundColor: 'white', borderRadius: '8px' }}>
        <h2 style={{ marginBottom: '15px', color: '#555' }}>Test 2: Default Open Test</h2>
        <p style={{ marginBottom: '15px', color: '#777' }}>
          This popover should be visible immediately (defaultOpen=true).
        </p>
        
        <Popover defaultOpen={true}>
          <PopoverTrigger>
            <button 
              style={{
                padding: '12px 24px',
                backgroundColor: '#28a745',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                fontSize: '16px',
                cursor: 'pointer',
                fontWeight: '500'
              }}
            >
              Always Open Test
            </button>
          </PopoverTrigger>
          <PopoverContent>
            <div>
              <h3 style={{ margin: '0 0 10px 0', color: '#333' }}>Always Open Success!</h3>
              <p style={{ margin: '0', color: '#666' }}>
                This popover should be visible without clicking.
              </p>
            </div>
          </PopoverContent>
        </Popover>
      </div>
      
      <div style={{ padding: '15px', backgroundColor: '#e9ecef', borderRadius: '6px', fontSize: '14px' }}>
        <strong>Debug Instructions:</strong>
        <ul style={{ marginTop: '10px', paddingLeft: '20px' }}>
          <li>Open browser console to see debug logs</li>
          <li>The first test should work on click</li>
          <li>The second test should show immediately</li>
          <li>If neither works, there's a fundamental context issue</li>
        </ul>
      </div>
    </div>
  );
};

export default SimplePopoverTest;