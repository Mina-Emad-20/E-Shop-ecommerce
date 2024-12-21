import { Container, Placeholder, Row } from 'react-bootstrap'
import brand1 from '../../images/brand1.png'
import brand2 from '../../images/brand2.png'
import brand3 from '../../images/brand3.png'
import brand4 from '../../images/brand4.png'
import brand5 from '../../images/brand5.png'
import brand6 from '../../images/brand6.jpg'
import brand7 from '../../images/brand7.jpg'
import brand8 from '../../images/brand8.png'
import brand9 from '../../images/brand9.jpg'
import brand10 from '../../images/brand10.png'
import brand11 from '../../images/brand11.png'
import BrandCard from './BrandCard'




export default function BrandContainer({ data, loading }) {

    const images = [brand1, brand2, brand3, brand4, brand5, brand6, brand7, brand8, brand9, brand10, brand11]
    return (
        <Container>
            <h2 className="text-center fw-bold py-3">All Brands</h2>
            <Row className="my-1 d-flex justify-content-between">
                {
                    loading === false ? (
                        data ? (
                            data.map((item, index) => {
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
