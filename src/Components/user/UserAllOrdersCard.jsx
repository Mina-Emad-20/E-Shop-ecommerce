import { Col, Row } from "react-bootstrap";
import mobile from '../../images/mobile.png'

export default function UserAllOrdersCard() {
    return (
        <div>
            <Row className="d-flex mb-2">
                <Col xs="3" md="2" className="d-flex justify-content-start">
                    <img width="93px" height="150px" src={mobile} alt="" />
                </Col>
                <Col xs="8" md="6">
                    <div className="d-inline pt-2 cat-title">
                        Red Iphone XR Lte network with internal storage 256gb</div>
                    <div className="d-inline pt-2 cat-rate mx-2">4.5</div>
                    <div className="rate-count d-block p-1 pt-2">(Rate 160)</div>
                    <div className="mt-3">
                        <div className="cat-text  d-inline">Countity</div>
                        <input
                            className="mx-2 "
                            type="number"
                            style={{ width: "40px", height: "25px" }}
                        />
                    </div>
                </Col>
            </Row>
        </div>
    )
}
