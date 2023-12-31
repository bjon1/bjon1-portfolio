import '../../css/About.css'
import { useState, useEffect } from 'react';

const About = () => {

    useEffect(() => {
        document.title = "Ben Jon | About"
    }, [])

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
    const handleNameChange = (event) => {
        setName(event.target.value);
        console.log("name change", name)
    };
  
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        console.log("email change", email)
    };
  
    const handleMessageChange = (event) => {
        setMessage(event.target.value);
        console.log("message change", message)
    };
  
    const handleSubmit = (event) => {
        event.preventDefault();
        const formEle = document.querySelector("form");
        const formDatab = new FormData(formEle);
        fetch(
          "https://script.google.com/macros/s/AKfycbzYxwEcf2kITuRpDeIOMserJg0egVfGP4I4d6fk6CNdoQWj1EfvWDMttw6f0i6pVcLbpw/exec",
          {
            method: "POST",
            body: formDatab
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          })
          .catch((error) => {
            console.log(error);
          });
        console.log("form submitted");
        setName("");
        setEmail("");
        setMessage("");
        alert("Message sent successfully, I'll get back to you soon!");
    };

    return(
        <div className="about container">
            <div className="about-content">
                <div className="about-image">
                    <img src="./profile.jfif" alt="Benjamin Jon" />
                </div>
                <div className="about-text">
                <h1>Hi, I'm Ben</h1>
                <p>I am a passionate computer engineer dedicated to creating beautiful and impactful applications. I am a fourth-year student at the University of New Paltz, and an active member of CodePath, a technical training program for aspiring software engineers. Currently, I am actively seeking a full-time internship position in software development to further enhance my skills and contribute to innovative projects.</p>
                <p>Throughout my academic and professional journey, I have gained hands-on experience in both hardware and software design. I have successfully developed web applications using HTML/CSS, JavaScript, Node.js, Express.js, MySQL, MongoDB, and React.js. Additionally, I have expertise in VerilogHDL, microcontroller system design, and robotics. I am always eager to learn new technologies and expand my knowledge to stay at the forefront of the ever-evolving tech industry.</p>
                <p>When I'm not immersed in coding, I enjoy playing video games, watching movies, and spending quality time with friends.</p>
                </div>
            </div>
            <h1>Let's get in touch.</h1>
            <div className="about-form">
                <div className="about-form-content">
                    <div className="about-form-description">
                        Reach out to me on{' '}
                        <a className="links" href="https://www.linkedin.com/in/ben-jon/" target="_blank" rel="noreferrer">
                            LinkedIn.
                        </a>
                        <br />
                        Check out my{' '}
                        <a className="links" href="https://docs.google.com/document/d/1mqJ5HutJ0Pk0Y_gm4Onp9F6bXE3qSM7Mw5zeJ4rMa7k/edit?usp=sharing" target="_blank" rel="noreferrer">
                            Resume.
                        </a>
                        <br/>
                        Or, shoot me a message by filling out the form:
                    </div>
                </div>
                <form className="form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input 
                            type="text" 
                            id="name"  
                            value={name} 
                            name="Name"
                            placeholder="Your Name"
                            onChange={handleNameChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="text" 
                            id="email" 
                            value={email}  
                            name="Email"
                            placeholder="Your Email"
                            onChange={handleEmailChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea 
                            type="text"
                            id="message"
                            name="Message" 
                            value={message} 
                            placeholder="Your Message"
                            onChange={handleMessageChange} required ></textarea>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )

}

export default About;