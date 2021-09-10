import { Button, Container, Row } from "react-bootstrap";
import "./LandingPage.css";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <div>
              <h1 className="title">Welcome to TODO Application</h1>
              <p className="subtitle">One place for all your Schedules.</p>
            </div>
            <div className="buttonContainer">
              <Link to="/todo">
                <Button size="lg" className="landingbutton">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default LandingPage;
