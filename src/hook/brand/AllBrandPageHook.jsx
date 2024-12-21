import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllBrand, getAllBrandPage } from "../../redux/actions/brandAction";





export default function AllBrandPageHook() {
    const dispatch = useDispatch()
    //first load
    useEffect(() => {
        dispatch(getAllBrand(10))
    }, [])
    // to get state redux
    const brand = useSelector(state => state.allBrand.brand)
    const loading = useSelector(state => state.allBrand.loading)
    // to get page count
    let pageCount = 0;
    if (brand.paginationResult)
        pageCount = brand.paginationResult.numberOfPages
    // pagination pages using
    const getPage = (page) => {
        dispatch(getAllBrandPage(page))
    }
    return [brand, loading, pageCount, getPage]
}
