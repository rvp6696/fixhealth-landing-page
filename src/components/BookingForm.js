
import { useState, useEffect } from "react";
import swal from "sweetalert";

const BookingForm = () => {

  let [city, pickCity] = useState("")
  let [docDetails, updateDetails] = useState([])


  let [name, updateName] = useState("")
  let [number, updateNumber] = useState("")
  let [age, updateAge] = useState()
  let [company, updateCompany] = useState("")
  let [complaints, updateComplaints] = useState("")


  let cityData = () => {
    let url = `https://landing-page-xfjw.onrender.com/doctordata?city=${city}`


    fetch(url)
      .then(response => response.json())
      .then((doctorData) => {
        updateDetails(doctorData)
      })
  }

  let confirmBooking = (e) => {
    e.preventDefault()

    if (name !== "" && number !== "" && age !== "" && city !== "" && company !== "" && complaints !== "") {
      swal(name, ` Your Booking has been confirmed`, "success")
      setTimeout(() => {
        window.location.reload()
      }, 1200)
    } else {
      swal("Oops !", "Please fill all the mandatory details to proceed", "error")
    }
  }

  useEffect(() => {
    if (city !== "") {
      cityData();
    }
  }, [city]);

  return (
    <div className="container-fluid" id="booking-area">
      <h2 className='heading-text'> Consultation Booking </h2>
      <h4 className='subhead-text'>
        <i>Embark on a Journey to Wellness : Customize Your Experience with the Finest Doctors in Our Network</i>
      </h4>

      <div className="row ps-4 pe-4 mt-5">
        <div className="col-lg-1"></div>
        <div className="col-lg-4">
          <label className="booking-text">Name<span className="text-danger ms-1">*</span></label>
          <input type="text" className="form-control mt-2" onChange={event => updateName(event.target.value)} />
        </div>
        <div className="col-lg-1"></div>
        <div className="col-lg-4">
          <label className="booking-text">Phone Number<span className="text-danger ms-1">*</span></label>
          <input type="text" className="form-control mt-2" onChange={event => updateNumber(event.target.value)} />
        </div>
      </div>

      <div className="row ps-5 pe-4 mt-3">
        <div className="col-lg-3">
          <label className="booking-text">Age<span className="text-danger ms-1">*</span></label>
          <input type="number" className="form-control mt-2" onChange={event => updateAge(event.target.value)} />
        </div>
        <div className="col-lg-1"></div>
        <div className="col-lg-3">
          <label className="booking-text">City<span className="text-danger ms-1">*</span></label>
          <select className="form-select mt-2" onChange={event => pickCity(event.target.value)}>
            <option value="">Choose</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Chennai">Chennai</option>
            <option value="Pune">Pune</option>
          </select>
        </div>
        <div className="col-lg-1"></div>
        <div className="col-lg-3">
          <label className="booking-text">Company<span className="text-danger ms-1">*</span></label>
          <input type="text" className="form-control mt-2" onChange={event => updateCompany(event.target.value)} />
        </div>
      </div>

      <div className="row ps-5 pe-4 mt-4">
        <div className="col-lg-11">
          <label className="booking-text">Chief Complaints<span className="text-danger ms-1">*</span></label> <br />
          <textarea className="form-control mt-2 complaints-area" placeholder="Please mention your complaints here..."
            onChange={event => updateComplaints(event.target.value)}></textarea>
        </div>
      </div>

      <div className="row ps-5 pe-4 mt-4">
        {age > 40 ? (
          <>
            <div className="col-lg-11">
              <label className="booking-text me-5">Any previous experience with physiotherapy</label>
              <input type="radio" name="experience" value="Yes" /> <span className="text-white me-4">Yes</span>
              <input type="radio" name="experience" value="No" /> <span className="text-white">No</span>
            </div>
          </>
        ) : null}
      </div>

      <div className="row ps-5 pe-4 mt-4 pb-5">
        {docDetails && docDetails.length > 0 ? (
          <>
            <label className="booking-text me-5">Best available doctors for your city : </label> <br />
            {docDetails.map((docData, index) => (
              <div className="card col-lg-3 ms-3 me-3 mt-4" key={index} id="doctor-cards">
                <div className="card-header fw-bold text-primary text-center">
                  Doctor Details
                </div>
                <div className="card-body text-center">
                  <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" className='user-img mt-2 mb-2' />
                  <h4 className="card-title">{docData.name}</h4>
                  <h5 className="card-title">{docData.expertise}</h5>
                  <h6 className="card-title">{docData.city}</h6>
                </div>
              </div>
            ))}
          </>
        ) : null}
      </div>

      <div className="row ps-5 pe-4 mt-4 pb-5">
        <div className="col-lg-12 text-center">
          <button className="btn btn-success" id="book-now" onClick={confirmBooking}> Book Now </button>
        </div>
      </div>
    </div>
  )
};

export default BookingForm;
