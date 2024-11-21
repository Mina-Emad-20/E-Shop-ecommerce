import { Col, Row } from "react-bootstrap";


export default function UserEditAddress() {
    return (
        <div>
            <Row className="justify-content-start ">
                <div className="admin-content-text pb-2">Edit Address</div>
                <Col sm="8">
                    <input
                        value='Home'
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        placeholder="Address Location(Home, Work)"
                    />
                    <textarea
                        value='Cairo, Nasr city, 90th st'
                        className="input-form-area p-2 mt-3"
                        rows="4"
                        cols="50"
                        placeholder="Detailed Address"
                    />
                    <input
                        value='002012345678'
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        placeholder="Phone Number"
                    />
                </Col>
            </Row>
            <Row>
                <Col sm="8" className="d-flex justify-content-end ">
                    <button className="btn-save d-inline mt-2 ">Save Edits</button>
                </Col>
            </Row>

        </div>
    )
}
