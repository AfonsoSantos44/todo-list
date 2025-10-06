
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
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
        minHeight: '100vh',
        padding: '20px 0'
      }}>
        <Container>
          <Row>
            <Col md={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }}>
              <div style={{
                background: 'rgba(255, 255, 255, 0.95)',
                borderRadius: '20px',
                padding: '30px',
                boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1)',
                backdropFilter: 'blur(10px)'
              }}>
                <Row>
                  <Col>
                    <h1 style={{
                      textAlign: 'center',
                      fontSize: '2.5rem',
                      fontWeight: '700',
                      color: '#2c3e50',
                      marginBottom: '30px',
                      textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
                    }}>
                      📝 My Todo List
                    </h1>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <div style={{ marginBottom: '25px' }}>
                      <TodoInput
                        userInput={this.state.userInput}
                        updateInput={this.handleInputChange}
                        addItem={this.addItem}
                      />
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    {this.state.todoList.length === 0 ? (
                      <div style={{
                        textAlign: 'center',
                        color: '#7f8c8d',
                        fontSize: '1.1rem',
                        padding: '40px 20px',
                        fontStyle: 'italic'
                      }}>
                        🎯 No tasks yet. Add one above to get started!
                      </div>
                    ) : (
                      <TodoList
                        list={this.state.todoList}
                        deleteItem={this.deleteItem}
                        editItem={this.editItem}
                      />
                    )}
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
  }

export default App;
