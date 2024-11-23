
import { useEffect } from "react";
import Pagination from "../../Components/home/utilities/Pagination";
import CategoryContainer from "../../Components/categories/CategoryContainer";
import axios from "axios";

export default function AllCategoriesPage() {

    const get = async () => {
        const res = await axios.get('http://127.0.0.1:8000/api/v1/categories')
        console.log(res.data)
    }

    useEffect(() => {
        get()
    }, [])

    return (
        <div style={{ minHeight: '670px' }} className="font">
            <CategoryContainer />
            <Pagination />
        </div>
    )
}
