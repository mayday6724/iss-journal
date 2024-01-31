import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

function Navigation() {
  return (
    <Navbar key="lg" expand="lg" className="bg-body-tertiary mb-3">
      <Container fluid>
        <Navbar.Brand href="#">2024 ISS Journal</Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-lg`}
          aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
              2024 ISS服務聲
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="#action1">首頁</Nav.Link>
              <Nav.Link href="#action2">畢業學長姐在哪裡</Nav.Link>
              <Nav.Link href="#action2">服科人都修什麼學分</Nav.Link>
              <Nav.Link href="#action2">服科精彩活動</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default Navigation;
