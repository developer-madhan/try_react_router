// Layout.js page
import { Outlet, Link } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";

const Layout = () => {
  return (
    <>
      <Container>
        <Row className="align-items-baseline my-3" >
          <Col md={2}>
            <img src="https://picsum.photos/150/50" alt="" />
          </Col>
          <Col md={8}>
            <nav>
              <ul className="list-unstyled d-flex justify-content-around align-content-end">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/blogs">Blogs</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </Col>
        </Row>
      </Container>
      <Outlet />
    </>
  );
};

export default Layout;
