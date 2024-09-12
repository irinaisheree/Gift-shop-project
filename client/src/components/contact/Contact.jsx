export default function Contact(){
  return (
    <section className="contact_section ">
    <div className="container px-0">
      <div className="heading_container ">
        <h2 className="">
          Contact Us
        </h2>
      </div>
    </div>
    <div className="container container-bg">
      <div className="row">
        <div className="col-lg-7 col-md-6 px-0">
          <div className="map_container">
            <div className="map-responsive">
             <img src="https://www.shutterstock.com/image-vector/vector-map-southeast-european-country-600nw-2209086135.jpg" alt = ""/>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-5 px-0">
          <form action="#">
            <div>
              <input type="text" placeholder="Name" />
            </div>
            <div>
              <input type="email" placeholder="Email" />
            </div>
            <div>
              <input type="text" placeholder="Phone" />
            </div>
            <div>
              <input type="text" className="message-box" placeholder="Message" />
            </div>
            <div className="d-flex ">
              <button>
                SEND
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  );
}