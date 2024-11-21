
import { Navbar, Container, FormControl, Nav, NavDropdown } from 'react-bootstrap'
import logo from '../../../images/logo.png'
import cart from '../../../images/cart.png'
import login from '../../../images/login.png'





export default function NavbarLogin() {
    return (
        <Navbar className="sticky-top" bg="dark" variant="dark" expand="sm">
            <Container>
                <Navbar.Brand>
                    <a href='/'>
                        <img src={logo} className='logo' />
                    </a>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <FormControl
                        type="search"
                        placeholder="Search..."
                        className="me-2 w-100 text-center"
                        aria-label="Search"
                    />
                    <Nav className="me-auto">

                        <NavDropdown title='' id="basic-nav-dropdown">



                            <NavDropdown.Item href="/admin/allproducts">Control List</NavDropdown.Item>

                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/">Log Out</NavDropdown.Item>

                        </NavDropdown>

                        <Nav.Link href='/login'
                            className="nav-text position-relative d-flex mt-3 justify-content-center"
                            style={{ color: "white" }}>
                            <img src={login} className="login-img" alt="sfvs" />
                            <p style={{ color: "white" }}>Login</p>
                        </Nav.Link>

                        <Nav.Link href='/cart'
                            className="nav-text position-relative d-flex mt-3 justify-content-center"
                            style={{ color: "white" }}>
                            <img src={cart} className="login-img" alt="sfvs" />
                            <p style={{ color: "white" }}>Cart</p>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
