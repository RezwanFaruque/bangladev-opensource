import Link from 'next/link';
import  '@fortawesome/react-fontawesome';
import styles from '../styles/Leftsidebar.module.scss';

const LeftSidebar = ()=>{

    return(
        <div>
          <div className={styles.leftsidebar}>
            <ul>
                <li>
                    <span><i className="fas fa-house-user"></i></span>
                    <Link href="/"><a>Home</a></Link>
                </li>
                <li>
                    <span><i className="fas fa-address-card"></i></span>
                    <Link href="/"><a>About Us</a></Link>
                </li>
                <li>
                    <span><i className="fas fa-sliders-h"></i></span>
                    <Link href="/"><a>Privacy Policy</a></Link>
                </li>
                <li>
                    <span><i className="fas fa-cog"></i></span>
                    <Link href="/"><a>Terms & Condition</a></Link>
                </li>
                <li>
                    <span><i className="fas fa-id-card-alt"></i></span>
                    <Link href="/"><a>Contact Me</a></Link>
                </li>
            </ul>
          </div>
        </div>
    )
}

export default LeftSidebar;