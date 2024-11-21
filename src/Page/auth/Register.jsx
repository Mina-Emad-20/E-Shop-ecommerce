import { Col, Container, Row, ToastContainer } from "react-bootstrap";
import { Link } from "react-router-dom";





export default function Register() {
    return (
        <Container style={{ minHeight: "680px" }}>
            <Row className="py-5 d-flex justify-content-center hieght-search">
                <Col sm="12" className="d-flex flex-column ">
                    <label className="mx-auto title-login">New Account Registration</label>
                    <input

                        placeholder="Username"
                        type="text"
                        className="user-input mt-3 text-center mx-auto"
                    />
                    <input

                        placeholder="Your Email"
                        type="email"
                        className="user-input my-3 text-center mx-auto"
                    />
                    <input

                        placeholder="Phone Number"
                        type="phone"
                        className="user-input  text-center mx-auto"
                    />
                    <input

                        placeholder="Your Password"
                        type="password"
                        className="user-input text-center mt-3 mx-auto"
                    />
                    <input

                        placeholder="Your Pasword Again"
                        type="password"
                        className="user-input text-center mt-3 mx-auto"
                    />
                    <button className="btn-login mx-auto mt-4">Register</button>
                    <label className="mx-auto my-4">
                        Already Have an Account?{" "}
                        <Link to="/login" style={{ textDecoration: "none" }}>
                            <span style={{ cursor: "pointer" }} className="text-danger">
                                Click Here
                            </span>
                        </Link>
                    </label>
                </Col>
            </Row>
            <ToastContainer />
        </Container>
    )
}
