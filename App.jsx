import { useEffect, useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Home from './Home';
import Ticket from './Ticket';
import Coming from './Coming';
import Fb from './Fb';
import Facility from './Facility';
import Advertise from './Advertise';
import Faq from './Faq';
import Audi1 from './Audi1';
import Book from './Book';

const API_KEY = '9eeed77beae330801b5deae0a3354e6e';
const BASE_URL = 'https://api.themoviedb.org/3';

const fetchMovies = async () => {
  try {
    const tamilMovies = await axios.get(`${BASE_URL}/movie/now_playing`, {
      params: {
        api_key: API_KEY,
        language: 'ta-IN',
        page: 1,
      },
    });

    const englishMovies = await axios.get(`${BASE_URL}/movie/now_playing`, {
      params: {
        api_key: API_KEY,
        language: 'en-US',
        page: 1,
      },
    });

    const tamil = tamilMovies.data.results.slice(0, 3);
    const english = englishMovies.data.results.slice(0, 1);

    return [...tamil, ...english];
  } catch (error) {
    console.error('Error fetching movies:', error);
    return [];
  }
};

function App() {
  const [movies, setMovies] = useState([]);
  const [tickets, Settickets] = useState([]);
  const [boughtTickets, setBoughtTickets] = useState([]);

  const [tickets2, setTickets2] = useState([]);
  const [boughtTickets2, setBoughtTickets2] = useState([]);

  useEffect(() => {
    const loadMovies = async () => {
      const fetchedMovies = await fetchMovies();
      setMovies(fetchedMovies);
    };

    loadMovies();
  }, []);

  const buy = (seatId) => {
    if (!boughtTickets.includes(seatId)) {
      Settickets((prev) => [...prev, seatId]);
    }
  };

  const handlebuytick = () => {
    const len = tickets.length;
    alert(`You bought ${len} tickets.`);
    setBoughtTickets((prev) => [...prev, ...tickets]);
    Settickets([]);
  };

  const buy2 = (seatId) => {
    if (!boughtTickets2.includes(seatId)) {
      setTickets2((prev) => [...prev, seatId]);
    }
  };

  const handleBuyTick2 = () => {
    const len = tickets2.length;
    alert(`You bought ${len} tickets for Audi2.`);
    setBoughtTickets2((prev) => [...prev, ...tickets2]);
    setTickets2([]);
  };

  const paymoney = (movie, timi, tickets, cost, ticketId) => {
    axios
      .post("http://localhost:3000/bookticket", {
        movie,
        timi,
        tickets,
        cost,
        ticketId,
      })
      .then((res) => {
        if (res.status >= 200 && res.status < 300) {
          alert("Ticket booked successfully!");
        }
      })
      .catch((err) => {
        console.error("Error while booking the ticket:", err);
        alert("Error while booking the ticket: " + err.message);
      });
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Home movies={movies} />} />
        <Route path="/tickets" element={<Ticket />} />
        <Route path="/comingsoon" element={<Coming />} />
        <Route path="/fandb" element={<Fb />} />
        <Route path="/facilities" element={<Facility />} />
        <Route path="/adv" element={<Advertise />} />
        <Route path="/faq" element={<Faq />} />


        <Route
          path="/audi1/:movie/:timi"
          element={
            <Audi1
              buy={buy}
              handlebuytick={handlebuytick}
              tickets={tickets}
              boughtTickets={boughtTickets}
              movie="mufasa1"
            />
          }
        />

        <Route
          path="/audi2"
          element={
            <Audi1
              buy={buy2}
              handlebuytick={handleBuyTick2}
              tickets={tickets2}
              boughtTickets={boughtTickets2}
              movie="mufasa2"
            />
          }
        />

        <Route
          path="/book/movie/:movie/:timi"
          element={<Book paymoney={paymoney} />}
        />
      </Routes>
    </>
  );
}

export default App;
