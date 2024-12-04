import { Col, Row, Spinner } from "react-bootstrap";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddCategoryHook from "../../hook/category/AddCategoryHook";

export default function AdminAddCategory() {
    const [img, name, isPressed, loading, onImageChange, handelSubmit, onChangeName] = AddCategoryHook()

    return (
        <div>
            <Row className="justify-content-start">
                <div className="admin-content-text pb-4">Add new Category</div>
                <Col sm='8'>
                    <div className="text-form pb-2">Category Image</div>
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
                        onChange={onChangeName}
                        value={name}
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        placeholder="Category Name..."
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
