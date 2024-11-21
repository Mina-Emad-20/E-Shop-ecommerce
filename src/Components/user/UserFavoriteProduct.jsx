import { Row } from "react-bootstrap";
import ProductCard from "../products/ProductCard";
import Pagination from "../home/utilities/Pagination";




export default function UserFavoriteProduct() {
    return (
        <div>
            <div>
                <div className="admin-content-text pb-4">Favorite Products</div>
                <Row className="justify-content-start">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </Row>
                <Pagination />
            </div>
        </div>
    )
}
