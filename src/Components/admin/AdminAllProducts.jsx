import { Row } from "react-bootstrap"
import AdminAllProdctsCard from "./AdminAllProdctsCard"

export default function AdminAllProducts() {
    return (
        <div>
            <div className="admin-content-text">All Products Managment</div>
            <Row className="justify-content-center">
                <AdminAllProdctsCard />
                <AdminAllProdctsCard />
                <AdminAllProdctsCard />
                <AdminAllProdctsCard />
                <AdminAllProdctsCard />
                <AdminAllProdctsCard />
            </Row>
        </div>
    )
}
