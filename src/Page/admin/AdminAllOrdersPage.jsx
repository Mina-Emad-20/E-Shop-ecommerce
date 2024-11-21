
import { Col, Container, Row } from "react-bootstrap";
import AdminSideBar from "../../Components/admin/AdminSideBar";
import Pagination from "../../Components/home/utilities/Pagination";
import AdminAllOrders from "../../Components/admin/AdminAllOrders";





export default function AdminAllOrdersPage() {
    return (
        <div className="font" style={{ minHeight: '670px' }}>
            <Container>
                <Row className="py-3">
                    <Col sm='3' xs='2' md='2'>
                        <AdminSideBar />
                    </Col>
                    <Col sm='9' xs='10' md='10'>
                        <AdminAllOrders />
                        <Pagination />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
