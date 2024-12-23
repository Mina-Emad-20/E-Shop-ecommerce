import { Card, Col } from "react-bootstrap";





export default function BrandCard({ img }) {
    return (
        <Col
            xs="6"
            sm="6"
            md="4"
            lg="2"
            className="my-2 d-flex justify-content-center">
            <Card
                className="my-1"
                style={{
                    width: "100%",
                    height: "160px",
                    borderRadius: "5px",
                    border: "2px solid light-gray",
                    backgroundColor: "#FFFFFF",
                }}>
                <Card.Img style={{ width: "100%", height: "151px" }} src={img} />
            </Card>
        </Col>
    )
}
