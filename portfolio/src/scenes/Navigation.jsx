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
                <a
                    className="nav-link"
                    href="https://docs.google.com/document/d/1mqJ5HutJ0Pk0Y_gm4Onp9F6bXE3qSM7Mw5zeJ4rMa7k/edit?usp=sharing"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <h3>Resume</h3>
                </a>
            </div>
        </div>
    )

}

export default Navigation;