import { Col, Row, ToastContainer } from "react-bootstrap"





export default function ProductText() {
    return (
        <div>
            <Row className="mt-2">
                <div className="cat-text">Electronics :</div>
            </Row>
            <Row>
                <Col md="8">
                    <div className="cat-title d-inline">
                        Red Iphone XR support face 4g LTE with 128gb memory
                        <div className="cat-rate d-inline mx-3">4.5</div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md="8" className="mt-4">
                    <div className="cat-text d-inline">Brand :</div>
                    <div className="barnd-text d-inline mx-1">Apple</div>
                </Col>
            </Row>
            <Row>
                <Col md="8" className="mt-1 d-flex">
                    <div className="color ms-2 border"
                        style={{ backgroundColor: '#E52C2C' }}>
                    </div>
                    <div className="color ms-2 border"
                        style={{ backgroundColor: 'white' }}>
                    </div>
                    <div className="color ms-2 border"
                        style={{ backgroundColor: 'black' }}>
                    </div>
                </Col>
            </Row>

            <Row className="mt-4">
                <div className="cat-text">Specs :</div>
            </Row>
            <Row className="mt-2">
                <Col md="10">
                    <div className="product-description d-inline">
                        klsdh;n lkhsdpioghjkdfhiuofdpiur jhsdpihdsiupnavdijnbvdpiufabvd iurhpuidsavbiupdsbviudbiuvndiufvniudfvbuidfbviufdbviufdbvdjf jibsiuvbdfisubvduisvbjids irbviusdhiusdhfiodsvniudsvnusbnvuidfuhreihguiohoifds ijsbghuisbiusniuhsfiusdfoikvndkjfdoiu kub iubiusapoubriugr iubdsiobdspuigbdiuvdihogdiuhsd kiphspiughupirgiuprdg kbsdiu
                    </div>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col md="12">
                    <div className="product-price d-inline px-3 py-3 border">34000</div>
                    <div className="product-cart-add px-3 py-3 d-inline mx-3">Add to Cart</div>
                </Col>
            </Row>
            <ToastContainer />
        </div>
    )
}
