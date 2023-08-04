import { Container, Row, Col } from "reactstrap";
import SectionSubtitle from "./SectionSubtitle";

const Portfolio = () => {

  return (
    <section id="portfolio">
      <Container>
        <Row>
          <Col lg="6" md="6" className="mb-5">
            <SectionSubtitle subtitle=" Our Apps" />
            <h4 className="mt-4">Some of our distinguished works</h4>
          </Col>

          
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;
