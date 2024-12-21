import BrandContainer from "../../Components/brands/BrandContainer"
import Pagination from "../../Components/home/utilities/Pagination"
import AllBrandPageHook from "../../hook/brand/AllBrandPageHook"


export default function Allbrand() {
    const [brand, loading, pageCount, getPage] = AllBrandPageHook()
    return (
        <div style={{ minHeight: '670px' }} className="font">
            <BrandContainer data={brand.data} loading={loading} />
            <Pagination pageCount={pageCount} onPress={getPage} />
        </div>
    )
}
