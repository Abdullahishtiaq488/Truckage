import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../about.css";

import Jango from "../assets/img/jango-truck.jpg";
import Jangol from "../assets/img/jangol-truck.jpg";
import { GiCutDiamond } from "@react-icons/all-files/gi/GiCutDiamond.esm";

const About = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="About" id="aboutus">

      <div className="Aboutbanner">
        <h1>Who are We...</h1>
      </div>
      <Container>
        <div className="container">
          <div className="products-heading">
            <p>ABOUT US</p>

            <h2>About Our Comapany</h2>
          </div>

          <Container className="mt-4">
            <hr />
            <Row className="mt-4 my-4">
              <Col sm={12} md={12} lg={5}> <p>Truckage Dispatch Services is the US's most trusted independent freight dispatching company.
                TDS offers highly paying loads by targeting hot lanes to owner-operators and carriers to enhance
                their revenues. TDS Sales & Dispatch Team are well experienced. With our expertise and years
                of experience, we have built a good reputation in freight dispatching.</p></Col>
              <Col sm={12} md={12} lg={7} ><img className="jango" src={Jango} alt="tasveer" /></Col>
            </Row>
            <Row className="mt-4 my-4">
              <Col sm={12} md={12} lg={7}>
                <img src={Jangol} alt="tasveer" ></img>
              </Col>
              <Col sm={12} md={12} lg={5}>
                <div className="container p-2 mt-4 my-2 align-top myS">
                  <h3>Our Mission</h3>
                </div>
                <hr />
                <p>TDS understands how frustrating and hard to negotiate with the brokers and handle long
                  paperwork, billing, and Logistics, this is why TDS helps Owner Operators and Carriers to just
                  focus on picking up the load and delivering it. Rest of the things that TDS cover is that we will handle
                  your paperwork, billing, back office, and logistics to make your move smooth, which leads you
                  to just focus on the road and make good money, Our mission is to offer full-time dispatch
                  support so that syou can earn more at your ease.</p></Col>
            </Row>
            <Row sm={12} md={12} lg={12} className="mt-4  text-center">
              <GiCutDiamond className="mt-4 " fontSize="8em" color="#ED1C24" /><br />
              <h1>Our Core Values</h1>
              <p>We deliver the competitive advantage you need while eliminating the uncertainty and complexity of your freight delivery. Our service allows you to focus on your business.
                Truckage dispatcher is assigned to every relationship, becoming a single point of contact</p>

            </Row>
          </Container>
<br/><br/><br />

        </div>
      </Container>
    </section>)
}

export default About;