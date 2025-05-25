import "./Guide.css";
import axios from "axios";
import React, { useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useEffect } from "react";
import Header from "../homepagenew/components/Header";
import { motion } from "framer-motion";



import fiber from '../foodimages/cabbage.jpg'
import feremented from '../foodimages/fermented.jpg'
import spinach from '../foodimages/leafygreens.jpg';
import berries from '../foodimages/berries.jpg';
import yogurt from '../foodimages/yogurt.jpg';
import banna from  '../foodimages/bannana.jpg';
import chia from '../foodimages/fennel.jpg';
import aspar from '../foodimages/applesauce.jpg';
import oats from '../foodimages/oats.jpg';
import ginger from '../foodimages/turmeric.jpg';
import fried from '../foodimages/friedfood.jpg';
import alcohol from '../foodimages/alcohol.jpg'
import drink from '../foodimages/drink.jpg';
import dairy from '../foodimages/dairy.jpg';
import redmeat from '../foodimages/redmeat.jpg';
import orangeImage from '../foodimages/oranges.jpg';
import pick from '../foodimages/pick.jpg';
import spicy from '../foodimages/spicy.jpg';
import sweet from '../foodimages/sweetener.jpg';
import  snacks from '../foodimages/snacks.jpg';

function Intestine() {
  const [guides_intestine_status_text, setguides_intestine_status_text] =
      useState("Analysing...");
  const [guides_intestine_consumed_text, setguides_intestine_consumed_text] =
      useState("Getting...");
  const [guides_intestine_info_text, setguides_intestine_info_text] =
      useState("Analysing...");

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

  const [organName, setOrganName] = useState("Intestine");

  function Ostatus(a) {
    switch (a) {
      case 0:
        return "DEAD";
      case 1:
        return "Healthy";
      case 2:
        return "Very Healthy";
      case 3:
        return "UnHealthy";
      case 4:
        return "Very UnHealthy";
      default:
        return "Normal";
    }
  }
  
  useEffect(() => {
    const ga = JSON.parse(localStorage.getItem('guidearray'));
    ga[2] = true;
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
          setguides_intestine_status_text(Ostatus(AIorganGuideRes.rating)); // Set the status to the message received
          // setguides_brain_consumed_text(consumedFoods.join(', '));
          setguides_intestine_consumed_text(consumedFoods); // Convert consumedFoods array to a comma-separated string
          setguides_intestine_info_text(`
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
          <h3 className="head3">Current Status Of The Intestine</h3>

          <br></br>
          <br></br>
          <br></br>

          <h2 className="heading">Status of the Intestine :</h2>
          <div class="containernew">
            <p className="guides_intestine_status_text">
              {guides_intestine_status_text}
            </p>
            <br></br>
            <br></br>
         
          </div>

          <h2 className="heading">Foods Consumed :</h2>
          <div class="containernew">
            <p className="guides_intestine_consumed_text">
              {guides_intestine_consumed_text}
            </p>
            <br></br>
            <br></br>
          </div>
          <h2 className="heading">Info about the Intestine :</h2>
          <div class="containernew">
            <div>
              {guides_intestine_info_text.split("\n").map((line, index) => (
                  <p className="guides_heart_info_text"> {line}</p>
              ))}
            </div>
          
          </div>
        </div>

          <section className="good-foods">
            <h3 className="head31">FOOD THAT'S GOOD FOR INTESTINE</h3>

            <div className="card-container four-elements" style={{display: 'flex', flexWrap: 'wrap', gap: '20px'}}>
              <motion.article className="food-card" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                              initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
                <img
                    src={fiber}
                    alt="High-Fiber Foods" className="food-card-image"/>
                <div className="food-card-content">
                  <h5 className="food-card-title">High-Fiber Foods (Whole Grains, Vegetables)</h5>
                  <p className="foodpara"><strong>Promotes Regularity:</strong> Fiber helps maintain smooth digestion
                    and prevents constipation.</p>
                </div>
              </motion.article>

              <motion.article className="food-card" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                              initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
                <img
                    src={feremented}
                    alt="Fermented Foods" className="food-card-image"/>
                <div className="food-card-content">
                  <h5 className="food-card-title">Fermented Foods (Kimchi, Sauerkraut)</h5>
                  <p className="foodpara"><strong>Rich in Probiotics:</strong> Fermented foods contain live bacteria
                    that improve gut health by balancing the intestinal microbiome.</p>
                </div>
              </motion.article>

              <motion.article className="food-card" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                              initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
                <img
                    src={spinach}
                    alt="Leafy Greens" className="food-card-image"/>
                <div className="food-card-content">
                  <h5 className="food-card-title">Leafy Greens (Spinach, Kale)</h5>
                  <p className="foodpara"><strong>Rich in Fiber:</strong> Leafy greens help promote the growth of
                    healthy gut bacteria, supporting digestion.</p>
                </div>
              </motion.article>

              <motion.article className="food-card" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                              initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
                <img
                    src={berries}
                    alt="Berries" className="food-card-image"/>
                <div className="food-card-content">
                  <h5 className="food-card-title">Berries (Blueberries, Raspberries)</h5>
                  <p className="foodpara"><strong>Rich in Antioxidants:</strong> Berries help protect the gut lining and
                    reduce inflammation.</p>
                </div>
              </motion.article>

              <motion.article className="food-card" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                              initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
                <img
                    src={yogurt}
                    alt="Yogurt" className="food-card-image"/>
                <div className="food-card-content">
                  <h5 className="food-card-title">Yogurt</h5>
                  <p className="foodpara"><strong>Contains Probiotics:</strong> Yogurt with live cultures can help
                    increase good bacteria in the gut.</p>
                </div>
              </motion.article>

              <motion.article className="food-card" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                              initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
                <img
                    src={banna}
                    alt="Bananas" className="food-card-image"/>
                <div className="food-card-content">
                  <h5 className="food-card-title">Bananas</h5>
                  <p className="foodpara"><strong>Natural Prebiotic:</strong> Bananas contain fibers that feed the good
                    bacteria in the intestines.</p>
                </div>
              </motion.article>

              <motion.article className="food-card" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                              initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
                <img
                    src={chia}
                    alt="Chia Seeds" className="food-card-image"/>
                <div className="food-card-content">
                  <h5 className="food-card-title">Chia Seeds</h5>
                  <p className="foodpara"><strong>High in Fiber:</strong> Chia seeds promote regular bowel movements and
                    support healthy digestion.</p>
                </div>
              </motion.article>

              <motion.article className="food-card" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                              initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
                <img
                    src={oats}
                    alt="Oats" className="food-card-image"/>
                <div className="food-card-content">
                  <h5 className="food-card-title">Oats</h5>
                  <p className="foodpara"><strong>Rich in Soluble Fiber:</strong> Oats help keep the digestive tract
                    healthy by adding bulk to stool and promoting regularity.</p>
                </div>
              </motion.article>

              <motion.article className="food-card" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                              initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
                <img
                    src={ginger}
                    alt="Ginger" className="food-card-image"/>
                <div className="food-card-content">
                  <h5 className="food-card-title">Ginger</h5>
                  <p className="foodpara"><strong>Improves Digestion:</strong> Ginger helps stimulate the digestive
                    enzymes, aiding in the digestion of food in the intestines.</p>
                </div>
              </motion.article>

              <motion.article className="food-card" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                              initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
                <img
                    src={aspar}
                    alt="Asparagus" className="food-card-image"/>
                <div className="food-card-content">
                  <h5 className="food-card-title">Asparagus</h5>
                  <p className="foodpara"><strong>Natural Prebiotic:</strong> Asparagus contains prebiotic fiber that
                    helps stimulate the growth of healthy gut bacteria.</p>
                </div>
              </motion.article>

            </div>
          </section>

          <section className="bad-foods">
            <h3 className="head31 pt-8">FOOD THAT'S BAD FOR INTESTINE</h3>

            <div className="card-container four-elements" style={{display: 'flex', flexWrap: 'wrap', gap: '20px'}}>
              <motion.article className="food-card" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                              initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
                <img
                    src={fried}
                    alt="Fried Foods" className="food-card-image"/>
                <div className="food-card-content">
                  <h5 className="food-card-title">Fried Foods (French Fries, Onion Rings)</h5>
                  <p className="foodpara"><strong>Hard to Digest:</strong> Fried foods are high in fat, making them
                    difficult for the intestines to process.</p>
                  <p className="foodpara"><strong>Linked to Constipation:</strong> The high fat content can slow down
                    intestinal transit, causing constipation.</p>
                  <p className="foodpara"><strong>Disrupts Gut Flora:</strong> Can negatively impact the balance of good
                    gut bacteria.</p>
                </div>
              </motion.article>

              <motion.article className="food-card" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                              initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
                <img
                    src={alcohol}
                    alt="Alcohol" className="food-card-image"/>
                <div className="food-card-content">
                  <h5 className="food-card-title">Alcohol</h5>
                  <p className="foodpara"><strong>Disrupts Gut Lining:</strong> Alcohol can irritate the intestinal
                    lining and lead to inflammation.</p>
                  <p className="foodpara"><strong>Decreases Nutrient Absorption:</strong> Reduces the intestine's
                    ability to absorb essential nutrients.</p>
                  <p className="foodpara"><strong>Unbalances Gut Microbiota:</strong> Can kill beneficial bacteria and
                    promote the growth of harmful bacteria.</p>
                </div>
              </motion.article>

              <motion.article className="food-card" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                              initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
                <img
                    src={drink}
                    alt="Sugary Drinks" className="food-card-image"/>
                <div className="food-card-content">
                  <h5 className="food-card-title">Sugary Drinks (Soda, Sweetened Juices)</h5>
                  <p className="foodpara"><strong>Feeds Harmful Bacteria:</strong> High sugar content can feed harmful
                    bacteria, disrupting the gut balance.</p>
                  <p className="foodpara"><strong>Leads to Bloating:</strong> Excess sugar can lead to gas and bloating,
                    causing discomfort in the intestines.</p>
                  <p className="foodpara"><strong>Linked to Inflammation:</strong> Promotes intestinal inflammation,
                    which may lead to irritable bowel syndrome (IBS).</p>
                </div>
              </motion.article>

              <motion.article className="food-card" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                              initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
                <img
                    src={dairy}
                    alt="Dairy Products" className="food-card-image"/>
                <div className="food-card-content">
                  <h5 className="food-card-title">Dairy Products (Milk, Cheese)</h5>
                  <p className="foodpara"><strong>Contains Lactose:</strong> Many people are lactose intolerant, which
                    can cause gas, bloating, and diarrhea.</p>
                  <p className="foodpara"><strong>Triggers Inflammation:</strong> Can lead to inflammation in the
                    intestines, especially in those with lactose intolerance.</p>
                  <p className="foodpara"><strong>Constipation Risk:</strong> Full-fat dairy products can slow down
                    digestion and cause constipation.</p>
                </div>
              </motion.article>

              <motion.article className="food-card" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                              initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
                <img
                    src={redmeat}
                    alt="Red Meat" className="food-card-image"/>
                <div className="food-card-content">
                  <h5 className="food-card-title">Red Meat (Beef, Pork)</h5>
                  <p className="foodpara"><strong>Slow to Digest:</strong> Red meat takes a long time to digest, which
                    can lead to constipation and discomfort.</p>
                  <p className="foodpara"><strong>Increases TMAO Levels:</strong> Promotes the production of TMAO, a
                    compound linked to inflammation and gut issues.</p>
                  <p className="foodpara"><strong>Disrupts Gut Flora:</strong> High intake can alter the balance of gut
                    bacteria, promoting harmful strains.</p>
                </div>
              </motion.article>

              <motion.article className="food-card" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                              initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
                <img
                    src={orangeImage}
                    alt="Citrus Fruits" className="food-card-image"/>
                <div className="food-card-content">
                  <h5 className="food-card-title">Citrus Fruits (Oranges, Grapefruits)</h5>
                  <p className="foodpara"><strong>High Acidity:</strong> Can irritate the intestinal lining and cause
                    discomfort, especially in those with sensitive stomachs.</p>
                  <p className="foodpara"><strong>May Cause Diarrhea:</strong> The high fiber content can lead to
                    diarrhea in some individuals.</p>
                  <p className="foodpara"><strong>Worsens Acid Reflux:</strong> Can exacerbate acid reflux, leading to
                    discomfort in the intestines.</p>
                </div>
              </motion.article>

              <motion.article className="food-card" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                              initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
                <img
                    src={pick}
                    alt="Pickled Foods" className="food-card-image"/>
                <div className="food-card-content">
                  <h5 className="food-card-title">Pickled Foods (Pickles, Sauerkraut)</h5>
                  <p className="foodpara"><strong>High in Sodium:</strong> Excessive salt can irritate the intestines
                    and lead to dehydration.</p>
                  <p className="foodpara"><strong>Contains Vinegar:</strong> The vinegar used in pickling can irritate
                    the digestive tract, leading to discomfort.</p>
                  <p className="foodpara"><strong>Triggers Acid Reflux:</strong> Can worsen acid reflux symptoms,
                    causing discomfort in the intestines.</p>
                </div>
              </motion.article>

              <motion.article className="food-card" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                              initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
                <img
                    src={spicy}
                    alt="Spicy Foods" className="food-card-image"/>
                <div className="food-card-content">
                  <h5 className="food-card-title">Spicy Foods (Hot Peppers, Chili)</h5>
                  <p className="foodpara"><strong>Increases Gut Sensitivity:</strong> Spicy foods can irritate the
                    intestinal lining, leading to discomfort and pain.</p>
                  <p className="foodpara"><strong>Triggers Diarrhea:</strong> Capsaicin in spicy foods can cause
                    diarrhea, especially in sensitive individuals.</p>
                  <p className="foodpara"><strong>Linked to Acid Reflux:</strong> Can exacerbate acid reflux symptoms,
                    causing discomfort in the intestines.</p>
                </div>
              </motion.article>

              <motion.article className="food-card" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                              initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
                <img
                    src={sweet}
                    alt="Artificial Sweeteners" className="food-card-image"/>
                <div className="food-card-content">
                  <h5 className="food-card-title">Artificial Sweeteners (Aspartame, Sucralose)</h5>
                  <p className="foodpara"><strong>Disrupts Gut Flora:</strong> Artificial sweeteners can disrupt the
                    balance of good gut bacteria, leading to digestive issues.</p>
                  <p className="foodpara"><strong>Linked to Gas and Bloating:</strong> Can lead to excess gas
                    production, causing discomfort in the intestines.</p>
                  <p className="foodpara"><strong>Causes Diarrhea:</strong> Some artificial sweeteners have a laxative
                    effect, leading to diarrhea.</p>
                </div>
              </motion.article>

              <motion.article className="food-card" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                              initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
                <img
                    src={snacks}
                    alt="Processed Snacks" className="food-card-image"/>
                <div className="food-card-content">
                  <h5 className="food-card-title">Processed Snacks (Chips, Crackers)</h5>
                  <p className="foodpara"><strong>High in Unhealthy Fats:</strong> Processed snacks contain trans fats
                    that are difficult for the intestines to digest.</p>
                  <p className="foodpara"><strong>Low in Fiber:</strong> Lack of fiber can slow down digestion, leading
                    to constipation.</p>
                  <p className="foodpara"><strong>Contains Additives:</strong> Preservatives and additives can irritate
                    the intestinal lining and disrupt gut health.</p>
                </div>
              </motion.article>

            </div>
          </section>
        </div>
      </div>
  );
}

export default Intestine;
