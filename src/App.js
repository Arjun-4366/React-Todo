import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  FormCheck,
  Col,
  Container,
  Row,
} from "react-bootstrap";
import { Trash } from "react-bootstrap-icons";
function App() {
  let [todoList, setTodoList] = useState([]);
  let todoSubmit = (e) => {
    e.preventDefault();
    let todoValue = e.target.todoValue.value;
    if (!todoList.includes(todoValue)) {
      let updatedTodo = [...todoList, todoValue];
      setTodoList(updatedTodo);
    } else {
      alert("Already on Todo List");
    }
  };

  let todoValues = todoList.map((v, i) => {
    return (
      <ShowTodoItems
        value={v}
        key={i}
        index={i}
        todoList={todoList}
        setTodoList={setTodoList}
      />
    );
  });

  return (
    <div className="App">
      <section className="vh-100" style={{ backgroundColor: "#e2d5de" }}>
        <Container className=" py-5 h-100">
          <Row className=" d-flex justify-content-center align-items-center h-100">
            <Col className="xl-10">
              <Card style={{ borderRadius: "15px" }}>
                <CardBody className=" p-5">
                  <h6 className="mb-3">Awesome Todo List</h6>
                  <form
                    onSubmit={todoSubmit}
                    className="d-flex justify-content-center align-items-center mb-4">
                    <div className="form-outline flex-fill">
                      <input
                        type="text"
                        id="form3"
                        className="form-control form-control-lg"
                        name="todoValue"
                      />
                      <label className="form-label" htmlFor="form-3">
                        What do you need to do today?
                      </label>
                    </div>
                    <Button
                      type="submit"
                      className="btn btn-primary btn-lg ms-2 mb-4">
                      Add
                    </Button>
                  </form>

                  <ul className="list-group mb-0">{todoValues}</ul>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default App;

function ShowTodoItems({ value, index, todoList, setTodoList }) {
  let [checked, setChecked] = useState(false);
  let deleteTodos = () => {
    let finalTodo = todoList.filter((v, i) => i !== index);
    setTodoList(finalTodo);
  };
  let handleCheck = () => {
    setChecked(!checked);
  };
  return (
    <li
      className="list-group-item d-flex justify-content-between align-items-center   rounded-3 mb-2 bg-secondary text-white"
      style={{ textDecoration: checked ? "line-through" : "" }}>
      <div className="d-flex align-items-center">
        <FormCheck
          name="flexCheck"
          value=""
          id="flexCheckChecked"
          className="me-3 "
          onChange={handleCheck}
        />
      </div>
      {value}
      <Trash
        color="red"
        cursor="pointer"
        fontSize="20px"
        onClick={deleteTodos}
      />
    </li>
  );
}
