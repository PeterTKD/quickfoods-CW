import './Navbar.css';
import logo from './logo_project.png';
import './Navbar.css';
import { VscThreeBars } from "react-icons/vsc";
import { Link } from "react-router-dom";



function Navbar() {



    return (
        <>

            <div className="navbarcontainer">

                <img src={logo} alt="Logo" to="/" className="navbar-logo" />

                <div className='menu-icon'>
                    <VscThreeBars size="2em" color="#411D0D" />
                </div>

                <ul className='nav-menu'>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' >
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/search' className='nav-links' >
                            Search
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/menu' className='nav-links' >
                            Menu
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/shopping' className='nav-links' >
                            Shopping list
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/ingrediantsSearch' className='nav-links-mobile' >
                        Ingrediants
                        </Link>
                    </li>
                </ul>

                <btn>
                    <Link className='btn' to="/ingrediantsSearch"> Ingrediants </Link>
                </btn>

            </div>



        </>
    )
}

export default Navbar