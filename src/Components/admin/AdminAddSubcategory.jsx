import { Col, Row } from "react-bootstrap"


export default function AdminAddSubcategory() {
    return (
        <div>
            <Row className="justify-content-start ">
                <div className="admin-content-text pb-4">Add new Sub Category</div>
                <Col sm="8">
                    <input

                        type="text"
                        className="input-form d-block mt-3 px-3"
                        placeholder="Sub category Name..."
                    />
                    <select name="category" id="cat" className="select mt-3 px-2 ">
                        <option value="val">Classification one</option>
                        <option value="val2">Classification two</option>
                        <option value="val2">Classification three</option>
                        <option value="val2">Classification four</option>

                    </select>
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
