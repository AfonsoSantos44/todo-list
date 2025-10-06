// components/TodoInput.js
import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

const TodoInput = ({ userInput, updateInput = () => {}, addItem }) => {
  return (
    <InputGroup className="mb-3">
      <FormControl
        placeholder="✍️ What needs to be done?"
        size="lg"
        value={userInput}
        onChange={(e) => updateInput(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && addItem()}
        aria-label="add something"
        style={{
          borderRadius: '15px 0 0 15px',
          border: '2px solid #e3f2fd',
          fontSize: '1.1rem',
          padding: '12px 20px',
          boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.05)'
        }}
      />
      <Button 
        variant="primary" 
        onClick={addItem}
        style={{
          borderRadius: '0 15px 15px 0',
          background: 'linear-gradient(45deg, #667eea, #764ba2)',
          border: 'none',
          padding: '12px 25px',
          fontSize: '1rem',
          fontWeight: '600',
          boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = 'translateY(-2px)';
          e.target.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.4)';
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'translateY(0)';
          e.target.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.3)';
        }}
      >
        ADD
      </Button>
    </InputGroup>
  );
};

export default TodoInput;
