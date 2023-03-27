import "./Menu.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import logoIcon from "./../../assets/icons/livros.png";
import { Link } from "react-router-dom";

export function Menu() {
  return (
    <div className="menu">
      <Navbar bg="success" variant="light" expand="lg">
        <Container fluid>
          <Navbar.Brand>
            <Link to="/">
              <img src={logoIcon} width="32" alt="Logo" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/cadastro">Cadastro</Nav.Link>
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
              <Nav.Link onClick={() => alert("Saindo do sistema")}>
                <i className="bi bi-box-arrow-right"></i>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};