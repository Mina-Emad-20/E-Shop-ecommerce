import { Col, Row } from "react-bootstrap";




export default function ChoosePayment() {
    return (
        <div>
            <div className="admin-content-text pt-5">Choose Payment Method</div>
            <div className="user-address-card my-3 px-3">
                <Row className="d-flex justify-content-between ">
                    <Col xs="12" className="my-4">
                        <input
                            name="group"
                            id="group1"
                            type="radio"
                            value="Pay by Credit Card"
                            className="mt-2"
                        />
                        <label className="mx-2">
                            Pay by Credit Cart
                        </label>
                    </Col>
                </Row>

                <Row className="mt-3">
                    <Col xs="12" className="d-flex">
                        <input
                            name="group"
                            id="group1"
                            type="radio"
                            value="Cash on Delivary"
                            className="mt-2"
                        />
                        <label className="mx-2">
                            Cash on Delivary
                        </label>
                    </Col>
                </Row>
            </div>

            <Row>
                <Col xs="12" className="d-flex justify-content-end payment">
                    <div className="product-price d-inline   border">34000 L.E</div>
                    <div className="product-cart-add px-3 pt-2 d-inline me-2"> Confirm purchase</div>
                </Col>
            </Row>
        </div>
    )
}
