import { Link } from "react-router-dom"
import "./Header.css"


const Header = () => {
    return (
        <div className="header">
            <Link to="/" className="title">
                Strativ Quiz Test
                <hr className="divider" />
            </Link>
        </div>
    )
}
export default Header;