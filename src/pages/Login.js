import { useNavigate } from "react-router-dom";
import { Card, Button, Form, Container } from 'react-bootstrap';
import "../styles/Login.css";
import Header from "./Header";

export default function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <div className="login-page">
    <Header/>
    <Container className="login-container">
  <Card className="login-card text-center">   
        <h2 className="mb-3">Log In to MaaCare AI</h2>
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Control type="text" placeholder="Email or Phone" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Control type="password" placeholder="Password" required />
          </Form.Group>
          <Button variant="primary" type="submit" className="w-100 mb-2">
            Log In
          </Button>
        </Form>
         <div className="login-links mt-2">
      <a href="/signup">Sign Up</a> or{" "}
      <a href="/home">Continue as Guest</a>
    </div>
      </Card>
    </Container>
    </div>
  );
}
