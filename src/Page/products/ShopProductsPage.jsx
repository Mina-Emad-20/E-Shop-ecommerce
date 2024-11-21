import { Col, Container, Row } from "react-bootstrap";
import SearchCountResult from "../../Components/home/utilities/SearchCountResult";
import CategoryHeader from "../../Components/products/CategoryHeader";
import SideFilter from "../../Components/home/utilities/SideFilter";
import CardProductContainer from "../../Components/products/CardProductContainer";
import Pagination from "../../Components/home/utilities/Pagination";




export default function ShopProductsPage() {
    return (
        <div className="font" style={{ minHeight: '670px' }}>
            <CategoryHeader />
            <Container>
                <SearchCountResult title='More than 400 Product' />
                <Row className="d-flex felx-row">
                    <Col sm='2' xs='2' md='1' className="d-flex">
                        <SideFilter />
                    </Col>
                    <Col sm='10' xs='10' md='11'>
                        <CardProductContainer title='' btntitle='' />
                    </Col>
                </Row>
                <Pagination />
            </Container>
        </div>
    )
}
