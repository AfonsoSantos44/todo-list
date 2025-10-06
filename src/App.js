
import './App.css';
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      todoList: []
    };
  }

  handleInputChange = (value) => {
    this.setState({ userInput: value });
  }
  addItem = () => {
    if (this.state.userInput.trim() !== "") {
      const newItem = {
        id: Math.random(),
        value: this.state.userInput,
      };
      this.setState(prevState => ({
        todoList: [...prevState.todoList, newItem],
        userInput: ''
      }));
    } else {
      alert("Please enter an item.");
    }
  };

  deleteItem = (id) => {
    const updatedList = this.state.todoList.filter(item => item.id !== id);
    this.setState({ todoList: updatedList });

  };

  editItem = (id) => {
    const editedToDo = prompt("Edit your item:");
    if (editedToDo !== null && editedToDo.trim() !== "") {
      const updatedList = [...this.state.todoList];
      updatedList[id].value = editedToDo;
      this.setState({ todoList: updatedList });
    }
  };


  render() {
    return (
      <div style={{ 
        background: '#000000',
        minHeight: '100vh',
        padding: '40px 20px',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      }}>
        <Container>
          <Row>
            <Col md={{ span: 6, offset: 3 }} lg={{ span: 4, offset: 4 }}>
              <div style={{
                background: 'rgba(28, 28, 30, 0.98)',
                borderRadius: '20px',
                padding: '0',
                border: '1px solid rgba(84, 84, 88, 0.3)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                backdropFilter: 'blur(20px)',
                overflow: 'hidden'
              }}>
                {/* Header */}
                <div style={{
                  padding: '24px 24px 16px 24px',
                  borderBottom: '1px solid rgba(84, 84, 88, 0.2)'
                }}>
                  <h1 style={{
                    textAlign: 'center',
                    fontSize: '1.75rem',
                    fontWeight: '600',
                    color: '#ffffff',
                    margin: '0',
                    letterSpacing: '-0.5px'
                  }}>
                    Reminders
                  </h1>
                  <p style={{
                    textAlign: 'center',
                    fontSize: '0.9rem',
                    color: '#8e8e93',
                    margin: '4px 0 0 0'
                  }}>
                    {this.state.todoList.length} {this.state.todoList.length === 1 ? 'task' : 'tasks'}
                  </p>
                </div>

                {/* Input Section */}
                <div style={{ padding: '20px 24px' }}>
                  <TodoInput
                    userInput={this.state.userInput}
                    updateInput={this.handleInputChange}
                    addItem={this.addItem}
                  />
                </div>

                {/* Todo List */}
                <div style={{ 
                  maxHeight: '60vh',
                  overflowY: 'auto',
                  WebkitOverflowScrolling: 'touch'
                }}>
                  {this.state.todoList.length === 0 ? (
                    <div style={{
                      textAlign: 'center',
                      color: '#8e8e93',
                      fontSize: '1rem',
                      padding: '60px 24px',
                      lineHeight: '1.5'
                    }}>
                      <div style={{ fontSize: '3rem', marginBottom: '16px' }}>📝</div>
                      <div style={{ fontWeight: '500' }}>No Reminders</div>
                      <div style={{ fontSize: '0.85rem', marginTop: '4px' }}>
                        Add a task to get started
                      </div>
                    </div>
                  ) : (
                    <TodoList
                      list={this.state.todoList}
                      deleteItem={this.deleteItem}
                      editItem={this.editItem}
                    />
                  )}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
  }

export default App;
