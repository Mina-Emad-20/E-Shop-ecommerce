import { Col, Row } from "react-bootstrap";
import rate from '../../images/rate.png'




export default function RateItem() {
    return (
        <div>
            <Row className="mt-3">
                <Col className="d-flex ms-2">
                    <div className="rate-name d-inline ms-2 px-2">Mina Emad</div>
                    <img className="" src={rate} alt="" height='16px' width='16px' />
                    <div className="cat-rate d-inline px-1">4.3</div>
                </Col>
            </Row>
            <Row className="border-bottom mx-2">
                <Col className="d-flex me-4 pb-2">
                    <div className="rate-description d-inline ms-2">
                        Perfect product with perfect price for its time
                    </div>
                </Col>
            </Row>
        </div>
    )
}
