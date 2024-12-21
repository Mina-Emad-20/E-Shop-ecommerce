import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllCategory } from "../../redux/actions/categoryAction"
import notify from '../../hook/useNotification'
import { createSubCategory } from "../../redux/actions/subCategoryAction"




export default function AddSubCategoryHook() {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllCategory())
    }, [])

    const [id, setID] = useState("0")
    const [name, setName] = useState("")
    const [loading, setLoading] = useState(true)
    // get last category from dedux
    const category = useSelector(state => state.allCategory.category)

    // get last sub-category from dedux
    const subCategory = useSelector(state => state.subCategory.subCategoryategory)


    // onChange dropdown menu
    const handelChange = (e) => {
        console.log(e.target.value)
        setID(e.target.value)
    }

    // to save name
    const onChangeName = (e) => {
        e.presist()
        setName(e.target.value)
    }
    // saving data
    const handelSubmit = async (e) => {
        e.preventDefault()
        if (!navigator.onLine) {
            notify("Internet is not good", "warn")
            return;
        }
        if (id === "0") {
            notify("Please choose main-Category", "warn")
            return;
        }

        if (name === "") {
            notify("Please enter sub-Category", "warn")
            return;
        }

        setLoading(true)
        await dispatch(createSubCategory({
            name,
            category: id
        }))
        setLoading(false)
    }

    useEffect(() => {
        if (loading === false) {
            setName('')
            setID('0')
            if (subCategory === 201) {
                notify("successfully added", "success")
            } else if (subCategory === 'Error Error: Request faild with status code 400') {
                notify("sub-category name is doublicated please try new one", "warn")
            }
            else {
                notify("there is a problem", "warn")
            }
            setLoading(true)
        }
    }, [loading])
    return [id, name, loading, category, subCategory, handelChange, handelSubmit, onChangeName]
}
