

const Testimonials = () => {
  return (
    <div className='container-fluid' id="testimonial-area">
      <div className='row mb-3'>
        <h2 className='heading-text'> Patient Testimonials </h2>

        <h4 className='subhead-text'>
        Discover unmatched healing at India's premier Physiotherapy Clinic, where our valued patients entrust their well-being.
        </h4>
      </div>

      <div className='row ps-4 pe-4 mt-4'>

        <div className='col-lg-3'>
          <div className="card">
            <div className="card-header fw-bold text-primary text-center">
              100% Recovered in 21 Days
            </div>
            <div className="card-body text-center bg-dark">
              <img src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=1394" className='user-img mt-2 mb-2' />
              <h5 className="card-title text-info">Alex Gabriel</h5>
              <h6 className="card-title text-white">CA (Knee Pain Patient)</h6>
              <p className="card-text mt-1 mb-2 text-light">
                "I am incredibly grateful for the exceptional care I received for my knee pain.
                The personalized treatment plan, attentive staff, and expert guidance made a significant difference.
                Thanks to their support, I am now pain-free and enjoying a much-improved quality of life."
              </p>
            </div>
          </div>
        </div>

        <div className='col-lg-3'>
          <div className="card">
            <div className="card-header fw-bold text-primary text-center">
              90% Recovered in 30 Days
            </div>
            <div className="card-body text-center bg-dark">
              <img src="https://www.venmond.com/demo/vendroid/img/avatar/big.jpg" className='user-img mt-2 mb-2' />
              <h5 className="card-title text-info">Nina Stanley</h5>
              <h6 className="card-title text-white">President - Persistent (Back Pain Patient)</h6>
              <p className="card-text mt-1 mb-2 text-light">
                "The physiotherapists and office staff all provide a very personal service and seem to ensure that the atmosphere is calming, professional and friendly.
                My physiotherapist was incredibly approachable which definitely made me feel more positive and relaxed about my recovery. "
              </p>
            </div>
          </div>
        </div>

        <div className='col-lg-3'>
          <div className="card">
            <div className="card-header fw-bold text-primary text-center">
              90% Recovered in 40 Days
            </div>
            <div className="card-body text-center bg-dark">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoq0f1tSU2b8opZaApGh5tl2FreFb52dyo6Q&usqp=CAU" className='user-img mt-2 mb-2' />
              <h5 className="card-title text-info">Nutan Hartley</h5>
              <h6 className="card-title text-white">Lawyer (Knee Pain Patient)</h6>
              <p className="card-text mt-1 mb-2 text-light">
                "The staff "go the extra mile" to ensure you understand the issues and ensure that your treatment will help you in the long term.
                Also very pleasant and non-judgemental"
              </p>
            </div>
          </div>
        </div>

        <div className='col-lg-3'>
          <div className="card">
            <div className="card-header fw-bold text-primary text-center">
              100% Recovered in 25 Days
            </div>
            <div className="card-body text-center bg-dark">
              <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" className='user-img mt-2 mb-2' />
              <h5 className="card-title text-info">Steffan Almond</h5>
              <h6 className="card-title text-white">Freelancer (Back Pain Patient)</h6>
              <p className="card-text mt-1 mb-2 text-light">
                "Effective diagnosis, targeted treatment, honesty of when I require treatment, scaling back my treatment when needed, other physios too quick to consume days given by health insurance."
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Testimonials;
