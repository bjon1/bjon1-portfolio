import '../../css/Hero.css'
import { Link } from 'react-router-dom'

const Hero = () => {
    
        return(
            <div className="hero container">
                <div className="hero-title">
                    <div className="hero-title1">
                        Hi, nice to meet you! 👋 
                    </div>
                    <div className="hero-title2">
                        I'm a Computer Engineer, {' '}
                    </div>
                    <div className="hero-title3">
                        interested in all things hardware and software.
                    </div>
                </div>
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