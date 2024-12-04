import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllCategory } from "../../redux/actions/categoryAction";






export default function HomeGategoryHook() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllCategory())
    }, [])
    // get last category from dedux
    const category = useSelector(state => state.allCategory.category)
    // get last loading from category
    const loading = useSelector(state => state.allCategory.loading)
    const colors = ["#FFD3E8", "#F4DBA5", "#55CFDF", "#0034FF", "#FFD3E8", "#FF6262"]
    return [category, loading, colors]
}
