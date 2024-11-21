import { Col, Row } from "react-bootstrap";
import ProductGallery from "./ProductGallery";
import ProductText from "./ProductText";


export default function ProductDetails() {
    return (
        <div>
            <Row className="py-3">
                <Col lg='4'>
                    <ProductGallery />
                </Col>
                <Col lg='8' className="pt-5">
                    <ProductText />
                </Col>
            </Row>
        </div>
    )
}
