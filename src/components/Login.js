import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

const loginTo = {
  username: "",
  password: "",
};

function Login() {
  const { push } = useHistory();

  const [login, setLogin] = React.useState(loginTo);

  const handleCheck = () => {
    if (login.username === "admin" && login.password === "admin") {
      push({
        pathname: '/products',
        search: '',
        state: true 
    });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };

  return (
    <div className="container col-3 mt-5">
      <Form inline>
        <FormGroup className="mb-2 me-sm-2 mb-sm-0">
          <Label className="me-sm-2" for="exampleEmail">
            username
          </Label>
          <Input
            id="exampleUsername"
            name="username"
            placeholder="admin"
            type="text"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup className="mb-2 me-sm-2 mb-sm-0">
          <Label className="me-sm-2" for="examplePassword">
            Password
          </Label>
          <Input
            id="examplePassword"
            name="password"
            placeholder="don't tell!"
            type="password"
            onChange={handleChange}
          />
        </FormGroup>
        <Button onClick={handleCheck}>Submit</Button>
      </Form>
    </div>
  );
}

export default Login;
