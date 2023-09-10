import { Link } from 'react-router-dom';
import './Header.css'
import { useState } from 'react';

const Header = () => {
    const [role, setRole] = useState();

    return (
        <div className='header fixed-top'>
            <div className="container">
                <div className="row">  
                    <div className='col-8'></div>                

                    <Link className='col-2' to="/login">
                        <button onClick={() => setRole("User")}>Login & Sign up</button>
                    </Link>

                    <Link className='col-2' to="/login">
                        <button onClick={()=> setRole("admin")} id="Upload jobs">Upload jobs</button>
                    </Link>
                </div>
            </div>
        </div>  
    )
}

export default Header;