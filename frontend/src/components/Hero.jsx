import { Container, Card, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Hero = () => {
  return (
    <div className=" py-5">
      <Container className="d-flex justify-content-center">
        <Card className="p-5 d-flex flex-column align-items-center hero-card bg-light w-75">
          <h1 className="text-center mb-4">MERN Authentication</h1>
          <p className="text-center mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
            laboriosam iste? Quidem provident quia unde impedit dolore
            blanditiis eos, ipsa nisi vitae enim dolorem maxime sequi, debitis
            quae dignissimos asperiores. Quisquam voluptates unde iusto error
            alias mollitia iste repellendus ratione doloremque provident,
            officiis, itaque perspiciatis dolor optio nobis maiores elis unde?
          </p>
          <div className="d-flex">
            <LinkContainer to="/login">
              <Button variant="primary" className="me-3">
                Sign In
              </Button>
            </LinkContainer>

            <LinkContainer to="/login">
              <Button variant="secondary">
                Sign up
              </Button>
            </LinkContainer>
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default Hero;
