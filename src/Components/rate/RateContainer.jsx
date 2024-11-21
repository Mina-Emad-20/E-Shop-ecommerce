import { Col, Container, Row } from "react-bootstrap";
import rate from '../../images/rate.png'
import RateItem from "./RateItem";
import RatePost from "./RatePost";
import Pagination from "../home/utilities/Pagination";




export default function RateContainer() {
    return (
        <Container className="rate-container">
            <Row>
                <Col className="d-flex">
                    <div className="sub-title d-inline p-1">
                        All Comments
                    </div>
                    <img className="mt-2" src={rate} alt="" height='16px' width='16px' />
                    <div className="cat-rate d-inline p-1 pt-2">4.3</div>
                    <div className="rate-count d-inline p-1 pt-2">(160 rating)</div>
                </Col>
            </Row>
            <RatePost />
            <RateItem />
            <RateItem />
            <RateItem />
            <Pagination />
        </Container>
    )
}
