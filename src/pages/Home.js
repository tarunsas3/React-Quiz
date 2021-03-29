import { Container, Row, Col, Card } from "reactstrap";
import { useHistory } from "react-router-dom";

import "./Home.css";

const Home = (props) => {
  const history = useHistory();
  const handleClick = (item) => {
    props.handleTopicSelect(item);
    history.push("/topic");
  };
  return (
    <Container>
      <div className="m-5">
        <h1 className="heading">Quizz</h1>
      </div>
      <Container>
        <Row className="CardsOrientation">
          {props.data.map((item) => {
            return (
              <Col sm="12" md="4" key={item.id}>
                <Card
                  className="card"
                  onClick={() => {
                    handleClick(item);
                  }}
                >
                  <h3>{item.title}</h3>
                  <p className="desc">{item.description}</p>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </Container>
  );
};

export default Home;
