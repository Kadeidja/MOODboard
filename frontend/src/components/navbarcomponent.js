import searchbar from '../assets/searchicon.svg';
import usericon from '../assets/usericon.svg';
import { Link } from "react-router-dom";

export default function NavbarComp(){
    return(
        <nav id="navId">
            <div id="navUserNameDivId" className='navbarelemclass'><Link to="/test">UserName</Link></div>
            <div id="navSearchBarDivId" className='navbarelemclass navbariconpic'><img src={searchbar} /></div>
            <div id="navBtnProfilDivId" className='navbarelemclass navbariconpic'><img src={usericon} alt='Your Profile' /></div>
        </nav>
    );
};