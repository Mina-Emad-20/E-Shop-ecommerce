import { Col, Container, Row } from "react-bootstrap";
import CartItem from "../../Components/cart/CartItem";
import CartCheckout from "../../Components/cart/CartCheckout";





export default function CartPage() {
    return (
        <div className="font" style={{ minHeight: '670px' }}>
            <Container>
                <Row>
                    <div className="cart-title mt-4">Market Cart</div>
                </Row>
                <Row className="d-flex justify-content-center">
                    <Col xs='12' md='9'>
                        <CartItem />
                        <CartItem />
                        <CartItem />
                        <CartItem />
                    </Col>
                    <Col xs='6' md='3'>
                        <CartCheckout />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
