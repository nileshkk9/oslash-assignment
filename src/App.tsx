import Share from "./component/Share/Share";
import "antd/dist/antd.css";
import { Row, Col, Affix } from "antd";

function App() {
  return (
    <div>
      <Affix offsetTop={30}>
        <Row>
          <Col span={12} offset={6}>
            <Share />
          </Col>
        </Row>
      </Affix>
    </div>
  );
}

export default App;
