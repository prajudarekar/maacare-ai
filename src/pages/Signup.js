import { Container, Card, Form, Button, InputGroup } from "react-bootstrap";
import "../styles/Signup.css";
const SignUp = () => {
  return (
    <div className="signup-wrapper">
      <Container className="d-flex justify-content-center align-items-center min-vh-100">
        <Card className="signup-card p-4">
          
          {/* Avatar */}
          <div className="text-center mb-3">
            <img
              src="/avatar.png"   // your image
              alt="avatar"
              className="signup-avatar"
            />
          </div>

          <h3 className="text-center fw-bold text-purple">
            Sign Up for MaaCare AI
          </h3>
          <p className="text-center text-muted mb-4">
            Create your account to get started.
          </p>

          <Form>
            {/* Full Name */}
            <InputGroup className="mb-3">
              <InputGroup.Text className="input-icon">
                <i className="bi bi-person-fill"></i>
              </InputGroup.Text>
              <Form.Control placeholder="Enter your full name" />
            </InputGroup>

            {/* Email */}
            <InputGroup className="mb-3">
              <InputGroup.Text className="input-icon">
                <i className="bi bi-envelope-fill"></i>
              </InputGroup.Text>
              <Form.Control placeholder="Enter your email or phone" />
            </InputGroup>

            {/* Password */}
            <InputGroup className="mb-3">
              <InputGroup.Text className="input-icon">
                <i className="bi bi-lock-fill"></i>
              </InputGroup.Text>
              <Form.Control type="password" placeholder="Create a password" />
              <Button variant="link" className="show-btn">Show</Button>
            </InputGroup>

            {/* Confirm Password */}
            <InputGroup className="mb-4">
              <InputGroup.Text className="input-icon">
                <i className="bi bi-lock-fill"></i>
              </InputGroup.Text>
              <Form.Control type="password" placeholder="Confirm password" />
              <Button variant="link" className="show-btn">Show</Button>
            </InputGroup>

            <Button className="w-100 signup-btn mb-3">
              Sign Up
            </Button>

            <p className="text-center mb-2">
              Already have an account? <span className="link-text">Log In</span>
            </p>

            <p className="text-center continue-text">
              or Continue as Guest →
            </p>
          </Form>
        </Card>
      </Container>
    </div>
  );
};

export default SignUp;
