import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNewspaper } from "@fortawesome/free-regular-svg-icons";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./navbar.css";

function Navv() {
  const [isBouncing, setIsBouncing] = useState(false);

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" style={{ zIndex: 9999 }}>
        <Container>
          <Navbar.Brand
            href="/"
            style={{ fontSize: "2rem", marginRight: "2rem" }}
            onMouseEnter={() => setIsBouncing(true)}
            onMouseLeave={() => setIsBouncing(false)}
          >
            <FontAwesomeIcon
              icon={faNewspaper}
              className={isBouncing ? "bounce" : ""}
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              href="/"
              style={{ fontSize: "1.75rem", marginRight: "1.25rem" }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="/Tech"
              style={{ fontSize: "1.75rem", marginRight: "1.25rem" }}
            >
              Technologie
            </Nav.Link>
            <Nav.Link
              href="/News"
              style={{ fontSize: "1.75rem", marginRight: "1.25rem" }}
            >
              News
            </Nav.Link>
            <Nav.Link
              href="/About"
              style={{ fontSize: "1.75rem", marginRight: "1.25rem" }}
            >
              About
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navv;
