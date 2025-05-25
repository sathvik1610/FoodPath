import "./Guide.css";
import axios from "axios";
import React, { useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useEffect } from "react";
import Header from "../homepagenew/components/Header";
import { motion } from "framer-motion";






import yogurt from '../foodimages/yogurt.jpg';
import ginger from '../foodimages/ginger.jpg';
import banna from '../foodimages/bannana.jpg';
import oats from '../foodimages/oats.jpg';
import papaya from '../foodimages/papaya.jpg';
import fennel from '../foodimages/fennel.jpg';
import mint from '../foodimages/mint.webp';
import mile from '../foodimages/mile.jpg';
import rice from '../foodimages/rice.jpg';
import sauce from '../foodimages/applesauce.jpg';
import spicy from'../foodimages/spicy.jpg';
import fried from '../foodimages/friedfood.jpg';
import drinks from '../foodimages/drinks.jpg';
import orangeImage from '../foodimages/oranges.jpg';
import chocolate from '../foodimages/chocolate.jpg';
import meat from '../foodimages/processed.jpg';
import alcohol from '../foodimages/alcohol.jpg';
import onion from '../foodimages/onions.jpg';
import tomato from '../foodimages/tomato.jpg';
import dairy from '../foodimages/dairy.jpg';


function Stomach() {
  const [guides_stomach_status_text, setguides_stomach_status_text] =
      useState("Analysing...");
  const [guides_stomach_consumed_text, setguides_stomach_consumed_text] =
      useState("Getting...");
  const [guides_stomach_info_text, setguides_stomach_info_text] =
      useState("Analysing...");

  // Ensure jwt-decode is imported
  const [isSignIn, setSingIn] = useState(false);

  let email;

  const token = localStorage.getItem("jwtToken");
  console.log(token);

  const checkSignIn = () => {
    if (token) {
      setSingIn(true);
    }
  };

  useEffect(() => {
    checkSignIn();
  });

  if (token) {
    try {
      console.log("Entered token check");

      // Decode the JWT token to extract the payload
      const decodedToken = jwtDecode(token);
      console.log(decodedToken); // Log the entire decoded token to check its structure

      console.log(decodedToken.email);

      // Check if the decoded token contains the email property
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

  const [organName, setOrganName] = useState("Stomach");

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
  
  useEffect(() => {
    const ga = JSON.parse(localStorage.getItem('guidearray'));
    ga[5] = true;
    localStorage.setItem('guidearray',JSON.stringify(ga));
}, []);

  useEffect(() => {
    // Make POST request with email and organName in the body
    axios
        .post("https://foodpath-backend.onrender.com/api/organs/organGuides", {
          email: email,
          organName: organName,
        })
        .then((response) => {
          const { message, AIorganGuideRes, consumedFoods } = response.data;

          // Update state with the response data
          setguides_stomach_status_text(Ostatus(AIorganGuideRes.rating)); // Set the status to the message received
          // setguides_brain_consumed_text(consumedFoods.join(', '));
          setguides_stomach_consumed_text(consumedFoods); // Convert consumedFoods array to a comma-separated string
          setguides_stomach_info_text(`
        1) ${AIorganGuideRes.guide1}
        2) ${AIorganGuideRes.guide2}
        3) ${AIorganGuideRes.guide3}
        4) ${AIorganGuideRes.guide4}
        5) ${AIorganGuideRes.guide5}
        6) ${AIorganGuideRes.guide6}
        7) ${AIorganGuideRes.guide7}
        8) ${AIorganGuideRes.guide8}
        `); // Format guides in separate lines
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
  }, [email, organName]);

  return (
      <div className="guide pt-28 mb-8">
        <Header/>
        <div className="guide-content pl-12 ">
          <div className="newflex ">
          <h3 className="head3">Current Status Of The Stomach</h3>

          <br></br>
          <br></br>
          <br></br>
          <h2 className="heading">Status of the Stomach :</h2>
          <div className="containernew">
            <p className="guides_stomach_status_text">
              {guides_stomach_status_text}
            </p>
            <br></br>
            <br></br>
          
          </div>

          <h2 className="heading">Foods Consumed :</h2>
          <div className="containernew">
            <p className="guides_stomach_consumed_text">
              {guides_stomach_consumed_text}
            </p>
            <br></br>
            <br></br>
          </div>
          <h2 className="heading">Info about the Stomach:</h2>
          <div className="containernew">
            <div>
              {guides_stomach_info_text.split("\n").map((line, index) => (
                  <p className="guides_brain_info_text"> {line}</p>
              ))}
            </div>
          
          </div>
        </div>

          <section className="good-foods" style={{display: 'flex', flexWrap: 'wrap', gap: '20px'}}>
            <h3 className="head31">FOOD THAT'S GOOD FOR STOMACH</h3>
            <div className="card-container" style={{display: 'flex', flexWrap: 'wrap', gap: '20px'}}>
              <motion.article className="food-card" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                              initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
                <img
                    src={yogurt}
                    alt="Yogurt" className="food-card-image"/>
                <div className="food-card-content">
                  <h5 className="food-card-title">Yogurt</h5>
                  <p className="foodpara"><strong>Probiotics:</strong> Contains healthy bacteria that aid digestion and
                    reduce bloating.</p>
                  <p className="foodpara"><strong>Supports Gut Health:</strong> Helps balance the gut microbiome,
                    improving overall stomach function.</p>
                  <p className="foodpara"><strong>Reduces Inflammation:</strong> Can soothe stomach discomfort and
                    reduce inflammation in the digestive tract.</p>
                </div>
              </motion.article>

              <motion.article className="food-card" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                              initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
                <img
                    src={ginger}
                    alt="Ginger" className="food-card-image"/>
                <div className="food-card-content">
                  <h5 className="food-card-title">Ginger</h5>
                  <p className="foodpara"><strong>Reduces Nausea:</strong> Helps alleviate nausea and vomiting caused by
                    digestive issues.</p>
                  <p className="foodpara"><strong>Anti-Inflammatory:</strong> Reduces inflammation in the stomach and
                    promotes digestion.</p>
                  <p className="foodpara"><strong>Soothes Upset Stomach:</strong> Ginger is known for its ability to
                    calm an upset stomach and ease discomfort.</p>
                </div>
              </motion.article>

              <motion.article className="food-card" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                              initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
                <img
                    src={banna}
                    alt="Bananas" className="food-card-image"/>
                <div className="food-card-content">
                  <h5 className="food-card-title">Bananas</h5>
                  <p className="foodpara"><strong>High in Fiber:</strong> Bananas help regulate bowel movements and
                    prevent constipation.</p>
                  <p className="foodpara"><strong>Eases Acid Reflux:</strong> Bananas are alkaline, which can neutralize
                    stomach acid and reduce acid reflux.</p>
                  <p className="foodpara"><strong>Gentle on the Stomach:</strong> Easy to digest and soothing for the
                    digestive tract.</p>
                </div>
              </motion.article>

              <motion.article className="food-card" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                              initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
                <img
                    src={oats}
                    alt="Oats" className="food-card-image"/>
                <div className="food-card-content">
                  <h5 className="food-card-title">Oats</h5>
                  <p className="foodpara"><strong>Rich in Fiber:</strong> Supports healthy digestion and prevents
                    bloating.</p>
                  <p className="foodpara"><strong>Soothing Properties:</strong> Helps with acid reflux and stomach
                    discomfort.</p>
                  <p className="foodpara"><strong>Easy to Digest:</strong> Gentle on the stomach, promoting regular
                    bowel movements.</p>
                </div>
              </motion.article>

              <motion.article className="food-card" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                              initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
                <img
                    src={papaya}
                    alt="Papaya" className="food-card-image"/>
                <div className="food-card-content">
                  <h5 className="food-card-title">Papaya</h5>
                  <p className="foodpara"><strong>Contains Papain:</strong> An enzyme that aids digestion and helps
                    break down proteins.</p>
                  <p className="foodpara"><strong>Prevents Constipation:</strong> High fiber content keeps digestion
                    smooth and prevents constipation.</p>
                  <p className="foodpara"><strong>Soothes Stomach:</strong> Reduces stomach discomfort and aids in
                    digestive health.</p>
                </div>
              </motion.article>

              <motion.article className="food-card" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                              initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
                <img
                    src={fennel}
                    alt="Fennel" className="food-card-image"/>
                <div className="food-card-content">
                  <h5 className="food-card-title">Fennel</h5>
                  <p className="foodpara"><strong>Promotes Digestion:</strong> Contains compounds that relax the
                    digestive muscles and improve digestion.</p>
                  <p className="foodpara"><strong>Reduces Bloating:</strong> Effective in alleviating gas and bloating.
                  </p>
                  <p className="foodpara"><strong>Soothing Properties:</strong> Helps reduce stomach spasms and cramps.
                  </p>
                </div>
              </motion.article>

              <motion.article className="food-card" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                              initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
                <img
                    src={mint}
                    alt="Peppermint" className="food-card-image"/>
                <div className="food-card-content">
                  <h5 className="food-card-title">Peppermint</h5>
                  <p className="foodpara"><strong>Reduces Stomach Cramps:</strong> Has antispasmodic properties that
                    relax digestive muscles.</p>
                  <p className="foodpara"><strong>Prevents Bloating:</strong> Helps alleviate gas and bloating, making
                    it easier to digest food.</p>
                  <p className="foodpara"><strong>Soothes Stomach Upset:</strong> Effective in treating indigestion and
                    stomach discomfort.</p>
                </div>
              </motion.article>

              <motion.article className="food-card" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                              initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
                <img
                    src={mile}
                    alt="Chamomile" className="food-card-image"/>
                <div className="food-card-content">
                  <h5 className="food-card-title">Chamomile</h5>
                  <p className="foodpara"><strong>Reduces Digestive Discomfort:</strong> Contains compounds that help
                    relieve stomach cramps and bloating.</p>
                  <p className="foodpara"><strong>Anti-Inflammatory:</strong> Helps reduce inflammation in the digestive
                    tract.</p>
                  <p className="foodpara"><strong>Calms the Stomach:</strong> Effective for relieving symptoms of
                    indigestion and nausea.</p>
                </div>
              </motion.article>

              <motion.article className="food-card" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                              initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
                <img
                    src={rice}
                    alt="Rice" className="food-card-image"/>
                <div className="food-card-content">
                  <h5 className="food-card-title">White Rice</h5>
                  <p className="foodpara"><strong>Bland Diet:</strong> Easy to digest and does not irritate the stomach
                    lining.</p>
                  <p className="foodpara"><strong>Absorbs Stomach Acid:</strong> Helps reduce symptoms of acid reflux
                    and diarrhea.</p>
                  <p className="foodpara"><strong>Promotes Regularity:</strong> Provides easy-to-digest carbohydrates,
                    supporting healthy digestion.</p>
                </div>
              </motion.article>

              <motion.article className="food-card" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                              initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
                <img
                    src={sauce}
                    alt="Applesauce" className="food-card-image"/>
                <div className="food-card-content">
                  <h5 className="food-card-title">Applesauce</h5>
                  <p className="foodpara"><strong>Easy on the Stomach:</strong> A gentle option for those with digestive
                    issues, easily digestible.</p>
                  <p className="foodpara"><strong>Low in Fiber:</strong> Cooked apples are low in fiber, making them
                    easier to digest.</p>
                  <p className="foodpara"><strong>Relieves Diarrhea:</strong> Helps to firm up stool, reducing diarrhea.
                  </p>
                </div>

              </motion.article>
            </div>
          </section>

          <section className="bad-foods" style={{display: 'flex', flexWrap: 'wrap', gap: '20px'}}>
            <h3 className="head31 pt-8 ml-80">FOOD THAT'S BAD FOR STOMACH</h3>
            <div className="card-container" style={{display: 'flex', flexWrap: 'wrap', gap: '20px'}}>
              <motion.article className="food-card" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                              initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
                <img
                    src={spicy}
                    alt="Spicy Foods" className="food-card-image"/>
                <div className="food-card-content">
                  <h5 className="food-card-title">Spicy Foods</h5>
                  <p className="foodpara"><strong>Triggers Acid Reflux:</strong> Spicy foods can irritate the stomach
                    lining and cause heartburn.</p>
                  <p className="foodpara"><strong>Increases Stomach Acid:</strong> May lead to excessive production of
                    stomach acid, worsening digestive issues.</p>
                  <p className="foodpara"><strong>Causes Stomach Discomfort:</strong> Can cause bloating, gas, and
                    discomfort for sensitive individuals.</p>
                </div>
              </motion.article>

              <motion.article className="food-card" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                              initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
                <img
                    src={fried}
                    alt="Fried Foods" className="food-card-image"/>
                <div className="food-card-content">
                  <h5 className="food-card-title">Fried Foods</h5>
                  <p className="foodpara"><strong>High in Fat:</strong> Fried foods can slow down digestion, causing
                    bloating and indigestion.</p>
                  <p className="foodpara"><strong>Causes Acid Reflux:</strong> The high-fat content can trigger
                    heartburn and acid reflux.</p>
                  <p className="foodpara"><strong>Hard to Digest:</strong> Can be difficult for the stomach to process,
                    leading to discomfort.</p>
                </div>
              </motion.article>

              <motion.article className="food-card" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                              initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
                <img
                    src={drinks}
                    alt="Carbonated Drinks" className="food-card-image"/>
                <div className="food-card-content">
                  <h5 className="food-card-title">Carbonated Drinks</h5>
                  <p className="foodpara"><strong>Causes Bloating:</strong> Carbonation can lead to excess gas and
                    bloating in the stomach.</p>
                  <p className="foodpara"><strong>Triggers Acid Reflux:</strong> The bubbles can increase pressure in
                    the stomach, worsening reflux.</p>
                  <p className="foodpara"><strong>High in Sugar:</strong> Can upset the stomach and contribute to poor
                    digestion.</p>
                </div>
              </motion.article>

              <motion.article className="food-card" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                              initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
                <img
                    src={orangeImage}
                    alt="Citrus Fruits" className="food-card-image"/>
                <div className="food-card-content">
                  <h5 className="food-card-title">Citrus Fruits</h5>
                  <p className="foodpara"><strong>High Acidity:</strong> Citrus fruits like oranges and lemons can
                    irritate the stomach lining.</p>
                  <p className="foodpara"><strong>Triggers Heartburn:</strong> Their acidity can increase stomach acid
                    and cause acid reflux.</p>
                  <p className="foodpara"><strong>May Cause Discomfort:</strong> Excessive consumption can lead to
                    stomach discomfort and irritation.</p>
                </div>
              </motion.article>

              <motion.article className="food-card" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                              initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
                <img
                    src={chocolate}
                    alt="Chocolate" className="food-card-image"/>
                <div className="food-card-content">
                  <h5 className="food-card-title">Chocolate</h5>
                  <p className="foodpara"><strong>Relaxes Esophageal Sphincter:</strong> Can cause acid to escape back
                    into the esophagus, leading to reflux.</p>
                  <p className="foodpara"><strong>High in Fat:</strong> The fat content in chocolate can slow digestion
                    and cause discomfort.</p>
                  <p className="foodpara"><strong>Increases Stomach Acid:</strong> Can lead to indigestion and
                    heartburn.</p>
                </div>
              </motion.article>

              <motion.article className="food-card" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                              initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
                <img
                    src={meat}
                    alt="Processed Meats" className="food-card-image"/>
                <div className="food-card-content">
                  <h5 className="food-card-title">Processed Meats</h5>
                  <p className="foodpara"><strong>High in Fat:</strong> Can slow digestion and cause bloating and
                    discomfort.</p>
                  <p className="foodpara"><strong>Contains Additives:</strong> Additives and preservatives can irritate
                    the stomach lining.</p>
                  <p className="foodpara"><strong>Triggers Acid Reflux:</strong> Fatty and salty processed meats can
                    increase the risk of reflux.</p>
                </div>
              </motion.article>

              <motion.article className="food-card" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                              initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
                <img
                    src={alcohol}
                    alt="Alcohol" className="food-card-image"/>
                <div className="food-card-content">
                  <h5 className="food-card-title">Alcohol</h5>
                  <p className="foodpara"><strong>Irritates Stomach Lining:</strong> Can cause inflammation and damage
                    to the stomach lining.</p>
                  <p className="foodpara"><strong>Triggers Acid Reflux:</strong> Alcohol can relax the lower esophageal
                    sphincter, leading to heartburn.</p>
                  <p className="foodpara"><strong>Increases Stomach Acid:</strong> Excessive consumption can lead to
                    gastritis and ulcers.</p>
                </div>
              </motion.article>

              <motion.article className="food-card" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                              initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
                <img
                    src={onion}
                    alt="Raw Onions" className="food-card-image"/>
                <div className="food-card-content">
                  <h5 className="food-card-title">Raw Onions</h5>
                  <p className="foodpara"><strong>Causes Gas:</strong> Raw onions can lead to excess gas and bloating.
                  </p>
                  <p className="foodpara"><strong>Triggers Acid Reflux:</strong> Can relax the lower esophageal
                    sphincter and cause reflux symptoms.</p>
                  <p className="foodpara"><strong>Hard to Digest:</strong> Raw onions are difficult to break down,
                    leading to discomfort.</p>
                </div>
              </motion.article>

              <motion.article className="food-card" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                              initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
                <img
                    src={tomato}
                    alt="Tomato-Based Foods" className="food-card-image"/>
                <div className="food-card-content">
                  <h5 className="food-card-title">Tomato-Based Foods</h5>
                  <p className="foodpara"><strong>High Acidity:</strong> Can increase stomach acid and cause heartburn.
                  </p>
                  <p className="foodpara"><strong>Triggers Acid Reflux:</strong> Tomato sauces and juices can worsen
                    reflux symptoms.</p>
                  <p className="foodpara"><strong>May Cause Irritation:</strong> Can irritate the stomach lining,
                    leading to discomfort.</p>
                </div>
              </motion.article>

              <motion.article className="food-card" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                              initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
                <img
                    src={dairy}
                    alt="Dairy Products" className="food-card-image"/>
                <div className="food-card-content">
                  <h5 className="food-card-title">Dairy Products</h5>
                  <p className="foodpara"><strong>Hard to Digest:</strong> Full-fat dairy can be difficult for the
                    stomach to break down.</p>
                  <p className="foodpara"><strong>Triggers Bloating:</strong> For those who are lactose intolerant,
                    dairy can cause gas and bloating.</p>
                  <p className="foodpara"><strong>Increases Discomfort:</strong> Dairy products can worsen symptoms of
                    indigestion.</p>
                </div>
              </motion.article>
</div>
          </section>
        </div>
      </div>
);
}

export default Stomach;
