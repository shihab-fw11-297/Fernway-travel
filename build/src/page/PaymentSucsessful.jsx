import "../components/styles/style.css";
import "../components/styles/animation.css";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";

const PaymentSucsessful = () => {

    const para = useParams();
    console.log("tourplan2", para);
    
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
        <div className='main'>
            <p className="payment-title">Payment Loading</p>
            <p className="loading-description">Please wait while we process your payment</p>
            <div className="loading-center">
            <div className="loading"></div>
            <div className="loading"></div>
            <div className="loading"></div>
            <div className="loading"></div>
            <div className="loading"></div>
            </div>

            {
            setTimeout(window.location.href = `/fernway/paymentsuccessfulls/${para.locations}`, 150000)
            }
        </div>
    )
}

export default PaymentSucsessful