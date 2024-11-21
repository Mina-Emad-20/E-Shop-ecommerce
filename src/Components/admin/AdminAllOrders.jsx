import { Row } from "react-bootstrap"
import AdminAllOrdersItem from "./AdminAllOrdersItem"




export default function AdminAllOrders() {
    return (
        <div>
            <div className="admin-content-text">All Orders Managment</div>
            <Row className="justify-content-between">
                <AdminAllOrdersItem />
                <AdminAllOrdersItem />
                <AdminAllOrdersItem />
                <AdminAllOrdersItem />
                <AdminAllOrdersItem />
                <AdminAllOrdersItem />
                <AdminAllOrdersItem />
            </Row>
        </div>
    )
}
