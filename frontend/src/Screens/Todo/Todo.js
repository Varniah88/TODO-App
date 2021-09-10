import { useEffect, useState } from "react";
import { Accordion, Badge, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import MainScreen from "../../Components/MainScreen";
import axios from "axios";

const Todo = () => {
  const [todos, setTodos] = useState([]);

  const deleteHandler = (id) => {
    if (window.confirm("Do You Want to Delete this Item?")) {
    }
  };
  const fetchTodo = async () => {
    const { data } = await axios.get("/api/todos");
    setTodos(data);
  };
  useEffect(() => {
    fetchTodo();
  }, []);

  return (
    <MainScreen title="Welcome to TODO Application!">
      <Link to="/createtodo">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          Create New Todo
        </Button>
      </Link>

      {todos.map((todo) => (
        <Accordion key={todo._id}>
          <Card style={{ margin: 10 }}>
            <Card.Header style={{ display: "flex" }}>
              <span
                style={{
                  color: "black",
                  textDecoration: "none",
                  flex: 1,
                  cursor: "pointer",
                  alignSelf: "center",
                  fontSize: 18,
                }}
              >
                <Accordion.Toggle as={Card.Text} variant="link" eventKey="0">
                  {todo.title}
                </Accordion.Toggle>
              </span>
              <div>
                <Button href={`/todo/${todo._id}`}>Edit</Button>
                <Button
                  variant="danger"
                  className="mx-2"
                  onClick={() => deleteHandler(todo._id)}
                >
                  Delete
                </Button>
              </div>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <h3>
                  <Badge variant="success">Category: {todo.category}</Badge>
                </h3>
                <blackquote className="blackquote mb-0">
                  <p>{todo.content}</p>
                </blackquote>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      ))}
    </MainScreen>
  );
};

export default Todo;
