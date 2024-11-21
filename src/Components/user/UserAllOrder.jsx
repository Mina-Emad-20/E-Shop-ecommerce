import { Row } from 'react-bootstrap'
import UserAllOrderItem from './UserAllOrderItem'

export default function UserAllOrder() {
    return (
        <div>
            <div className="admin-content-text pb-4">Hello Mina Emad</div>
            <Row className='justify-content-between'>
                <UserAllOrderItem />
                <UserAllOrderItem />
            </Row>
        </div>
    )
}
