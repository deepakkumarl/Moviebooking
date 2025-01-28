import { Link, useParams } from "react-router-dom";
import "./Audi1.css";

const Audi1 = ({ buy, handlebuytick, tickets, boughtTickets, movie }) => {
  const rows = 15;
  const columns = 15;
  const ticketCost = 110;
  const totalCost = tickets.length * ticketCost;

  const { timi } = useParams();  
  
  return (
    <div>
      <div className="hh">
        <strong>SCREEN</strong>
      </div>

      {Array.from({ length: rows }, (_, rowIndex) => {
        const rowLabel = String.fromCharCode(65 + rowIndex);
        return (
          <div key={rowLabel} className="nn">
            {Array.from({ length: columns }, (_, columnIndex) => {
              const seatId = `${rowLabel}${columnIndex + 1}`;
              const isel = tickets.includes(seatId);
              const isBought = boughtTickets.includes(seatId);
              return (
                <button
                  key={seatId}
                  onClick={() => buy(seatId)}
                  disabled={isBought} 
                  className="seat-button" 
                  style={{
                    backgroundColor: isBought
                      ? "gray"
                      : isel
                      ? "red" 
                      : "white", 
                    color: isBought || isel ? "white" : "black",
                  }}
                >
                  {seatId}
                </button>
              );
            })}
          </div>
        );
      })}

      <Link
        to={`/book/movie/${movie}/${timi}?tickets=${tickets.length}&cost=${totalCost}`}
      >
        <button onClick={handlebuytick} className="uu">
          Buy Tickets
        </button>
      </Link>

      <div className="mk">
        <h5>Price of 1 ticket is 110</h5>
        <h5>You bought: {tickets.length}</h5>
        <h5>You pay: ${totalCost}</h5>
      </div>
    </div>
  );
};

export default Audi1;
