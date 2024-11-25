
import Pagination from "../../Components/home/utilities/Pagination";
import CategoryContainer from "../../Components/categories/CategoryContainer";


export default function AllCategoriesPage() {

    return (
        <div style={{ minHeight: '670px' }} className="font">
            <CategoryContainer />
            <Pagination />
        </div>
    )
}
