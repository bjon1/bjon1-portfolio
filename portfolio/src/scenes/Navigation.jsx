import '../css/Navigation.css'
import { Link } from 'react-router-dom'

const Navigation = () => {

    return(
        <div className="nav container">
            <Link className="nav-name" to="/">
                <h1>Benjamin Jon</h1>
            </Link>
            <div className="nav-links">
                <Link className="nav-link" to="/">
                    <h3>Work</h3>
                </Link>
                <Link className="nav-link" to="/about">
                    <h3>About</h3>
                </Link>
                <Link className="nav-link" to="/resume">
                    <h3>Resume</h3>
                </Link>
            </div>
        </div>
    )

}

export default Navigation;