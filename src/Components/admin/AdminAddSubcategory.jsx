import { Col, Row } from "react-bootstrap"
import { ToastContainer } from "react-toastify"
import AddSubCategoryHook from "../../hook/subcategory/AddSubCategoryHook"


export default function AdminAddSubcategory() {

    const [id, name, loading, category, subCategory, handelChange, handelSubmit, onChangeName] = AddSubCategoryHook()

    return (
        <div>
            <Row className="justify-content-start ">
                <div className="admin-content-text pb-4">Add new Sub Category</div>
                <Col sm="8">
                    <input
                        value={name}
                        onChange={onChangeName}
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        placeholder="Sub category Name..."
                    />
                    <select name="category" id="cat" className="select mt-3 px-2 " onChange={handelChange}>
                        <option value="0">Choose main-category</option>
                        {
                            category.data ? (category.data.map(item => {
                                return (<option key={item._id} value={item.id}>{item.name}</option>)
                            })) : null
                        }


                    </select>
                </Col>
            </Row>
            <Row>
                <Col sm="8" className="d-flex justify-content-end ">
                    <button onClick={handelSubmit} className="btn-save d-inline mt-2 ">Save Edits</button>
                </Col>
            </Row>
            <ToastContainer />
        </div>
    )
}
