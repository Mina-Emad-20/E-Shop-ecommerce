import { Col, Row } from "react-bootstrap";
import deleteicon from '../../images/delete.png'



export default function UserProfile() {
    return (
        <div>
            <div className="admin-content-text">Profile Page</div>

            <div className="user-address-card my-3 px-2">
                <Row className="d-flex justify-content-between pt-2">
                    <Col xs="6" className="d-flex">
                        <div className="p-2">Name: </div>
                        <div className="p-1 item-delete-edit">Mina Emad</div>
                    </Col>
                    <Col xs="6" className="d-flex justify-content-end">
                        <div className="d-flex mx-2">
                            <img
                                alt=""
                                className="ms-1 mt-2"
                                src={deleteicon}
                                height="17px"
                                width="15px"
                            />
                            <p className="item-delete-edit">Edit</p>
                        </div>
                    </Col>
                </Row>

                <Row className="">
                    <Col xs="12" className="d-flex">
                        <div className="p-2">Phone num: </div>
                        <div className="p-1 item-delete-edit">002012345678</div>
                    </Col>
                </Row>
                <Row className="">
                    <Col xs="12" className="d-flex">
                        <div className="p-2">Email: </div>
                        <div className="p-1 item-delete-edit">minae6727@gmail.com</div>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col xs="10" sm="8" md="6" className="">
                        <div className="admin-content-text">Change Password</div>
                        <input


                            type="Password"
                            className="input-form d-block mt-1 px-3"
                            placeholder="Enter old Password"
                        />
                        <input


                            type="Password"
                            className="input-form d-block mt-3 px-3"
                            placeholder="Enter new Password"
                        />
                        <input


                            type="Password"
                            className="input-form d-block mt-3 px-3"
                            placeholder="Confirm new Password"
                        />
                    </Col>
                </Row>

                <Row>
                    <Col xs="10" sm="8" md="6" className="d-flex justify-content-end ">
                        <button className="btn-save d-inline mt-2 ">Save Password</button>
                    </Col>
                </Row>
            </div>

        </div>
    )
}
