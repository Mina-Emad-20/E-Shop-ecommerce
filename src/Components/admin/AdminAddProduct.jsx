import { Col, Row } from "react-bootstrap"
import avatar from '../../images/avatar.png'
import add from '../../images/add.png'
import Multiselect from 'multiselect-react-dropdown';


export default function AdminAddProduct() {
    const onSelect = () => { }
    const onRemove = () => { }
    const options = [
        { name: 'First Category', id: 1 },
        { name: 'Second Category', id: 2 }
    ]



    return (
        <div>
            <Row className="justify-content-start ">
                <div className="admin-content-text pb-4">Add new Product</div>
                <Col sm="8">
                    <div className="text-form pb-2">Product Image</div>
                    <img src={avatar} alt="" />
                    <input

                        type="text"
                        className="input-form d-block mt-3 px-3"
                        placeholder="Product Name"
                    />
                    <textarea
                        className="input-form-area p-2 mt-3"
                        rows="4"
                        cols="50"
                        placeholder="Product Description"

                    />
                    <input
                        type="number"
                        className="input-form d-block mt-3 px-3"
                        placeholder="Price Before Discount"

                    />
                    <input
                        type="number"
                        className="input-form d-block mt-3 px-3"
                        placeholder="Price After Discount"

                    />
                    <input
                        type="number"
                        className="input-form d-block mt-3 px-3"
                        placeholder="Available Countity"

                    />
                    <select
                        name="languages"
                        id="lang"
                        className="select input-form-area mt-3 px-2 ">
                        <option value="0">Main Category</option>
                        <option value="0">Category one</option>
                        <option value="0">Category two</option>
                        <option value="0">Category three</option>
                        <option value="0">Category four</option>
                    </select>

                    <Multiselect
                        className="mt-2 text-start"
                        placeholder="Sub Category"
                        options={options}
                        onSelect={onSelect}
                        onRemove={onRemove}
                        displayValue="name"
                        style={{ color: "red" }}
                    />
                    <select
                        name="brand"
                        className="select input-form-area mt-3 px-2 ">
                        <option value="0">Choose Brand</option>
                        <option value="0">Choose first Brand Category</option>
                        <option value="0">Choose second Brand Category</option>
                        <option value="0">Choose third Brand Category</option>

                    </select>
                    <div className="text-form mt-3 ">Product available Colors</div>
                    <div className="mt-1 d-flex">
                        <div className="color ms-2 border  mt-1"
                            style={{ backgroundColor: '#E52C2C' }}>
                        </div>

                        <div className="color ms-2 border  mt-1"
                            style={{ backgroundColor: 'white' }}>
                        </div>

                        <div className="color ms-2 border  mt-1"
                            style={{ backgroundColor: 'black' }}>
                        </div>

                        <img src={add} alt="" width="30px" height="35px" style={{ cursor: 'pointer' }} className="mx-2" />

                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm="8" className="d-flex justify-content-end ">
                    <button className="btn-save d-inline mt-2 ">Save Edits</button>
                </Col>
            </Row>

        </div>
    )
}
