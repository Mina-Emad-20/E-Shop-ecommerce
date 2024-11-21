import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";


export default function CartCheckout() {
    return (
        <Row className="my-1 d-flex justify-content-center cart-checkout pt-3 mt-2">
            <Col xs="12" className="d-flex  flex-column  ">
                <div className="d-flex  ">
                    <input
                        className="copon-input d-inline text-center "
                        placeholder="Discount code..."
                    />
                    <button className="copon-btn d-inline ">Confirm</button>
                </div>
                <div className="product-price d-inline w-100 my-3  border">
                    34000 L.E
                </div>
                <Link
                    to="/order/paymethoud"
                    style={{ textDecoration: "none" }}
                    className="product-cart-add  d-inline ">
                    <button className="product-cart-add w-100 px-2"> Complete purchase</button>
                </Link>
            </Col>

        </Row>
    )
}
