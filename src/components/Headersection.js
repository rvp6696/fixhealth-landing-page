
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light nav-header">
            <div className="container-fluid">
                <a className="navbar-brand ps-4" href="/">
                    <img src="https://ik.imagekit.io/tcfp7i31d/logo_with_yp_black_urUeyjKwY.svg" className="hero-img" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse pe-5" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                        <li className="nav-item ms-4 me-2">
                            <Link className="active text-white navlinks" to="/"><i className="bi bi-house-fill"></i> Home</Link>
                        </li>

                        <li className="nav-item ms-4 me-2">
                            <Link className="active text-white navlinks" to="/booknow"><i className="bi bi-pencil-square"></i> Book Now</Link>
                        </li>

                        <li className="nav-item ms-4 me-2">
                            <Link className="active text-white navlinks" to="/testimonials"><i className="bi bi-person-check"></i> Testimonials</Link>
                        </li>
                        
                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default Header;
