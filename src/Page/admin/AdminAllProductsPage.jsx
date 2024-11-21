import { Col, Container, Row } from "react-bootstrap";
import AdminSideBar from "../../Components/admin/AdminSideBar";
import AdminAllProducts from "../../Components/admin/AdminAllProducts";
import Pagination from "../../Components/home/utilities/Pagination";





export default function AdminAllProductsPage() {
    return (
        <div className="font" style={{ minHeight: '670px' }}>
            <Container>
                <Row className="py-3">
                    <Col sm='3' xs='2' md='2'>
                        <AdminSideBar />
                    </Col>
                    <Col sm='9' xs='10' md='10'>
                        <AdminAllProducts />
                        <Pagination />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
