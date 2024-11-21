import { Link } from "react-router-dom";








export default function SubTitle({ title, btntitle, pathText }) {
    return (
        <div className="d-flex justify-content-between pt-4">
            <div className="sub-title">{title}</div>
            {btntitle ? (
                <Link to={`${pathText}`} style={{ textDecoration: 'none' }}>
                    <div className="shopping-now">{btntitle}</div>
                </Link>
            ) : null}
        </div>
    )
}
