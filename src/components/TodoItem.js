// components/TodoItem.js
import React from "react";

const TodoItem = ({ item, index, deleteItem, editItem }) => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "transparent",
        borderBottom: "1px solid rgba(99, 99, 102, 0.3)",
        padding: "16px 24px",
        transition: "all 0.2s ease",
        fontSize: "1rem",
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      }}
      onMouseEnter={(e) => {
        e.target.style.backgroundColor = 'rgba(72, 72, 74, 0.4)';
      }}
      onMouseLeave={(e) => {
        e.target.style.backgroundColor = 'transparent';
      }}
    >
      {/* Checkbox */}
      <div
        onClick={handleChange}
        style={{
          width: '22px',
          height: '22px',
          borderRadius: '50%',
          border: checked ? 'none' : '2px solid rgba(142, 142, 147, 0.6)',
          backgroundColor: checked ? '#007AFF' : 'transparent',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: '16px',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          flexShrink: 0
        }}
      >
        {checked && (
          <span style={{ color: 'white', fontSize: '14px', fontWeight: 'bold' }}>✓</span>
        )}
      </div>

      {/* Task Text */}
      <span style={{ 
        color: checked ? '#8e8e93' : '#ffffff',
        fontWeight: '400',
        flex: 1,
        textDecoration: checked ? 'line-through' : 'none',
        opacity: checked ? 0.6 : 1,
        transition: 'all 0.3s ease',
        lineHeight: '1.4'
      }}>
        {item.value}
      </span>

      {/* Action Buttons */}
      <div style={{ display: 'flex', gap: '8px', marginLeft: '16px' }}>
        <button
          onClick={() => editItem(index)}
          style={{
            backgroundColor: 'rgba(255, 149, 0, 0.1)',
            border: '1px solid rgba(255, 149, 0, 0.3)',
            borderRadius: '8px',
            padding: '6px 12px',
            fontSize: '0.85rem',
            fontWeight: '500',
            color: '#FF9500',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
          }}
          onMouseDown={(e) => {
            e.target.style.backgroundColor = 'rgba(255, 149, 0, 0.2)';
            e.target.style.transform = 'scale(0.95)';
          }}
          onMouseUp={(e) => {
            e.target.style.backgroundColor = 'rgba(255, 149, 0, 0.1)';
            e.target.style.transform = 'scale(1)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'rgba(255, 149, 0, 0.1)';
            e.target.style.transform = 'scale(1)';
          }}
        >
          Edit
        </button>
        <button
          onClick={() => deleteItem(item.id)}
          style={{
            backgroundColor: 'rgba(255, 59, 48, 0.1)',
            border: '1px solid rgba(255, 59, 48, 0.3)',
            borderRadius: '8px',
            padding: '6px 12px',
            fontSize: '0.85rem',
            fontWeight: '500',
            color: '#FF3B30',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segue UI", Roboto, sans-serif'
          }}
          onMouseDown={(e) => {
            e.target.style.backgroundColor = 'rgba(255, 59, 48, 0.2)';
            e.target.style.transform = 'scale(0.95)';
          }}
          onMouseUp={(e) => {
            e.target.style.backgroundColor = 'rgba(255, 59, 48, 0.1)';
            e.target.style.transform = 'scale(1)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'rgba(255, 59, 48, 0.1)';
            e.target.style.transform = 'scale(1)';
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
