import { Col, Row } from "react-bootstrap";
import deleteicon from '../../images/delete.png'
import mobile from '../../images/mobile.png'




export default function CartItem() {
    return (
        <Col xs="12" className="cart-item-body my-2 d-flex px-2">
            <img width="110px" height="197px" src={mobile} alt="" />
            <div className="w-100 px-2">
                <Row className="justify-content-between">
                    <Col sm="12" className=" d-flex flex-row justify-content-between">
                        <div className="d-inline pt-2 cat-text"></div>
                        <div className="d-flex pt-2 " style={{ cursor: "pointer" }}>
                            <img src={deleteicon} alt="" width="20px" height="24px" />
                            <div className="cat-text d-inline me-2">Remove</div>
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-center mt-2">
                    <Col sm="12" className=" d-flex flex-row justify-content-start">
                        <div className="d-inline pt-2 cat-title">
                            Iphone XR 4g LTE with 265gb hard Memory

                        </div>
                        <div className="d-inline pt-2 cat-rate me-2"></div>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12" className="mt-1">
                        <div className="cat-text d-inline">Brand :</div>
                        <div className="barnd-text d-inline mx-1">Iphone</div>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12" className="mt-1 d-flex">
                        <div className="color ms-2 border" style={{ backgroundColor: 'red' }}></div>
                    </Col>
                </Row>

                <Row className="justify-content-between">
                    <Col sm="12" className=" d-flex flex-row justify-content-between">
                        <div className="d-inline pt-2 d-flex">
                            <div className="cat-text mt-2  d-inline">Countity</div>
                            <input
                                className="mx-2 text-center"
                                type="number"
                                style={{ width: "60px", height: "40px" }}
                            />
                        </div>
                        <div className="d-inline pt-2 barnd-text">3000 l.E</div>
                    </Col>
                </Row>
            </div>
        </Col>
    )
}
