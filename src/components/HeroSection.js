
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className='container-fluid' id="hero-area">
      <div className='row'>
        <div className='col-lg-1'></div>
        <div className='col-lg-5'>
          <p className="content-text">
            "We are on a mission to make people's lives <br /> <span className="text-primary">pain free</span>" <br />
          </p>
        </div>
      </div>

      <div className="row">
        <div className='col-lg-1'></div>
        <div className="col-lg-3 mt-3">
          <Link className="active text-white navlinks" to="/booknow">
            <button className="btn btn-danger" id="booknow-btn">Book Your Appointment Now !</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
