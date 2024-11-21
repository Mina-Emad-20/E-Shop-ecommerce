import { Col, Container, Row } from "react-bootstrap";
import UserSidebar from "../../Components/user/UserSidebar";
import UserAddAddress from "../../Components/user/UserAddAddress";






export default function UserAddAddressPage() {
    return (
        <div className="font" style={{ minHeight: '670px' }}>
            <Container>
                <Row className="py-3">
                    <Col sm='3' xs='2' md='2'>
                        <UserSidebar />
                    </Col>
                    <Col sm='9' xs='10' md='10'>
                        <UserAddAddress />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
