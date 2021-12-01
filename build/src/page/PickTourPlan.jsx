import React, { useState, useEffect } from "react";
import "../components/styles/home.css";
import Navbar from "../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import axios from "axios";

const PickTourPlan = () => {
  const para = useParams();
  console.log("Picktourplan", para);

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
  const showCurrentTrip = () => {
    return (
      <>
        <div className="current-trip_mk">
          <h1>Current Trip</h1>
          <div
            className="trip-container_mk"
            style={{
              backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYxb_GW9U_57muMzGpdsWoCnW7Qb7jmZ4RxQ&usqp=CAU")`,
            }}
          ></div>
          {locations.map((el) => (
            <>
              <p className="trip_title">{el.title}</p>
              <p className="trip_date">18th Nov - 20th Nov</p>
            </>
          ))}
        </div>
        <div className="current-trip_mk">
          <h1>Past Trip</h1>
          <div className="empty-container_mk">
            <p>There's no past trip</p>
          </div>
        </div>
      </>
    );
  };

  const showEmpty = () => {
    return (
      <>
        <div className="current-trip_mk">
          <h1>Current Trip</h1>
          <div className="empty-container_mk">
            <p>There's no ongoing trip right now</p>
          </div>
          <div className="tour-plan-btn_mk">
            <Link to="/fernway/picktourplan">
              <button className="pick-tour-btn_mk">Pick a tour plan</button>
            </Link>
            <button className="create-plan-btn_mk">Create your own plan</button>
          </div>
        </div>
        <div className="current-trip_mk">
          <h1>Past Trip</h1>
          <div className="empty-container_mk">
            <p>There's no past trip</p>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="banner_mk"></div>
      <div className="flex_mk">
        <div className="move-top_mk">
          <p className="tour-title_mk">My Trips</p>
        </div>
      </div>
      <div className="plan-trip_mk">
        {para.locations === "true" ? showEmpty() : showCurrentTrip()}
      </div>
      <Navbar />
    </>
  );
};

export default PickTourPlan;
