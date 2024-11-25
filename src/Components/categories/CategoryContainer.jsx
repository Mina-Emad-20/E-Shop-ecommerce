import { Container, Placeholder, Row } from "react-bootstrap";
import CategoriesCard from '../categories/CategoriesCard'
import clothe from '../../images/clothe.png'
import mobile from '../../images/mobile.png'
import laptop from '../../images/labtop.png'
import sale from '../../images/sale.png'
import accessories from '../../images/accessories-Photoroom.png'
import homeDevices from '../../images/homeDevices-Photoroom.png'
import makeup from '../../images/makeup-Photoroom.png'
import watchies from '../../images/watchies-Photoroom.png'
import fashion from '../../images/fashion-Photoroom.png'
import menCloth from '../../images/menClothes-Photoroom.png'
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllCategory } from "../../redux/actions/categoryAction";


export default function CategoryContainer() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllCategory())
    }, [])
    const category = useSelector(state => state.allCategory.category)
    const loading = useSelector(state => state.allCategory.loading)
    //back ground colors
    const colors = ["#FFD3E8", "#F4DBA5", "#55CFDF", "#0034FF", "#FFD3E8", "#FF6262"]
    //catgories images because the backend file has no images
    const images = [mobile, accessories, clothe, sale, laptop, homeDevices, makeup, watchies, fashion, menCloth]
    return (
        <Container>
            <h2 className="text-center fw-bold py-3">All Categories</h2>
            <Row className="my-2 d-flex justify-content-between">
                {
                    loading === false ? (
                        category.data ? (
                            category.data.map((item, index) => {
                                return (
                                    <CategoriesCard key={index} title={item.name} img={images[index]} background={colors[Math.floor(Math.random() * 5 + 1)]} />
                                )
                            })
                        )
                            : <h4>There are no Categories</h4>
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
