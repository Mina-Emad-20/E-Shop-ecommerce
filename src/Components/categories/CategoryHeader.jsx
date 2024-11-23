import { Col, Container, Row } from "react-bootstrap";




export default function CategoryHeader() {
    return (
        <div className="cat-header">
            <Container>
                <Row>
                    <Col className="d-flex justify-content-start py-2 flex-wrap">
                        <div className="cat-text-header ">All</div>
                        <div className="cat-text-header">Electronics</div>
                        <div className="cat-text-header">Clothes</div>
                        <div className="cat-text-header"> Electric</div>
                        <div className="cat-text-header">Discounts</div>
                        <div className="cat-text-header">More</div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
