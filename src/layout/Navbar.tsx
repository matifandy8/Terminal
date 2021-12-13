import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <h1>Terminal</h1>
            <div className='navbar-links'>
                <a href='https://www.linkedin.com/in/matiasfandino/' target='_blank' rel='noopener noreferrer'>
                <img src={linkedin} alt="linkedin"/>
                </a>
                <a href='https://github.com/matifandy8' target='_blank' rel='noopener noreferrer'>
                <img src={github} alt="github"/>
                </a>
            </div>
        </nav>
    )
}

export default Navbar
