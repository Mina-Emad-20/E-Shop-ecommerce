import avatar from '../../images/avatar.png'
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createCategory } from "../../redux/actions/categoryAction";
import notify from "../../hook/useNotification";
import 'react-toastify/dist/ReactToastify.css';




export default function AddCategoryHook() {
    const dispatch = useDispatch()
    const [img, setImg] = useState(avatar)
    const [name, setName] = useState('')
    const [selectedFile, setSelectedFile] = useState(null)
    const [loading, setLoading] = useState(true)
    const [isPressed, setIsPressed] = useState(false)
    // to change name state
    const onChangeName = (e) => {
        e.persist()
        setName(e.target.value)
    }

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
    return [img, name, isPressed, loading, onImageChange, handelSubmit, onChangeName]
}
