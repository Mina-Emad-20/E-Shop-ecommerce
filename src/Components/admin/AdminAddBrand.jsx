import { Col, Row, Spinner } from "react-bootstrap";
import AddBrandHook from "../../hook/brand/AddBrandHook";
import { ToastContainer } from "react-toastify";


export default function AdminAddBrand() {
    const [img, name, isPressed, loading, onImageChange, handelSubmit, onChangeName] = AddBrandHook()
    return (
        <div>
            <Row className="justify-content-start">
                <div className="admin-content-text pb-4">Add new Brand</div>
                <Col sm='8'>
                    <div className="text-form pb-2">Brand Image</div>
                    <div>
                        <label htmlFor="upload-photo">
                            <img src={img} alt="fzx"
                                height='100px'
                                width='120px'
                                style={{ cursor: 'pointer' }}
                            />
                        </label>
                        <input
                            type="file"
                            name='photo'
                            onChange={onImageChange}
                            id="upload-photo"
                        />
                    </div>
                    <input
                        type="text"
                        value={name}
                        className="input-form d-block mt-3 px-3"
                        placeholder="Brand Name..."
                        onChange={onChangeName}
                    />
                </Col>
            </Row>
            <Row>
                <Col sm='8' className="d-flex justify-content-end">
                    <button onClick={handelSubmit} className="btn-save d-inline mt-2">Save Edits</button>
                </Col>
            </Row>
            {
                isPressed ? loading ? <Spinner animation="grow" variant="dark" /> : <h4>Finished</h4> : null
            }
            <ToastContainer />
        </div>
    )
}
