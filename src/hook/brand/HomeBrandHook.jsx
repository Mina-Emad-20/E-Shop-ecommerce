import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllBrand } from "../../redux/actions/brandAction";






export default function HomeBrandHook() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllBrand())
    }, [])
    // get last brand from redux
    const brand = useSelector(state => state.allBrand.brand)
    // get last loading from brand
    const loading = useSelector(state => state.allBrand.loading)
    return [brand, loading]
}
