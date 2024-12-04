import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllCategory, getAllCategoryPage } from "../../redux/actions/categoryAction";





export default function AllCategoryPageHook() {
    const dispatch = useDispatch()
    //first load
    useEffect(() => {
        dispatch(getAllCategory(10))
    }, [])
    // to get state redux
    const category = useSelector(state => state.allCategory.category)
    const loading = useSelector(state => state.allCategory.loading)
    // to get page count
    let pageCount = 0;
    if (category.paginationResult)
        pageCount = category.paginationResult.numberOfPages
    // pagination pages using
    const getPage = (page) => {
        dispatch(getAllCategoryPage(page))
    }
    return [category, loading, pageCount, getPage]
}
