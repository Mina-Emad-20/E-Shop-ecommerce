import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import deleteicon from '../../images/delete.png'

export default function UserAddressCard() {
    return (
        <div className="user-address-card my-3 px-2">


            <Row className="d-flex justify-content-between  ">
                <Col xs="6">
                    <div className="p-2 fw-bold">Home</div>
                </Col>
                <Col xs="6" className="d-flex d-flex justify-content-end">
                    <div className="d-flex p-2">

                        <Link to='/user/edit-address/' style={{ textDecoration: 'none' }}>
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
                        </Link>

                        <div className="d-flex ">
                            <img
                                alt=""
                                className="ms-1 mt-2"
                                src={deleteicon}
                                height="17px"
                                width="15px"
                            />
                            <p className="item-delete-edit">Delete</p>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col xs="12">
                    <div
                        style={{
                            color: "#555550",
                            fontFamily: "Exo 2",
                            fontSize: "14px",
                        }}>
                        Cairo, Nasr city, 90th st, building:19
                    </div>
                </Col>
            </Row>

            <Row className="mt-3">
                <Col xs="12" className="d-flex">
                    <div
                        style={{
                            color: "#555550",
                            fontFamily: "Exo 2",
                            fontSize: "16px",
                        }}>
                        Phone num:
                    </div>

                    <div
                        style={{
                            color: "#979797",
                            fontFamily: "Exo 2",
                            fontSize: "16px",
                        }}
                        className="mx-2">
                        0020123456789
                    </div>
                </Col>
            </Row>
        </div>
    )
}
