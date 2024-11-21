import { Container } from "react-bootstrap";
import ChoosePayment from "../../Components/chechout/ChoosePayment";





export default function ChoosePayMethod() {
    return (
        <div className="font" style={{ minHeight: '670px' }}>

            <Container>
                <ChoosePayment />
            </Container>
        </div>
    )
}
