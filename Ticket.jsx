import { Link } from "react-router-dom"
import back from './assets/gold-cinema-santacruz-west-mumbai-cinema-halls-2hle3-250.webp'
import "./Ticket.css"

const Ticket = () => {
    return(
      <>
        <nav className="navall">
        <Link to={'/'}><button>Home</button></Link>
        <Link to={'/tickets'}><button>Tickets</button></Link>
        <Link to={'/comingsoon'}><button>Coming Soon</button></Link>
        <Link to={'/fandb'}><button>F & B</button></Link>
        <Link to={'/facilities'}><button>Facilities</button></Link>
        <Link to={'/adv'}><button>Advertise</button></Link>
        <Link to={'/faq'}><button>FAQ</button></Link>
      </nav>
      <span className="days">
      <button className="day">26</button>
      <button className="day">27</button>

      </span>
      
      <div className="mm">
        <input type="search" placeholder="Search a movie"></input>
        <div className="con">
           <img src={back}></img>
           <div className="bb">
           <h5>Mufasa</h5>
           <h5>Adventure drama animation</h5>
           </div>
          <div className="ccon">
          <Link to={'/audi1/mufasa/2.00pm'}>
          <button>2.00am (Audi 1)</button></Link>
            <Link to={'/audi2'}><button>7.00pm (Audi 2)</button></Link>
          </div>
          
        </div>

         <div className="con">
           <img src={back}></img>
           <div className="bb">
           <h5>Moana 2</h5>
           <h5>Fantasy Emotional animation</h5>
           </div>
          <div className="ccon">
            <button>2.00am (Audi 1)</button>
            <button>7.00pm (Audi 2)</button>
          </div>
        </div>

      </div>
      
      </>
    )
}

export default Ticket