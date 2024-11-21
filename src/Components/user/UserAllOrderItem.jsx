import { Col, Row } from "react-bootstrap";
import UserAllOrdersCard from "./UserAllOrdersCard";


export default function UserAllOrderItem() {
    return (
        <div className="user-order mt-2">
            <Row>
                <div className="py-2 order-title">Order num: #1234556</div>
            </Row>
            <UserAllOrdersCard />
            <Row className="d-flex justify-content-between">
                <Col xs="6" className="">
                    <div>
                        <div className="d-inline">Status</div>
                        <div className="d-inline mx-2 stat">Inprogress</div>
                    </div>
                </Col>
                <Col xs="6" className="d-flex justify-content-end">
                    <div>
                        <div className="barnd-text">40000 L.E</div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
