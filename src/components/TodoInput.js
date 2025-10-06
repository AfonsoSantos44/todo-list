// components/TodoInput.js
import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

const TodoInput = ({ userInput, updateInput = () => {}, addItem }) => {
  return (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <FormControl
        placeholder="New Reminder"
        value={userInput}
        onChange={(e) => updateInput(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && addItem()}
        style={{
          backgroundColor: 'rgba(58, 58, 60, 0.8)',
          border: '1px solid rgba(84, 84, 88, 0.4)',
          borderRadius: '12px',
          color: '#ffffff',
          fontSize: '1rem',
          padding: '14px 16px',
          fontWeight: '400',
          outline: 'none',
          transition: 'all 0.2s ease',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
        }}
        onFocus={(e) => {
          e.target.style.backgroundColor = 'rgba(58, 58, 60, 1)';
          e.target.style.borderColor = 'rgba(10, 132, 255, 0.6)';
          e.target.style.boxShadow = '0 0 0 4px rgba(10, 132, 255, 0.1)';
        }}
        onBlur={(e) => {
          e.target.style.backgroundColor = 'rgba(58, 58, 60, 0.8)';
          e.target.style.borderColor = 'rgba(84, 84, 88, 0.4)';
          e.target.style.boxShadow = 'none';
        }}
      />
      <Button 
        onClick={addItem}
        style={{
          backgroundColor: '#007AFF',
          border: 'none',
          borderRadius: '12px',
          padding: '14px 20px',
          fontSize: '1rem',
          fontWeight: '600',
          color: '#ffffff',
          minWidth: '80px',
          transition: 'all 0.2s ease',
          cursor: 'pointer',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
        }}
        onMouseDown={(e) => {
          e.target.style.backgroundColor = '#0056CC';
          e.target.style.transform = 'scale(0.98)';
        }}
        onMouseUp={(e) => {
          e.target.style.backgroundColor = '#007AFF';
          e.target.style.transform = 'scale(1)';
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = '#007AFF';
          e.target.style.transform = 'scale(1)';
        }}
      >
        Add
      </Button>
    </div>
  );
};

export default TodoInput;
