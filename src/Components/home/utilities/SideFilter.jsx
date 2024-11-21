import { Row } from "react-bootstrap";




export default function SideFilter() {
    return (
        <div className="mt-3">
            <Row>
                <div className="d-flex flex-column mt-2">
                    <div className="filter-title">Classification</div>
                    <div className="d-flex mt-3">
                        <input type="checkbox" value="0" />
                        <div className="filter-sub me-2 ">All</div>
                    </div>

                    <div className="d-flex mt-3">
                        <input type="checkbox" value='' />
                        <div className="filter-sub me-2 ">Home Devices</div>
                    </div>

                    <div className="d-flex mt-3">
                        <input type="checkbox" value='' />
                        <div className="filter-sub me-2 ">Self Devices</div>
                    </div>

                    <div className="d-flex mt-3">
                        <input type="checkbox" value='' />
                        <div className="filter-sub me-2 ">Colthes</div>
                    </div>

                </div>

                <div className="d-flex flex-column mt-2">
                    <div className="filter-title mt-3">Brand</div>
                    <div className="d-flex mt-3">
                        <input type="checkbox" value="0" />
                        <div className="filter-sub me-2 ">All</div>
                    </div>


                    <div className="d-flex mt-3">
                        <input type="checkbox" value='' />
                        <div className="filter-sub me-2 ">Apple</div>
                    </div>

                    <div className="d-flex mt-3">
                        <input type="checkbox" value='' />
                        <div className="filter-sub me-2 ">Samsung</div>
                    </div>

                </div>

                <div className="filter-title my-3">Price</div>
                <div className="d-flex">
                    <p className="filter-sub my-2">From:</p>
                    <input

                        className="m-2 text-center"
                        type="number"
                        style={{ width: "50px", height: "25px" }}
                    />
                </div>
                <div className="d-flex">
                    <p className="filter-sub my-2">Up to:</p>
                    <input

                        className="m-2 text-center"
                        type="number"
                        style={{ width: "50px", height: "25px" }}
                    />
                </div>
            </Row >
        </div >
    )
}
