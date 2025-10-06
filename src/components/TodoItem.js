// components/TodoItem.js
import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const TodoItem = ({ item, index, deleteItem, editItem }) => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <ListGroup.Item
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#f8f9fc",
        border: "1px solid #e3f2fd",
        borderRadius: "12px",
        marginBottom: "10px",
        padding: "15px 20px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        transition: "all 0.3s ease",
        fontSize: "1.1rem"
      }}
      onMouseEnter={(e) => {
        e.target.style.transform = 'translateY(-2px)';
        e.target.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
        e.target.style.backgroundColor = '#ffffff';
      }}
      onMouseLeave={(e) => {
        e.target.style.transform = 'translateY(0)';
        e.target.style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)';
        e.target.style.backgroundColor = '#f8f9fc';
      }}
    >
      <span style={{ 
        color: '#2c3e50', 
        fontWeight: '500',
        flex: 1,
        marginRight: '15px',
        display: 'flex',
        alignItems: 'center'
      }}>
        <Form.Check 
          type="checkbox"
          checked={checked} 
          onChange={handleChange}
          style={{ marginRight: '10px' }}
        />
        <span style={{ 
          textDecoration: checked ? 'line-through' : 'none',
          opacity: checked ? 0.6 : 1,
          transition: 'all 0.3s ease'
        }}>
          {checked ? '✅' : '⏳'} {item.value}
        </span>
      </span>
      <div>
        <Button
          onClick={() => editItem(index)}
          style={{
            marginRight: "8px",
            backgroundColor: "#28a745",
            border: "none",
            borderRadius: "8px",
            padding: "6px 12px",
            fontSize: "0.9rem",
            fontWeight: "500",
            boxShadow: "0 2px 6px rgba(40, 167, 69, 0.3)"
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#218838";
            e.target.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "#28a745";
            e.target.style.transform = "scale(1)";
          }}
        >
          ✏️ Edit
        </Button>
        <Button
          onClick={() => deleteItem(item.id)}
          style={{
            backgroundColor: "#dc3545",
            border: "none",
            borderRadius: "8px",
            padding: "6px 12px",
            fontSize: "0.9rem",
            fontWeight: "500",
            boxShadow: "0 2px 6px rgba(220, 53, 69, 0.3)"
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#c82333";
            e.target.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "#dc3545";
            e.target.style.transform = "scale(1)";
          }}
        >
          🗑️ Delete
        </Button>
      </div>
    </ListGroup.Item>
  );
};

export default TodoItem;
