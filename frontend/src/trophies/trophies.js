// import React, { useEffect } from "react";
// import * as THREE from "three";
// import WAVES from "vanta/dist/vanta.waves.min";
// import Header from "../homepagenew/components/Header";
// import "./trophies.css";
// const Trophies = () => {
//   useEffect(() => {
//     WAVES({
//       el: "#vanta1",
//       color: "#1C2E3B",
//       shininess: 67,
//       waveHeight: 11.5,
//       zoom: 0.7,
//       waveSpeed: 1.0,
//     });
//   }, []);

//   return (
//     <>
//       <Header />
//       <div id="vanta1" className="trophyapp">
//         <div className="trophyheading">Trophies</div>

//         <div className="scroll-container">
//           <div className="content-container">
//             {Array.from({ length: 12 }).map((_, index) => (
//               <div className="trophy-box" key={index}>
//                 <h2>Achievement {index + 1}</h2>
//                 <textarea
//                   rows="4"
//                   placeholder="Write a description..."
//                 ></textarea>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Trophies;
import React, { useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import * as THREE from "three";
import WAVES from "vanta/dist/vanta.waves.min";
import Header from "../homepagenew/components/Header";
import "./trophies.css";
import Footer from "../homepagenew/components/Footer";

const Trophies = () => {
  useEffect(() => {
    WAVES({
      el: "#vanta1",
      color: "#1C2E3B",
      shininess: 67,
      waveHeight: 11.5,
      zoom: 0.7,
      waveSpeed: 1.0,
    });
    getTrophyStatus();
  }, []);

  const [a1, setA1] = useState(false);
  const [a2, setA2] = useState(false);
  const [a3, setA3] = useState(false);
  const [a4, setA4] = useState(false);
  const [a5, setA5] = useState(false);
  const [a6, setA6] = useState(false);
  const [a7, setA7] = useState(false);
  const [a8, setA8] = useState(false);
  const [a9, setA9] = useState(false);
  const [none, setNone] = useState(false);

  const setFunctions = [
    setA1,
    setA2,
    setA3,
    setA4,
    setA5,
    setA6,
    setA7,
    setA8,
    setA9,
  ];

  const getTrophyStatus = async () => {
    try {
      const token = localStorage.getItem("jwtToken");
      if (token) {
        const decodedToken = jwtDecode(token);
        const email = decodedToken.email;

        const response = await axios.post(
          "https://foodpath-backend.onrender.com/trophies/updateTrophy",
          {
            email: email,
            index: 12,
            value: true,
          }
        );
        const trophyarray = response.data.trophies;
        for (var i = 1; i <= 10; i++) {
          if (trophyarray[i - 1]) {
            setNone(true);
          }
          setFunctions[i - 1](trophyarray[i - 1]);
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Header />
      <div id="vanta1" className="trophies-container">
        <div className="trophyheading">Badges</div>

        <div className="scroll-container">
          <div className="content-container">
            {none && <div className="trophyheading"></div>}
            {a1 && (
              <div className="trophy-box">
                <h2>Snack Samurai </h2>
                <textarea
                  readOnly
                  rows="4"
                  placeholder="Successfully made the model consume 5 foods!"
                ></textarea>
              </div>
            )}
            {!a1 && (
              <div className="trophy-box">
                <h2>???????</h2>
                <textarea
                  readOnly
                  rows="4"
                  placeholder="Yet to unlock!"
                ></textarea>
              </div>
            )}
            {a2 && (
              <div className="trophy-box">
                <h2>Meal Master</h2>
                <textarea
                  readOnly
                  rows="4"
                  placeholder="The model has consumed 10 foods, showing extended effects!"
                ></textarea>
              </div>
            )}
            {!a2 && (
              <div className="trophy-box">
                <h2>???????</h2>
                <textarea
                  readOnly
                  rows="4"
                  placeholder="Yet to unlock!"
                ></textarea>
              </div>
            )}
            {a3 && (
              <div className="trophy-box" style={{marginTop:'20px'}}>
                <h2>Feast Fanatic</h2>
                <textarea
                  readOnly
                  rows="4"
                  placeholder="The model has consumed 20 foods, simulating heavy impact!"
                ></textarea>
              </div>
            )}
            {!a3 && (
              <div className="trophy-box" style={{marginTop:'20px'}}>
                <h2>???????</h2>
                <textarea
                  readOnly
                  rows="4"
                  placeholder="Yet to unlock!"
                ></textarea>
              </div>
            )}
            {a4 && (
              <div className="trophy-box">
                <h2>Critical Care</h2>
                <textarea
                  readOnly
                  rows="4"
                  placeholder="Achieved DEAD status on one organ!  "
                ></textarea>
              </div>
            )}
            {!a4 && (
              <div className="trophy-box">
                <h2>???????</h2>
                <textarea
                  readOnly
                  rows="4"
                  placeholder="Yet to unlock!"
                ></textarea>
              </div>
            )}
            {a5 && (
              <div className="trophy-box">
                <h2>Organ Apocalypse</h2>
                <textarea
                  readOnly
                  rows="4"
                  placeholder="Brought three organs to DEAD status!"
                ></textarea>
              </div>
            )}
            {!a5 && (
              <div className="trophy-box">
                <h2>???????</h2>
                <textarea
                  readOnly
                  rows="4"
                  placeholder="Yet to unlock!"
                ></textarea>
              </div>
            )}
            {a6 && (
              <div className="trophy-box">
                <h2>Walking Dead</h2>
                <textarea
                  readOnly
                  rows="4"
                  placeholder="Reached DEAD status for all organs"
                ></textarea>
              </div>
            )}
            {!a6 && (
              <div className="trophy-box">
                <h2>???????</h2>
                <textarea
                  readOnly
                  rows="4"
                  placeholder="Yet to unlock!"
                ></textarea>
              </div>
            )}
            {a7 && (
              <div className="trophy-box">
                <h2>Peak Performance</h2>
                <textarea
                  readOnly
                  rows="4"
                  placeholder="Achieved Very Healthy statusfor all organs!"
                ></textarea>
              </div>
            )}
            {!a7 && (
              <div className="trophy-box">
                <h2>???????</h2>
                <textarea
                  readOnly
                  rows="4"
                  placeholder="Yet to unlock!"
                ></textarea>
              </div>
            )}
            {a8 && (
              <div className="trophy-box">
                <h2>Organ Explorer </h2>
                <textarea
                  readOnly
                  rows="4"
                  placeholder="All organs clicked in the model!"
                ></textarea>
              </div>
            )}
            {!a8 && (
              <div className="trophy-box">
                <h2>???????</h2>
                <textarea
                  readOnly
                  rows="4"
                  placeholder="Yet to unlock!"
                ></textarea>
              </div>
            )}
            {a9 && (
              <div className="trophy-box">
                <h2>Health Guru</h2>
                <textarea
                  readOnly
                  rows="4"
                  placeholder="Visited every guide in the model"
                ></textarea>
              </div>
            )}
            {!a9 && (
              <div className="trophy-box">
                <h2>???????</h2>
                <textarea
                  readOnly
                  rows="4"
                  placeholder="Yet to unlock!"
                ></textarea>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Trophies;
