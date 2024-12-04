import Pagination from "../../Components/home/utilities/Pagination";
import CategoryContainer from "../../Components/categories/CategoryContainer";
import AllCategoryPageHook from "../../hook/category/AllCategoryPageHook";



export default function AllCategoriesPage() {
    const [category, loading, pageCount, getPage] = AllCategoryPageHook()

    return (
        <div style={{ minHeight: '670px' }} className="font">
            <CategoryContainer data={category.data} loading={loading} />
            {
                pageCount > 1 ? (
                    <Pagination pageCount={pageCount} onPress={getPage} />
                ) : null
            }
        </div>
    )
}
