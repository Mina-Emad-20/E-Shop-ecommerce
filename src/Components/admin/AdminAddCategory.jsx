import { Col, Row, Spinner } from "react-bootstrap";
import avatar from '../../images/avatar.png'
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createCategory } from "../../redux/actions/categoryAction";
import { useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function AdminAddCategory() {
    const dispatch = useDispatch()
    const [img, setImg] = useState(avatar)
    const [name, setName] = useState('')
    const [selectedFile, setSelectedFile] = useState(null)
    const [loading, setLoading] = useState(true)
    const [isPressed, setIsPressed] = useState(false)


    // when new image upload save it to the state 
    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setImg(URL.createObjectURL(event.target.files[0]))
            setSelectedFile(event.target.value[0])
        }
    }

    const res = useSelector(state => state.allCategory.category)

    // saving data to the database
    const handelSubmit = async (event) => {
        event.preventDefault()
        if (name === "" || selectedFile === null) {
            notify('Please complete data', "warn")
            return;
        }


        const formData = new FormData()
        formData.append("name", name)
        formData.append("image", selectedFile)
        setLoading(true)
        setIsPressed(true)
        await dispatch(createCategory(formData))
        setLoading(false)
    }

    useEffect(() => {
        if (loading === false) {
            setName('')
            setImg(avatar)
            setSelectedFile(null)
            setLoading(true)
            setTimeout(() => setIsPressed(false), 1000)
            if (res.status === 201) {
                notify('download finished', "success")
            } else {
                notify('There is a problem please try again later', "error")
            }
        }
    }, [loading])
    const notify = (msg, type) => {
        if (type === "warn") {
            toast.warn(msg)
        } else if (type === "success") {
            toast.success(msg)
        } else if (type === "error") {
            toast.error(msg)
        }
    }
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
            {
                isPressed ? loading ? <Spinner animation="grow" variant="dark" /> : <h4>Finished</h4> : null
            }
            <ToastContainer />
        </div>
    )
}
