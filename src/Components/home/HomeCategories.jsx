import { Container, Row } from "react-bootstrap";
import SubTitle from "./utilities/SubTitle";
import CategoriesCard from "../categories/CategoriesCard";

import clothe from '../../images/clothe.png'
import cat2 from '../../images/cat2.png'
import laptop from '../../images/labtop.png'
import sale from '../../images/sale.png'
import pic from '../../images/pic.png'



export default function HomeCategories() {
    return (
        <Container>
            <SubTitle title='Categories' btntitle='More' pathText='/allcategory' />
            <Row className="my-2 d-flex justify-content-between">
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
