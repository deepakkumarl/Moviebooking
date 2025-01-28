import { Link } from "react-router-dom"


const Advertise = () => {
    return (
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
      
      </>
    )
}

export default Advertise