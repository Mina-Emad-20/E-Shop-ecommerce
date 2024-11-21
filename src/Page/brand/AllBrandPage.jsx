import BrandContainer from "../../Components/brands/BrandContainer"
import Pagination from "../../Components/home/utilities/Pagination"



export default function Allbrand() {
    return (
        <div style={{ minHeight: '670px' }} className="font">
            <BrandContainer />
            <Pagination />
        </div>
    )
}
