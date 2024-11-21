import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import mobile from '../../images/mobile.png'

export default function AdminAllOrdersItem() {
    return (
        <Col sm="12">
            <Link
                to="/admin/orders/23"
                className="cart-item-body my-2 px-1 d-flex"
                style={{ textDecoration: "none" }}>
                <img width="130px" height="197px" src={mobile} alt="" />
                <div className="w-100">
                    <Row className="justify-content-between px-2">
                        <Col sm="12" className=" d-flex flex-row justify-content-between">
                            <div className="d-inline pt-2 cat-text">Order num #2312</div>
                            <div className="d-inline pt-2 cat-text">Remove</div>
                        </Col>
                    </Row>
                    <Row className="justify-content-center mt-2 px-2">
                        <Col sm="12" className=" flex-row justify-content-start">
                            <div className="d-inline pt-2 cat-title">Red Iphone XR 4g LTE with 265gb hard Memory
                            </div>
                            <div className="d-inline pt-2 cat-rate mx-2">4.5</div>
                        </Col>
                    </Row>
                    <Row className="px-2">
                        <Col sm="12" className="">
                            <div className="mt-2  cat-text d-inline">Brand :</div>
                            <div className="pt-2 barnd-text d-inline mx-1"> Apple</div>
                            <div
                                className="color  me-1 border"
                                style={{ backgroundColor: "#E52C2C" }}></div>
                        </Col>
                    </Row>

                    <Row className="justify-content-between px-2">
                        <Col sm="12" className=" d-flex flex-row justify-content-between">
                            <div className="d-inline pt-2 d-flex">
                                <div className="cat-text pt-1 d-inline">Countity</div>
                                <input
                                    className="mx-2 mt-1"
                                    type="number"
                                    style={{ width: "40px", height: "25px" }}
                                />
                            </div>
                            <div className="d-inline pt-2 barnd-text">3000 L.E</div>
                        </Col>
                    </Row>
                </div>
            </Link>
        </Col>
    )
}
