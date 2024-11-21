import { Container } from "react-bootstrap";
import CategoryHeader from "../../Components/products/CategoryHeader";
import ProductDetails from "../../Components/products/ProductDetails";
import RateContainer from "../../Components/rate/RateContainer";
import CardProductContainer from "../../Components/products/CardProductContainer";




export default function ProductDetailsPage() {
    return (
        <div className="font pb-5">
            <CategoryHeader />
            <Container>
                <ProductDetails />
                <RateContainer />
                <CardProductContainer title='You may Like' />
            </Container>
        </div>
    )
}
