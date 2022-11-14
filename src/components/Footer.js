import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaStackOverflow } from "react-icons/fa";

export default function Footer() {
  return (
    <Navbar>
      <Nav>
        <Nav.Link href="https://github.com/zhaihan001">
          <FaGithub />
          GitHub
        </Nav.Link>

        <Nav.Link href="https://www.linkedin.com/in/han-zhai-0b8a751ba/">
          <FaLinkedin />
          LinkedIn
        </Nav.Link>

        <Nav.Link href="https://stackoverflow.com/users/19265797/hzhai">
          <FaStackOverflow />
          Stack Overflow
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}
