import React, { useState, useEffect } from "react";
import axios from "axios";
import "../model2d/contentstyle.css";
import { Model3d } from "./model3d";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import EatAnimation from "../pacanimation/pacmananimation";
//import Organstructure from './organstructure.js';

function Content3d() {
  const textareaRef = useRef(null);
  let email;
  const navigate = useNavigate();
  const token = localStorage.getItem("jwtToken");
  console.log(token);

  if (token) {
    try {
      console.log("Entered token check");
      const decodedToken = jwtDecode(token);
      console.log(decodedToken);

      console.log(decodedToken.email);

      if (decodedToken && decodedToken.email) {
        email = decodedToken.email;
        console.log("Decoded email:", email);
      } else {
        console.log("Email not found in token payload.");
      }
    } catch (error) {
      console.error("Failed to decode token:", error);
    }
  } else {
    console.log("No JWT token found in localStorage.");
  }

  const [isSignIn, setSingIn] = useState(false);
  //const token = localStorage.getItem("jwtToken");
  const checkSignIn = () => {
    if (token) {
      setSingIn(true);
    } else {
      navigate("/login");
    }
  };
  useEffect(() => {
    const textarea = textareaRef.current;
    checkSignIn();
  }, []);

  console.log("entered content function");
  const [stomachOpacity, setstomachOpacity] = useState(1);
  const [heartOpacity, setheartOpacity] = useState(1);
  const [brainOpacity, setbrainOpacity] = useState(1);
  const [lungsOpacity, setlungsOpacity] = useState(1);
  const [kidneyOpacity, setkidneyOpacity] = useState(1);
  const [liverOpacity, setliverOpacity] = useState(1);
  const [intestineOpacity, setintestineOpacity] = useState(1);

  // const fetchOrganColors = async () => {
  //   handleAddItem();
  //   try {
  //     const response = await axios.get(
  //       "https://foodpath-backend.onrender.com/api/organs/organ-status",
  //       { token: localStorage.getItem("jwtToken") }
  //     );

  //     setbraincolor(response.data.brain);
  //     setlungscolor(response.data.lungs);
  //     setheartcolor(response.data.heart);
  //     setlivercolor(response.data.liver);
  //     setstomachcolor(response.data.stomach);
  //     setintestinecolor(response.data.intestine);
  //     setkidneycolor(response.data.kideny);
  //   } catch (error) {
  //     console.error("Error fetching color and opacity:", error);
  //   }
  // };

  function colourrating(a) {
    switch (a) {
      case 0:
        return 0.1; //dead
        break;
      case 1:
        return 0.8; //healthy
        break;
      case 2:
        return 1; //very healthy
        break;
      case 3:
        return 0.6; //unhealthy
        break;
      case 4:
        return 0.3; //very unhealthy
        break;
    }
  }

  function Ostatus(a) {
    switch (a) {
      case 0:
        return "DEAD";
        break;
      case 1:
        return "Healthy";
        break;
      case 2:
        return "Very Healthy";
        break;
      case 3:
        return "UnHealthy";
        break;
      case 4:
        return "Very UnHealthy";
        break;
      default:
        return "Normal";
    }
  }

  const [selectedItem, setSelectedItem] = useState("");
  const [quantity, setquantity] = useState("");
  const [foodStatus, setFoodStatus] = useState([]);
  const [isEat, setEat] = useState(false);
  const [isEating, setEating] = useState(false);

  const [handleAddRes, setHandleAddRes] = useState(null);

  const handleAddItem = async () => {
    console.log("button working");
    if (!selectedItem) {
      console.log("Please select an item and enter a quantity.");
      return;
    }

    try {
      setFoodStatus("checking food...");
      console.log(selectedItem);
      const response = await axios.post(
        "https://foodpath-backend.onrender.com/api/organs/validatefood",
        {
          foodItems: selectedItem,
        }
      );

      const { aiResponse } = response.data;

      console.log("something is happening");
      if (!aiResponse.consumable) {
        setFoodStatus("You can't eat that!");
        setSelectedItem("");
        return;
      }

      setFoodStatus("consumable");
    } catch (error) {
      console.error("Error adding food item:", error);
    }

    try {
      setFoodStatus("eating...");
      setEating(true);
      console.log(selectedItem);
      const response = await axios.post(
        "https://foodpath-backend.onrender.com/api/organs/add-food",
        {
          foodItems: selectedItem,
          email: email,
        }
      );

      const { aiResponse,consumedFoods  } = response.data;
      console.log("something is happening");
      setFoodStatus("Consumed");
      setEating(false);
      setEat(true);

      const foodItemsString = consumedFoods.map((item) => item.foodItem);
      console.log("fis length : " + foodItemsString.length);

      const foodsString = foodItemsString
        .map((food, index) => `Item ${index + 1}: ${food}`)
        .join("\n");

      setfoodHistory(foodsString);
      setHandleAddRes(aiResponse);
      setbrainOpacity(colourrating(aiResponse.health_status.brain.rating));
      setlungsOpacity(colourrating(aiResponse.health_status.lungs.rating));
      setheartOpacity(colourrating(aiResponse.health_status.heart.rating));
      setliverOpacity(colourrating(aiResponse.health_status.liver.rating));
      setstomachOpacity(colourrating(aiResponse.health_status.stomach.rating));
      setintestineOpacity(
        colourrating(aiResponse.health_status.intestines.rating)
      );
      setkidneyOpacity(colourrating(aiResponse.health_status.kidneys.rating));
      setSelectedItem("");
    } catch (error) {
      setEating(false);
      setFoodStatus("error!");
      setSelectedItem("");
      console.error("Error adding food item:", error);
    }
  };

  const handleHistoryButton = () => {
    setActive(false);
  };
  const handleGuideButton = () => {
    const organsmall = IOorgan.charAt(0).toLowerCase() + IOorgan.slice(1);
    navigate("/guides/" + organsmall);
  };

  const [isActive, setActive] = useState(false);
  const [IOorgan, setIOorgan] = useState("");
  const [IOstatus, setIOstatus] = useState("");
  const [IOglucose, setIOglucose] = useState("");
  const [IOcalories, setIOcalories] = useState("");
  const [IOoxygen, setIOoxygen] = useState("");

  const [seperateFactor1label, setseperateFactor1label] = useState("SF1");
  const [seperateFactor2label, setseperateFactor2label] = useState("SF2");
  const [seperateFactor1value, setseperateFactor1value] = useState("SV1");
  const [seperateFactor2value, setseperateFactor2value] = useState("SV2");

  const getSeperateFactor1 = (svgName) => {
    switch (svgName) {
      case "brain":
        return "Neurotransmitter_Levels";
      case "heart":
        return "Plant_Sterols";
      case "liver":
        return "Choline";
      case "kidneys":
        return "Phosphorus";
      case "lungs":
        return "Vitamin_C";
      case "stomach":
        return "Polyphenols";
      case "intestines":
        return "Prebiotics";
    }
  };

  const getSeperateFactor2 = (svgName) => {
    switch (svgName) {
      case "brain":
        return "Amino_Acids";
      case "heart":
        return "Magnesium";
      case "liver":
        return "Fats";
      case "kidneys":
        return "Potassium";
      case "lungs":
        return "Carotenoids";
      case "stomach":
        return "Zinc";
      case "intestines":
        return "Polyphenols";
    }
  };

  const handleOrganClick = async (OrgName) => {
    try {
      // setActive(false);
      // isActive()
      setActive(false);
      const organcapital = OrgName.charAt(0).toUpperCase() + OrgName.slice(1);
      setIOorgan(organcapital);
      if (!handleAddRes) {
        console.error(
          "Error: handleAddRes is not set. Please call handleAddItem first."
        );
        return;
      }

      console.log(`3d clicked ${OrgName}`);
      console.log(handleAddRes.health_status.intestines.rating);

      var sf1 = getSeperateFactor1(OrgName);
      var sf2 = getSeperateFactor2(OrgName);

      setseperateFactor1label(sf1);
      setseperateFactor2label(sf2);
      setseperateFactor1value(handleAddRes.post_consumption_values[sf1]);
      setseperateFactor2value(handleAddRes.post_consumption_values[sf2]);

      setIOstatus(Ostatus(handleAddRes.health_status[OrgName].rating));
      setIOglucose(handleAddRes.post_consumption_values.blood_glucose_levels);
      setIOcalories(handleAddRes.post_consumption_values.calorie_levels);
      setIOoxygen(handleAddRes.post_consumption_values.oxygen_levels);
      setActive(true);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const ResetModel = async () => {
    try {
      const response = await axios.post(
        "https://foodpath-backend.onrender.com/api/organs/reset-consumed-foods",
        {
          email: email,
        }
      );
      setActive(false);
      setfoodHistory("");
      setFoodStatus("Model Reset Successful");
      setIOstatus(" ");
      setIOglucose(" ");
      setIOcalories(" ");
      setIOoxygen(" ");
      setIOorgan(" ");
      setbrainOpacity(1);
      setlungsOpacity(1);
      setheartOpacity(1);
      setliverOpacity(1);
      setstomachOpacity(1);
      setintestineOpacity(1);
      setkidneyOpacity(1);
      setHandleAddRes(null);
      //setfoodStatus(prevFoods => [...prevFoods, { foodItem: selectedItem, quantity: quantity }]); // Add new food item to the array
      console.log("Food item added successfully:", response.data);
    } catch (error) {
      console.error("Error adding food item:", error);
    }
  };

  const foodStatusText = foodStatus;
  const [foodHistory, setfoodHistory] = useState("");

  const handleHistory = async () => {
    try {
      const response = await axios.post(
        "https://foodpath-backend.onrender.com/api/organs/history",
        {
          email: email,
        }
      );

      const { aiResponse, consumedFoods } = response.data;
      console.log("some is happening");
      if (consumedFoods.length === 0) {
        setEat(false);
        return;
      } else {
        setEat(true);
      }
      console.log(consumedFoods);
      const foodItemsString = consumedFoods.map((item) => item.foodItem);

      const foodsString = foodItemsString
        .map((food, index) => `Item ${index + 1}: ${food}`)
        .join("\n");

      setfoodHistory(foodsString);

      setHandleAddRes(aiResponse);

      // Update the state with Opacity changes
      setbrainOpacity(colourrating(aiResponse.health_status.brain.rating));
      setlungsOpacity(colourrating(aiResponse.health_status.lungs.rating));
      setheartOpacity(colourrating(aiResponse.health_status.heart.rating));
      setliverOpacity(colourrating(aiResponse.health_status.liver.rating));
      setstomachOpacity(colourrating(aiResponse.health_status.stomach.rating));
      setintestineOpacity(
        colourrating(aiResponse.health_status.intestines.rating)
      );
      setkidneyOpacity(colourrating(aiResponse.health_status.kidneys.rating));
    } catch (error) {
      setFoodStatus("Error!");
      setEating(false);
      console.error("Error adding food item:", error);
    }
  };

  useEffect(() => {
    handleHistory();
  }, []);

  return (
    <>
      {!isSignIn && <div style={{ height: "100vh" }}></div>}
      {isSignIn && (
        <div className="mainelements">
          <div class="inputinfo">
            <div style={{ marginTop: "50px" }}></div>
            <p class="inputinfoheading">ENTER FOOD</p>
            <input
              value={selectedItem}
              onChange={(event) => setSelectedItem(event.target.value)}
              class="textareas"
              type="text"
              style={{
                marginBottom: "20px",
                borderRadius: "6px",
                paddingBottom: "20px",
                paddingTop: "20px",
                lineHeight: "50px",
                color: "#1c2e3b",
              }}
            ></input>

            <textarea
              className="textareas"
              style={{
                height: "85px",
                backgroundColor: "darkgrey",
                marginTop: "",
              }}
              readOnly
              value={
                "You can add any *edible* food!\nSeperate multiple foods with a comma"
              }
            ></textarea>
            <button class="inputbuttons1" onClick={handleAddItem}>
              Add Food
            </button>
            <p class="inputinfoheading">{foodStatusText}</p>
            {isEating && (
              <>
                <EatAnimation />
              </>
            )}
            {isActive && (
              <div>
                <button
                  className="inputbuttons"
                  onClick={handleHistoryButton}
                  style={{ marginLeft: "30px" }}
                >
                  View History
                </button>
              </div>
            )}
            <button
              class="inputbuttons"
              onClick={ResetModel}
              style={{ marginTop: "20px" }}
            >
              Reset Model
            </button>
          </div>

          <div class="model2d">
            <div
              style={{
                height: "calc(100vh - 64px)",
                backgroundColor: "#c0c0c0",
              }}
            >
              <Canvas camera={{ position: [0, 1, 5], fov: 50 }}>
                <ambientLight intensity={1} />
                <pointLight position={[10, 10, 10]} />

                <Model3d
                  scale={1}
                  handleClick={handleOrganClick}
                  stomachOpacity={stomachOpacity}
                  heartOpacity={heartOpacity}
                  brainOpacity={brainOpacity}
                  lungsOpacity={lungsOpacity}
                  liverOpacity={liverOpacity}
                  kidneyOpacity={kidneyOpacity}
                  intestineOpacity={intestineOpacity}
                />

                {/* Add OrbitControls for interactivity */}
                <OrbitControls
                  enablePan={false} // Enable panning (dragging the model)
                  enableZoom={false} // Enable zooming
                  enableRotate={true} // Enable rotating
                  // minDistance={25}          // Minimum zoom distance
                  // maxDistance={25}         // Maximum zoom distance
                  maxPolarAngle={Math.PI / 2} // Restrict vertical rotation
                  minPolarAngle={Math.PI / 2} // Restrict vertical rotation
                />
              </Canvas>
            </div>
          </div>
          <div class="organinfo">
            <div class="organinfostats">
              <div class="organstats">
                <div style={{ height: "50px" }}></div>
                {!isActive && (
                  <div>
                    <p class="inputinfoheading">History</p>
                    {/* <textarea
                      readOnly
                      ref={textareaRef}
                      class="textareas"
                      style={{
                        paddingBottom: "20px",
                        textAlign: "top",
                        height: "auto",
                        maxHeight: "300px",
                      }}
                      value={foodHistory}
                    ></textarea> */}
                    <textarea
                      placeholder="Stomach empty :("
                      readOnly
                      ref={textareaRef}
                      class="textareas"
                      style={{
                        paddingBottom: "20px",
                        textAlign: "top",
                        minHeight: "40vh",
                        maxHeight: "40vh",
                      }}
                      value={foodHistory}
                    ></textarea>
                    {!isEat && (
                      <div
                        className="organinfolabel"
                        style={{
                          paddingLeft: "10px",
                          borderWidth: "0px",
                          fontSize: "20px",
                          fontSize: "23px",
                        }}
                      >
                        Please Eat some food!
                      </div>
                    )}
                  </div>
                )}
                {isActive && (
                  <div>
                    <button
                      className="inputbuttons"
                      style={{
                        marginLeft: "20%",
                        marginRight:'20%',
                        fontSize: "15px",
                        paddingLeft:'0',
                        paddingRight:'0',
                        width:'60%'
                      }}
                      onClick={handleGuideButton}
                      value={"Make " + { IOorgan } + " healthier!"}
                    >
                      Know more
                    </button>
                    <label className="organinfolabel">Organ:</label>
                    <textarea
                      readOnly
                      className="organinfoinputsingle"
                      value={IOorgan}
                    />

                    <label className="organinfolabel">Status</label>
                    <textarea
                      readOnly
                      className="organinfoinputsingle"
                      value={IOstatus}
                    />

                    <label className="organinfolabel">
                      Blood Glucose Levels
                    </label>
                    <textarea
                      readOnly
                      className="organinfoinputs"
                      style={{ height: "auto" }}
                      value={IOglucose}
                    />

                    <label className="organinfolabel">Calorie Levels</label>
                    <textarea
                      readOnly
                      className="organinfoinputs"
                      style={{ height: "auto" }}
                      value={IOcalories}
                    />

                    <label className="organinfolabel">Oxygen Levels</label>
                    <textarea
                      readOnly
                      className="organinfoinputs"
                      style={{ height: "auto" }}
                      value={IOoxygen}
                    />

                    <label className="organinfolabel">
                      {seperateFactor1label}
                    </label>
                    <textarea
                      readOnly
                      className="organinfoinputs"
                      style={{ height: "auto" }}
                      value={seperateFactor1value}
                    />

                    <label className="organinfolabel">
                      {seperateFactor2label}
                    </label>
                    <textarea
                      readOnly
                      className="organinfoinputs"
                      style={{ height: "auto" }}
                      value={seperateFactor2value}
                    />

                    {/* <button
                      className="inputbuttons"
                      style={{ marginLeft: "20px" }}
                      // onClick={handleGuideButton}
                    >
                      Go to Guides
                    </button>
                    <button
                      className="inputbuttons"
                       onClick={handleHistoryButton}
                    >
                      View History
                    </button> */}
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* <div class="organinfo">
        <div class="organinfostats" style={{marginTop:'50px'}}>
            <label class="organinfolabel" >Organ:</label>
            <input readOnly class="organinfoinputs" value={IOorgan}></input>
            <label class="organinfolabel">Status:</label>
            <input readOnly class="organinfoinputs" value={IOstatus}></input>
            <label class="organinfolabel">Blood Glucose Levels:</label>
            <input readOnly class="organinfoinputs" value={IOglucose}></input>
            <label class="organinfolabel">Calorie Levels:</label>
            <input readOnly class="organinfoinputs" value={IOcalories}></input>
            <label class="organinfolabel">Oxygen Levels:</label>
            <input readOnly class="organinfoinputs" value={IOoxygen}></input>
            
          <button class='inputbuttons' style={{marginLeft:'20px'}}>Go to Guides</button>

        </div>
      </div> */}
        </div>
      )}
    </>
  );
}

export default Content3d;
