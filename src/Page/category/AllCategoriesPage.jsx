
import Pagination from "../../Components/home/utilities/Pagination";
import CategoryContainer from "../../Components/categories/CategoryContainer";

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllCategory, getAllCategoryPage } from "../../redux/actions/categoryAction";


export default function AllCategoriesPage() {
    const dispatch = useDispatch()
    //first load
    useEffect(() => {
        dispatch(getAllCategory(10))
    }, [])
    // to get state redux
    const category = useSelector(state => state.allCategory.category)
    // to get page count
    let pageCount = 0;
    if (category.paginationResult)
        pageCount = category.paginationResult.numberOfPages
    // pagination pages using
    const getPage = (page) => {
        dispatch(getAllCategoryPage(page))
    }

    return (
        <div style={{ minHeight: '670px' }} className="font">
            <CategoryContainer data={category.data} />
            {
                pageCount > 1 ? (
                    <Pagination pageCount={pageCount} onPress={getPage} />
                ) : null
            }
        </div>
    )
}
