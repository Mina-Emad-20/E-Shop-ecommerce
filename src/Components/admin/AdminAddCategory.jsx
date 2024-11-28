import { Col, Row } from "react-bootstrap";
import avatar from '../../images/avatar.png'
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createCategory } from "../../redux/actions/categoryAction";
import { useEffect } from "react";





export default function AdminAddCategory() {
    const dispatch = useDispatch()
    const [img, setImg] = useState(avatar)
    const [name, setName] = useState('')
    const [selectedFile, setSelectedFile] = useState(null)
    // to get loading state from redux
    const loading = useSelector(state => state.allCategory.loading)
    // when new image upload save to the state 
    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setImg(URL.createObjectURL(event.target.files[0]))
            setSelectedFile(event.target.value[0])
        }
    }
    // saving data to the database
    const handelSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData()
        formData.append("name", name)
        formData.append("image", selectedFile)
        if (loading)
            dispatch(createCategory(formData))
    }
    useEffect(() => {
        if (loading === true) {
            setName('')
            setImg(avatar)
        }
    }, [loading])
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
                        onChange={(e) => setName(e.target.value)}
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
        </div>
    )
}
