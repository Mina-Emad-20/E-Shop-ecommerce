import { Col, Container, Row } from "react-bootstrap";
import AdminSideBar from "../../Components/admin/AdminSideBar";
import AdminAddProduct from "../../Components/admin/AdminAddProduct";





export default function AdminAddProductPage() {
    return (
        <div className="font" style={{ minHeight: '670px' }}>
            <Container>
                <Row className="py-3">
                    <Col sm='3' xs='2' md='2'>
                        <AdminSideBar />
                    </Col>
                    <Col sm='9' xs='10' md='10'>
                        <AdminAddProduct />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
