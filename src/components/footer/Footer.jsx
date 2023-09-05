import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'

import './footer.scss'

const Footer = () => {
    return (
        <footer className="footer">
            <section className='social-icons'>
                <FaFacebook className='icon'/>
                <FaInstagram className='icon'/>
                <FaLinkedin className='icon'/>
            </section>
            <p><span>Costs</span> &copy; 2023</p>
        </footer>
    )
}

export default Footer