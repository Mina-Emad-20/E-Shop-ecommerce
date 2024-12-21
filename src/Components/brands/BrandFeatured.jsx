import { Container, Placeholder, Row } from "react-bootstrap";
import SubTitle from "../home/utilities/SubTitle";
import BrandCard from "./BrandCard";
import brand1 from '../../images/brand1.png'
import brand2 from '../../images/brand2.png'
import brand3 from '../../images/brand3.png'
import brand4 from '../../images/brand4.png'
import brand5 from '../../images/brand5.png'
import HomeBrandHook from "../../hook/brand/HomeBrandHook";


export default function BrandFeatured({ title, btntitle }) {
    const [brand, loading] = HomeBrandHook()
    // database doesnt have images
    const images = [brand1, brand2, brand3, brand4, brand5]
    return (
        <Container className="pb-4">
            <SubTitle title={title} btntitle={btntitle} pathText='/allbrand' />
            <Row className="my-1 d-flex justify-content-between">
                {
                    loading === false ? (
                        brand.data ? (
                            brand.data.slice(0, 5).map((item, index) => {
                                return (
                                    <BrandCard key={index} img={images[index]} />
                                )
                            })
                        )
                            : <h4>There are no Brands Here</h4>
                    ) :
                        <div>
                            <h4>Loadind...</h4>
                            <Placeholder xs={6} />
                            <Placeholder className="w-75" /> <Placeholder style={{ width: '25%' }} />
                        </div>
                }
            </Row>
        </Container>
    )
}
