import {Container, Row, Col} from "react-bootstrap";
import {Link} from "react-router-dom";

const FooterComponent = () => {
  return ( 
  <div className="footer py-5">
    <Container>
      <Row className="d-flex justify-content-between">
        <Col lg="5">
        <h3 className="fw-bold">Batum Course.</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt optio ipsum aspernatur dignissimos accusamus, ipsa vel ratione tempora iusto ipsam.</p>
        <div className="no mb-1 mt-4">
          <Link className="text-decoration-none">
          <i className="fa-brands fa-whatsapp"></i>
          <p className="m-0">+62 877-3004-4003</p>
          </Link > 
          <div className="mail">
            <Link className="text-decoration-none">
            <i className="fa-regular fa-envelope"></i>
            <p className="m-0">batum_course@gmail.com</p>
            </Link>
          </div>
        </div>
        </Col>
        <Col className="d-flex flex-column col-lg-2 col mt-lg-0 mt-5">
        <h5 className="fw-bold">Menu</h5>
        <Link to="">Home</Link>
        <Link to="kelas">Class</Link>
        <Link to="testimonial">Testimonial</Link>
        <Link to="faq">FAQ</Link>
        <Link to="syaratketen">Terms & Conditions</Link>
        </Col>
        <Col lg="4" className="mt-lg-0 mt-5 ">
        <h5 className="fw-bold mb-3">Subscribe for interesting information.</h5>
        <div className="subscribe">
          <input type="text" placeholder="subscribe..."/>
        <button className="btn btn-danger roundend-end roundend-0">Subscribe</button>
        </div>
        <div className="social mt-3">
           <i className="fa-brands fa-facebook"></i>
           <i className="fa-brands fa-twitter"></i>
           <i className="fa-brands fa-linkedin"></i>
           <i className="fa-brands fa-instagram"></i>
           <i className="fa-brands fa-tiktok"></i>
           <i className="fa-brands fa-youtube"></i>
           <i className="fa-brands fa-spotify"></i>
        </div>
        </Col>
      </Row>
      <Row>
        <Col>
        <p className="text-center px-md-0 px-3">&copy; Copyright {new Date().getFullYear()} by <span className="fw-bold">Agung Gumilar</span>, All Right Reserved </p>
        </Col>
      </Row>
    </Container>
  </div>
  );
};

export default FooterComponent;    