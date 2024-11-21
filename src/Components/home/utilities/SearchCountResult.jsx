import UnopDropdown from "unop-react-dropdown";
import sort from '../../../images/sort.png'
import { Container } from "react-bootstrap";



export default function SearchCountResult({ title }) {
    const handler = () => { }
    return (


        <div className="d-flex justify-content-between pt-3 px-2 font">
            <div className="sub-tile">{title}</div>
            <div className="search-count-text d-flex ">
                <UnopDropdown
                    onAppear={handler}
                    onDisappearStart={handler}
                    trigger={
                        <p className="mx-1">
                            <img
                                width="20px"
                                height="20px"
                                className="ms-1"
                                src={sort}
                                alt=""
                            />
                            Sort By
                        </p>
                    }
                    delay={0}
                    align="CENTER"
                    hover>
                    <div className="card-filter">
                        <div className="border-bottom card-filter-item">Unsorted</div>
                        <div className="border-bottom card-filter-item">Most Selling</div>
                        <div className="border-bottom card-filter-item">Heighest Rating</div>
                        <div className="border-bottom card-filter-item">
                            Price from Lowest
                        </div>
                        <div className=" card-filter-item">Price from Heighest</div>
                    </div>
                </UnopDropdown>
            </div>
        </div>

    )
}
