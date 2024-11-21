import { Col, Container, Row, ToastContainer } from "react-bootstrap";
import { Link } from "react-router-dom";





export default function LoginPage() {
    return (
        <Container style={{ minHeight: "690px" }}>
            <Row className="py-5 d-flex justify-content-center ">
                <Col sm="12" className="d-flex flex-column ">
                    <label className="mx-auto title-login">Login</label>
                    <input

                        placeholder="Your Email"
                        type="email"
                        className="user-input my-3 text-center mx-auto"
                    />
                    <input
                        placeholder="Your Password"
                        type="password"
                        className="user-input text-center mx-auto"
                    />
                    <button className="btn-login mx-auto mt-4">Login</button>
                    <label className="mx-auto my-4">
                        Dont Have an Account?
                        <Link to='/register' style={{ textDecoration: 'none' }}>
                            <span style={{ cursor: "pointer" }} className="text-danger">
                                Click Here
                            </span>
                        </Link>
                    </label>
                    <label className="mx-auto my-4">
                        Forget Password?
                    </label>
                </Col>

                <label className="mx-auto my-4 d-grid">

                    <Link to='/admin/allproducts' style={{ textDecoration: 'none' }}>
                        <span style={{ cursor: "pointer" }} className="text-danger">
                            Admin Login
                        </span>
                    </Link>
                    <Link to='/user/allorders' style={{ textDecoration: 'none' }}>
                        <span style={{ cursor: "pointer" }} className="text-danger">
                            User Login
                        </span>
                    </Link>
                </label>

            </Row>
            <ToastContainer />
        </Container>
    )
}
