import { useLocation, useParams } from 'react-router-dom';
import "./Book.css";
import jspdf from "jspdf";
import html2canvas from "html2canvas";
import QRCode from "qrcode";
import { useState, useEffect } from 'react';

const Book = ({ paymoney }) => {
  const { movie, timi } = useParams();
  const location = useLocation();
  
  const queryParams = new URLSearchParams(location.search);
  const tickets = queryParams.get('tickets') || "0";
  const cost = queryParams.get('cost') || "0.00";

  const [ticketId, setTicketId] = useState("");
  const [qrCode, setQrCode] = useState("");

  useEffect(() => {
    const id = Math.floor(10000 + Math.random() * 90000).toString();
    setTicketId(id);
    QRCode.toDataURL(id).then(setQrCode).catch(console.error);
  }, []);

  const down = () => {
    const val = document.querySelector('.mkk');
    html2canvas(val).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jspdf();
      const imgWidth = 190;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      pdf.addImage(imgData, 'PNG', 10, 10, imgWidth, imgHeight);
      pdf.save('booking-information.pdf');
    }).catch((err) => {
      console.error(err);
    });
  };

  return (
    <div className='mkk'>
      <h1>Booking Information</h1>
      <p><strong>Movie:</strong> {movie}</p>
      <p><strong>Time:</strong> {timi}</p>
      <p><strong>Total Tickets:</strong> {tickets}</p>
      <p><strong>Total Cost:</strong> ${cost}</p>
      <p><strong>Ticket ID:</strong> {ticketId}</p>
      {qrCode && <img src={qrCode} alt="QR Code" />}
      <button onClick={() => paymoney(movie, timi, tickets, cost , ticketId)}>Pay</button>
      <button onClick={down}>Download ticket</button>
    </div>
  );
};

export default Book;
