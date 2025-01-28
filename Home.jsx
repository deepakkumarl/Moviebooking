import { Link } from "react-router-dom";
import "./Home.css";
import back from "./assets/theater-hd-8k-wallpaper-stock-photographic-image_853645-65564.avif";

const Home = ({ movies }) => {
  return (
    <>
      <h1 className="head">Vardharaja Theatre</h1>
      <nav className="nav">
        <Link to={'/'}><button>Home</button></Link>
        <Link to={'/tickets'}><button>Tickets</button></Link>
        <Link to={'/comingsoon'}><button>Coming Soon</button></Link>
        <Link to={'/fandb'}><button>F & B</button></Link>
        <Link to={'/facilities'}><button>Facilities</button></Link>
        <Link to={'/adv'}><button>Advertise</button></Link>
        <Link to={'/faq'}><button>FAQ</button></Link>
      </nav>
      
  
      <div className="image">
        <img src={back} alt="Theatre background" />
      </div>

      <h3 className="tit">
        <p>Movies Now</p>
      </h3>
      
      <div className="movies-container">
        {movies && movies.map((movie) => (
          <div key={movie.id} className="movie-poster">
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
