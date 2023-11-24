import '../../css/Hero.css'
import { Link } from 'react-router-dom'

const Hero = () => {
    
        return(
            <div className="hero container">
                <p className="hero-title">Hi, nice to meet you! 👋 I'm a Computer Engineer interested in all things hardware and software.</p>
                <div className="hero-subtitles">
                    <div className="hero-subtitle1">
                        <p>I'm on the lifelong quest to expand my thinking, experience, and knowledge.</p>
                    </div>
                    <div className="hero-subtitle2">
                        <p>Previously @ L3Harris</p>
                    </div>
                </div>
                <Link to="/about"><button className="hero-button">let's connect</button></Link>
            </div>
        )
}

export default Hero;