import { useState, useEffect } from "react";
import swal from "sweetalert";
import { useLocation } from 'react-router-dom';


const BookingForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [city, pickCity] = useState("");
  const [docDetails, updateDetails] = useState([]);

  const [name, updateName] = useState("");
  const [number, updateNumber] = useState("");
  const [age, updateAge] = useState("");
  const [company, updateCompany] = useState("");
  const [complaints, updateComplaints] = useState("");
  const [previousExperience, updatePreviousExperience] = useState("");

  const location = useLocation();

  const fetchDoctors = async () => {
    try {
      let apiUrl;
      const urlParams = new URLSearchParams(location.search);
      const urlCity = urlParams.get("city");

      if (urlCity) {
        // Update the city state without triggering a form submission
        pickCity(urlCity);
        apiUrl = `https://landing-page-xfjw.onrender.com/doctordata?city=${urlCity}`;
      } else {
        apiUrl = `https://landing-page-xfjw.onrender.com/doctordata?city=${city}`;
      }

      const response = await fetch(apiUrl);
      const doctorData = await response.json();
      updateDetails(doctorData);
    } catch (error) {
      console.error("Error fetching doctor data:", error);
      updateDetails([]);
    }
  };



  const confirmBooking = (e) => {
    e.preventDefault();

    if (
      name !== "" &&
      number !== "" &&
      age !== "" &&
      city !== "" &&
      company !== "" &&
      complaints !== ""
    ) {
      swal(name, `Your Booking has been confirmed`, "success");
      setTimeout(() => {
        window.location.reload();
      }, 1200);
    } else {
      swal(
        "Oops!",
        "Please fill all the mandatory details to proceed",
        "error"
      );
    }
  };

  useEffect(() => {
    // Parse the URL parameter and update the city state
    const urlParams = new URLSearchParams(location.search);
    const urlCity = urlParams.get("city");
    if (urlCity) {
      pickCity(urlCity);
      // Call fetchDoctors without triggering a form submission
      fetchDoctors();
    }
  }, [location.search]);

  useEffect(() => {
    if (city !== "") {
      fetchDoctors();
    }
  }, [city, location.search]);



  return (
    <form>
      <div className="container-fluid" id="booking-area">
        <h2 className='heading-text'>Consultation Booking</h2>

        {/* Step 1: Name + Phone number */}
        {currentStep === 1 && (
          <>
            <h4 className='subhead-text mb-5'>
              <i>Embark on a Journey to Wellness: Customize Your Experience with the Finest Doctors in Our Network</i>
            </h4>
            <div className="container">
              <div className="row" id="step-one">
                <div className="col-lg-4"></div>
                <div className="col-lg-4">
                  <div className="card">
                    <div className="card-header">
                      <i className="bi bi-person-fill-add"></i> Patient Information
                    </div>
                    <div className="card-body bg-dark ps-4 pe-5">
                      <div className="row mb-3">
                        <label className="booking-text">Name<span className="text-danger ms-1">*</span></label>
                        <input type="text" value={name} className="form-control mt-2 ms-2" onChange={(event) => updateName(event.target.value)} />
                      </div>
                      <div className="row">
                        <label className="booking-text">Phone Number<span className="text-danger ms-1">*</span></label>
                        <input type="text" value={number} className="form-control mt-2 ms-2" onChange={(event) => updateNumber(event.target.value)} />
                      </div>
                      <div className="row mt-5 ">
                        <div className="col-lg-12 text-center">
                          <button className="btn btn-primary next-btn" onClick={() => setCurrentStep(2)}>
                            Next
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4"></div>
              </div>
            </div>
          </>
        )}

        {/* Step 2: Age + City + Company */}
        {currentStep === 2 && (
          <>
            <div className="container">
              <div className="row" id="step-two">
                <div className="col-lg-4"></div>
                <div className="col-lg-4">
                  <div className="card">
                    <div className="card-header">
                      <i className="bi bi-person-fill-add"></i> Patient Information
                    </div>
                    <div className="card-body bg-dark ps-4 pe-5">
                      <div className="row mb-3">
                        <label className="booking-text">Age<span className="text-danger ms-1">*</span></label>
                        <input type="number" value={age} className="form-control mt-2 ms-2" onChange={(event) => updateAge(event.target.value)} />
                      </div>
                      <div className="row mb-3">
                        <label className="booking-text">City<span className="text-danger ms-1">*</span></label>
                        <select className="form-select mt-2 ms-2" value={city} onChange={(event) => pickCity(event.target.value)}>
                          <option value="">Choose</option>
                          <option value="Bangalore">Bangalore</option>
                          <option value="Chennai">Chennai</option>
                          <option value="Pune">Pune</option>
                        </select>
                      </div>
                      <div className="row">
                        <label className="booking-text">Company<span className="text-danger ms-1">*</span></label>
                        <input type="text" value={company} className="form-control mt-2 ms-2" onChange={(event) => updateCompany(event.target.value)} />
                      </div>
                      <div className="row text-center mt-4 ">
                        <div className="col-lg-12 mb-3">
                          <button className="btn btn-secondary mt-3 me-2 prev-btn" onClick={() => setCurrentStep(1)}>
                            Previous
                          </button>
                          <button className="btn btn-primary mt-3 next-btn" onClick={() => setCurrentStep(3)}>
                            Next
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4"></div>
              </div>
            </div>
          </>
        )}

        {/* Step 3: Chief Complaints */}
        {currentStep === 3 && (
          <>
            <div className="container">
              <div className="row" id="step-three">
                <div className="col-lg-2"></div>
                <div className="col-lg-8">
                  <div className="card">
                    <div className="card-header">
                      <i className="bi bi-person-fill-add"></i> Patient Information
                    </div>
                    <div className="card-body bg-dark ps-4 pe-5">
                      <div className="row mb-3">
                        <label className="booking-text">Chief Complaints<span className="text-danger ms-1">*</span></label>
                        <textarea
                          className="form-control mt-2 ms-2 complaints-area"
                          placeholder="Please mention your complaints here..." value={complaints}
                          onChange={(event) => updateComplaints(event.target.value)}
                        ></textarea>
                      </div>

                      <div className="row text-center mt-4 ">
                        <div className="col-lg-12">
                          <button className="btn btn-secondary mt-3 me-2 prev-btn" onClick={() => setCurrentStep(2)}>
                            Previous
                          </button>
                          {age > 40 && (
                            <button className="btn btn-primary mt-3 next-btn" onClick={() => setCurrentStep(4)}>
                              Next
                            </button>
                          )}
                          {age <= 40 && (
                            <button className="btn btn-primary mt-3 next-btn" onClick={() => setCurrentStep(5)}>
                              Next
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2"></div>
              </div>
            </div>
          </>
        )}

        {/* Step 4: Previous experience with physiotherapy */}
        {currentStep === 4 && age > 40 && (
          <>
            <div className="container">
              <div className="row" id="step-four">
                <div className="col-lg-3"></div>
                <div className="col-lg-6">
                  <div className="card">
                    <div className="card-header">
                      <i className="bi bi-person-fill-add"></i> Patient Information
                    </div>
                    <div className="card-body bg-dark ps-4 pe-5">
                      <div className="col-lg-12 pt-5">
                        <label className="booking-text me-5">Any previous experience with physiotherapy</label>
                        <input
                          type="radio"
                          name="experience"
                          value="Yes"
                          onChange={(event) => updatePreviousExperience(event.target.value)}
                        />{" "}
                        <span className="text-white me-4">Yes</span>
                        <input
                          type="radio"
                          name="experience"
                          value="No"
                          onChange={(event) => updatePreviousExperience(event.target.value)}
                        />{" "}
                        <span className="text-white">No</span>
                      </div>

                      <div className="row text-center pt-5">
                        <div className="col-lg-12">
                          <button className="btn btn-secondary mt-3 me-2 prev-btn" onClick={() => setCurrentStep(3)}>
                            Previous
                          </button>
                          <button className="btn btn-primary mt-3 next-btn" onClick={() => setCurrentStep(5)}>
                            Next
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3"></div>
              </div>
            </div>


          </>
        )}

        {/* Step 5: Show best available doctors for their city */}
        {currentStep === 5 && (
          <>
            <div className="container">
              <div className="row">
                <div className="col-lg-4"></div>
                <div className="col-lg-4 mb-4">
                  <label className="booking-text me-5">Best Doctors Available in your City </label>
                </div>
                <div className="col-lg-4"></div>
              </div>
            </div>

            <div className="container">
              <div className="row" id="step-five">
                <div className="card ps-0 pe-0">
                  <div className="card-header text-center">
                    <i className="bi bi-people-fill"></i> Doctor Details
                  </div>
                  <div className="card-body bg-dark ps-4 pe-5">
                    <div className="row mb-3 pt-3">
                      {docDetails && docDetails.length > 0 ? (
                        <div id="doctor-data">
                          {docDetails.map((docData, index) => (
                            <div className="card mx-2 my-2" key={index} id="doctor-cards">
                              <div className="card-body text-center">
                                <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" className='user-img mt-2 mb-2' />
                                <h4 className="card-title">{docData.name}</h4>
                                <h5 className="card-title">{docData.expertise}</h5>
                                <h6 className="card-title">{docData.city}</h6>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) :
                        (<div class="d-flex justify-content-center">
                          <div class="spinner-border text-light" role="status">
                            <span class="visually-hidden">Loading...</span>
                          </div>
                        </div>)
                      }

                      <div className="row text-center mt-4 ">
                        <div className="col-lg-12">
                          <button className="btn btn-secondary mt-3 me-2 prev-btn" onClick={() => setCurrentStep(3)}>
                            Previous
                          </button>
                          <button className="btn btn-success mt-3 next-btn" onClick={confirmBooking}>
                            Book Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

      </div>
    </form>
  );
};

export default BookingForm;



