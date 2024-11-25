import { Container, Row, Placeholder } from "react-bootstrap";
import SubTitle from "./utilities/SubTitle";
import CategoriesCard from "../categories/CategoriesCard";
import categoryimg from '../../images/categories-Photoroom.png'
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllCategory } from "../../redux/actions/categoryAction";





export default function HomeCategories() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllCategory())
    }, [])
    const category = useSelector(state => state.allCategory.category)
    const loading = useSelector(state => state.allCategory.loading)
    const colors = ["#FFD3E8", "#F4DBA5", "#55CFDF", "#0034FF", "#FFD3E8", "#FF6262"]
    return (
        <Container>
            <SubTitle title='Categories' btntitle='More' pathText='/allcategory' />
            <Row className="my-2 d-flex justify-content-between">
                {
                    loading === false ? (
                        category.data ? (
                            category.data.slice(0, 6).map((item, index) => {
                                return (
                                    <CategoriesCard key={index} title={item.name} img={categoryimg} background={colors[index]} />
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
