import { Container, Row } from "react-bootstrap";
import CategoriesCard from '../categories/CategoriesCard'

import clothe from '../../images/clothe.png'
import cat2 from '../../images/cat2.png'
import laptop from '../../images/labtop.png'
import sale from '../../images/sale.png'
import pic from '../../images/pic.png'



export default function CategoryContainer() {
    return (
        <Container>
            <h2 className="text-center fw-bold py-3">All Categories</h2>
            <Row className="my-2 d-flex justify-content-between">
                <CategoriesCard title='Home Devices' img={clothe} background='#F4DBA4' />
                <CategoriesCard title='Home Devices' img={cat2} background='#F4DBA4' />
                <CategoriesCard title='Home Devices' img={laptop} background='#F4DBA4' />
                <CategoriesCard title='Home Devices' img={sale} background='#F4DBA4' />
                <CategoriesCard title='Home Devices' img={pic} background='#F4DBA4' />
                <CategoriesCard title='Home Devices' img={clothe} background='#F4DBA4' />
                <CategoriesCard title='Home Devices' img={clothe} background='#F4DBA4' />
                <CategoriesCard title='Home Devices' img={cat2} background='#F4DBA4' />
                <CategoriesCard title='Home Devices' img={laptop} background='#F4DBA4' />
                <CategoriesCard title='Home Devices' img={sale} background='#F4DBA4' />
                <CategoriesCard title='Home Devices' img={pic} background='#F4DBA4' />
                <CategoriesCard title='Home Devices' img={clothe} background='#F4DBA4' />
                <CategoriesCard title='Home Devices' img={clothe} background='#F4DBA4' />
                <CategoriesCard title='Home Devices' img={cat2} background='#F4DBA4' />
                <CategoriesCard title='Home Devices' img={laptop} background='#F4DBA4' />
                <CategoriesCard title='Home Devices' img={sale} background='#F4DBA4' />
                <CategoriesCard title='Home Devices' img={pic} background='#F4DBA4' />
                <CategoriesCard title='Home Devices' img={clothe} background='#F4DBA4' />
            </Row>
        </Container>
    )
}
