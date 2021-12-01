import "../components/styles/style.css";
import TicketBooking from "../components/TicketBooking/TicketBooking";
import HotelBookingCard from "../components/HotelBookingCard/HotelBookingCard";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";

const TourPlan3 = () => {
  const para = useParams();
  console.log(para);
  const imageUrl =
    "https://images.unsplash.com/photo-1605649487212-47bdab064df7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80";

  const jsx = {
    backgroundImage: `url(${imageUrl})`,
    backgroundRepeat: "no-repeat",
    background: `linear-gradient(0deg, rgba(0, 0, 0, 0.48), rgba(0, 0, 0, 0.48)), url(${imageUrl})`,
  };

  const [attractions, setAttractions] = useState("hotel-btn");
  const [notActivities, setNotActivities] = useState("ticket-btn");
  const [reviewShow, SetreviewShow] = useState(true);

  const attractionActive = () => {
    SetreviewShow(true);
    setNotActivities(
      notActivities === "hotel-btn" ? "ticket-btn" : "ticket-btn"
    );
    setAttractions(attractions === "ticket-btn" ? "hotel-btn" : "hotel-btn");
  };

  const activitiesActives = () => {
    SetreviewShow(false);
    setAttractions(attractions === "hotel-btn" ? "ticket-btn" : "ticket-btn");
    setNotActivities(
      notActivities === "ticket-btn" ? "hotel-btn" : "hotel-btn"
    );
  };

  const [locations, setLocations] = useState([]);

  useEffect(() => {
    axios
      .get("https://fernway-server.herokuapp.com/location", {
        params: {
          locations: para.locations, //mention location here
        },
      })
      .then(({ data }) => {
        setLocations([...data]);
      });
  }, []);


  return (
    <>
      <Link
        to={`/tourplan/day-to-day-plan/reservation/Payment/${para.locations}`}
      >
        <button className="trip-btn">Continue -> </button>
      </Link>
      <div className="wrapper" style={jsx}></div>
      <div className="flex" style={{ marginBottom: "5%" }}>
      {locations.map((el) => (
          <div className="move-top">
            <p className="tour-title">{el.title}</p>
            <p className="tour-place-title">{el.locations} </p>
          </div>
        ))}
        
        <div className="move-top-btn">
          <button className="tour-days-btn">4 Days</button>
        </div>
      </div>

      <div className="container">
        <div className="flex">
          <p className="big-titles">Reservations</p>
        </div>

        <div className="flex btn-div">
          <button onClick={attractionActive} className={attractions}>
            Ticket Booking
          </button>
          <button onClick={activitiesActives} className={notActivities}>
            Hostel Booking
          </button>
        </div>
        {reviewShow ? (
          <div className="attractionShow">
            <TicketBooking />
          </div>
        ) : (
          <div className="activitiesShow">
            <HotelBookingCard />
          </div>
        )}
      </div>
    </>
  );
};

export default TourPlan3;
