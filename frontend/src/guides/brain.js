import './Guide.css';
import axios from "axios";
import React, { useState, useEffect } from 'react';
import { jwtDecode } from "jwt-decode";
import { motion } from "framer-motion";
import orangeImage from '../foodimages/oranges.jpg';
import eggs from '../foodimages/eggs.jpg';
import berries from '../foodimages/berries.jpg';
import nutss from  '../foodimages/nuts.jpg';
import chocolate from '../foodimages/chocolate.jpg';
import spinach from '../foodimages/leafygreens.jpg';
import turmeric from '../foodimages/turmeric.jpg';
import avacado from '../foodimages/avacados.png';
import fried from '../foodimages/friedfood.jpg';
import alcohol from '../foodimages/alcohol.jpg';
import candy from '../foodimages/sugary.jpg';
import meat from '../foodimages/processed.jpg';
import refined from '../foodimages/processed.jpg';
import sweet from '../foodimages/sweetener.jpg';
import trans from '../foodimages/trans.png';
import canned from '../foodimages/cann.jpg';

import Header from '../homepagenew/components/Header';


function Brain() {
    const [guides_brain_status_text, setguides_brain_status_text] = useState("Analysing...");
    const [guides_brain_consumed_text, setguides_brain_consumed_text] = useState("Getting...");
    const [guides_brain_info_text, setguides_brain_info_text] = useState("Analysing...");
    const [isSignIn, setSingIn] = useState(false);
    const [organName, setOrganName] = useState("Brain");

    const token = localStorage.getItem("jwtToken");
    let email;

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
        ga[0] = true;
        localStorage.setItem('guidearray',JSON.stringify(ga));
    }, []);

    useEffect(() => {
        if (token) {
            try {
                const decodedToken = jwtDecode(token);
                if (decodedToken && decodedToken.email) {
                    email = decodedToken.email;
                }
            } catch (error) {
                console.error("Failed to decode token:", error);
            }
        }
    }, [token]);

    useEffect(() => {
        axios.post('https://foodpath-backend.onrender.com/api/organs/organGuides', {
            email: email,
            organName: organName,
        })
            .then(response => {
                const { AIorganGuideRes, consumedFoods } = response.data;
                setguides_brain_status_text(Ostatus(AIorganGuideRes.rating));
                setguides_brain_consumed_text(consumedFoods);
                setguides_brain_info_text(`
        1) ${AIorganGuideRes.guide1}
        2) ${AIorganGuideRes.guide2}
        3) ${AIorganGuideRes.guide3}
        4) ${AIorganGuideRes.guide4}
        5) ${AIorganGuideRes.guide5}
        6) ${AIorganGuideRes.guide6}
        7) ${AIorganGuideRes.guide7}
        8) ${AIorganGuideRes.guide8}
        `);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [email, organName]);

    return (
        <div className='guide-brain pt-28 mb-8 '>
            <Header />
            <div className="guide-content pl-12 ">
                <div className='newflex '>
                    <h3 className='head3'>Current Status Of The Brain</h3>
                    <br></br>
                    <br></br>
                    <br></br>

                    <h2 className='heading'>Status of the Brain :</h2>
                    <div className="containernew">
                        <p className='guides_brain_status_text'>{guides_brain_status_text}</p>
                    </div>
                    <br></br>
                    <br></br>
                    <img
                          src="https://th.bing.com/th/id/R.3cd0ee5e418250f2d18a186841ce60cc?rik=vJb2qOAZkQJ8Zw&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f2016%2f04%2fBrain-PNG-Image.png&ehk=cIrtlwwNSqpbI9itUL0CMD3%2b0C59yTt37Wj8jOauEAU%3d&risl=&pid=ImgRaw&r=0"
                            alt='.'
                          className="food-image-i"/>
                    <h2 className='heading'>Foods Consumed :</h2>
                    <div className="containernew">
                        <p className='guides_brain_consumed_text'>{guides_brain_consumed_text}</p>
                    </div>
                    <br></br>
                    <br></br>

                    <h2 className='heading'>Info about the Brain :</h2>
                    <div className="containernew">
                        <div>
                            {guides_brain_info_text.split('\n').map((line, index) => (
                                <p className='guides_brain_info_text' key={index}>{line}</p>
                            ))}
                        </div>
                        <br></br>
                        <br></br>

                      
                    </div>
                </div>

                {/* Good Foods Section */}
                <section className="good-foods">
                    <h3 className='head31'>FOOD THAT'S GOOD FOR BRAIN</h3>
                    <div className="card-container">
                        {/* Good Foods Cards */}
                        <motion.article className="food-card"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}>
                            <img src = {orangeImage}
                                 alt='Oranges'
                                 className="food-card-image" />
                            <div className="food-card-content">
                                <h5 className='food-card-title'>Oranges</h5>
                                <p className='foodpara'><strong>Rich in Vitamin C:</strong> Vitamin C is a powerful antioxidant that helps prevent mental decline by protecting brain cells from damage by free radicals.</p>
                                <p className='foodpara'><strong>Supports Overall Brain Function:</strong> It helps with the synthesis of neurotransmitters like dopamine and serotonin, which play a role in mood regulation and cognitive function.</p>
                            </div>
                        </motion.article>

                        <motion.article className="food-card"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}>
                            <img src={eggs}
                                 alt='Eggs'
                                 className="food-card-image" />
                            <div className="food-card-content">
                                <h5 className='food-card-title'>Eggs</h5>
                                <p className='foodpara'><strong>Choline for Memory:</strong> Choline is used to produce acetylcholine, a neurotransmitter that plays a role in memory and mood regulation.</p>
                                <p className='foodpara'><strong>B Vitamins:</strong> Eggs are rich in B6, B12, and folate, which have been linked to slowing mental decline and preventing brain shrinkage.</p>
                                <p className='foodpara'><strong>Enhances Mood:</strong> Folate and B vitamins also play a role in reducing the risk of depression and cognitive impairment.</p>
                            </div>
                        </motion.article>

                        <motion.article className="food-card"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}>
                            <img src={berries}
                                 alt='Blueberries'
                                 className="food-card-image" />
                            <div className="food-card-content">
                                <h5 className='food-card-title'>Blueberries</h5>
                                <p className='foodpara'><strong>Rich in Antioxidants:</strong> Blueberries are packed with antioxidants that help fight free radicals and prevent oxidative stress in the brain.</p>
                                <p className='foodpara'><strong>Enhances Memory:</strong> Studies show that blueberries may improve memory and delay age-related cognitive decline.</p>
                            </div>
                        </motion.article>

                        <motion.article className="food-card"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}>
                            <img src={nutss}
                                 alt='Walnuts'
                                 className="food-card-image" />
                            <div className="food-card-content">
                                <h5 className='food-card-title'>Walnuts</h5>
                                <p className='foodpara'><strong>High in Omega-3:</strong> Walnuts are rich in omega-3 fatty acids, which support brain health and cognitive function.</p>
                                <p className='foodpara'><strong>Improves Brain Function:</strong> Regular walnut consumption can improve memory and concentration while protecting against age-related cognitive decline.</p>
                            </div>
                        </motion.article>

                        <motion.article className="food-card"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}>
                            <img src={chocolate}
                                 alt='Dark Chocolate'
                                 className="food-card-image" />
                            <div className="food-card-content">
                                <h5 className='food-card-title'>Dark Chocolate</h5>
                                <p className='foodpara'><strong>Rich in Flavonoids:</strong> Dark chocolate is high in flavonoids, which boost brain plasticity, improve memory, and enhance cognitive function.</p>
                                <p className='foodpara'><strong>Improves Blood Flow to the Brain:</strong> The flavonoids in dark chocolate improve blood flow to the brain, increasing brain function and mental clarity.</p>
                            </div>
                        </motion.article>

                        <motion.article className="food-card"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}>
                            <img src={spinach}
                                 alt='Spinach'
                                 className="food-card-image" />
                            <div className="food-card-content">
                                <h5 className='food-card-title'>Spinach</h5>
                                <p className='foodpara'><strong>High in Vitamin K:</strong> Spinach is rich in vitamin K, essential for synthesizing sphingolipids, a type of fat found in brain cells.</p>
                                <p className='foodpara'><strong>Supports Brain Function:</strong> Nutrients in spinach have been shown to improve memory and cognitive function, especially in older adults.</p>
                            </div>
                        </motion.article>

                        <motion.article className="food-card"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}>
                            <img src={turmeric}
                                 alt='Turmeric'
                                 className="food-card-image" />
                            <div className="food-card-content">
                                <h5 className='food-card-title'>Turmeric</h5>
                                <p className='foodpara'><strong>Anti-inflammatory Properties:</strong> Curcumin, the active compound in turmeric, reduces inflammation in the brain and has neuroprotective effects.</p>
                                <p className='foodpara'><strong>Boosts Mood:</strong> Turmeric helps increase brain-derived neurotrophic factor (BDNF) levels, improving mood and cognitive function.</p>
                            </div>
                        </motion.article>

                        <motion.article className="food-card"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}>
                            <img src={avacado}
                                 alt='Avocados'
                                 className="food-card-image" />
                            <div className="food-card-content">
                                <h5 className='food-card-title'>Avocados</h5>
                                <p className='foodpara'><strong>Rich in Healthy Fats:</strong> Avocados contain healthy fats that support brain function and improve memory.</p>
                                <p className='foodpara'><strong>Boosts Cognitive Function:</strong> The monounsaturated fats in avocados help improve overall brain function by increasing blood flow to the brain.</p>
                            </div>
                        </motion.article>
                    </div>
                </section>

                {/* Bad Foods Section */}
                <section className="bad-foods">
                    <h4 className="head31 pt-8">FOOD THAT'S BAD FOR BRAIN</h4>
                    <div className="card-container">
                        {/* Bad Foods Cards */}
                        <motion.article className="food-card"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}>
                            <img src={fried}
                                 alt='Fried Foods'
                                 className="food-card-image" />
                            <div className="food-card-content">
                                <h5 className='food-card-title'>Fried Foods</h5>
                                <p className='foodpara'><strong>Lowers Learning Ability:</strong> Diets high in fried foods have been shown to impair learning and memory over time.</p>
                                <p className='foodpara'><strong>Increases Risk of Dementia:</strong> Regular consumption of fried foods is associated with an increased risk of dementia and cognitive decline.</p>
                                <p className='foodpara'><strong>Causes Inflammation:</strong> The unhealthy fats in fried foods contribute to inflammation in the brain, affecting cognitive function.</p>
                            </div>
                        </motion.article>
                        {/* Alcohol Card */}
                        <motion.article className="food-card"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}>
                            <img src={alcohol}
                                 alt='Alcohol'
                                 className="food-card-image" />
                            <div className="food-card-content">
                                <h5 className='food-card-title'>Alcohol</h5>
                                <p className='foodpara'><strong>Impairs Cognitive Function:</strong> Excessive alcohol consumption can impair memory, decision-making, and motor skills in both the short and long term.</p>
                                <p className='foodpara'><strong>Linked to Brain Shrinkage:</strong> Chronic alcohol use has been associated with a decrease in brain volume, especially in regions responsible for memory and learning.</p>
                                <p className='foodpara'><strong>Increases Risk of Dementia:</strong> Heavy drinking significantly increases the risk of developing dementia and other cognitive impairments.</p>
                            </div>
                        </motion.article>

                        {/* Sugary Snacks Card */}
                        <motion.article className="food-card"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}>
                            <img src={candy}
                                 alt='Sugary Snacks'
                                 className="food-card-image" />
                            <div className="food-card-content">
                                <h5 className='food-card-title'>Sugary Snacks (Candy, Cookies, Soda)</h5>
                                <p className='foodpara'><strong>Increases Inflammation:</strong> High sugar intake leads to inflammation in the brain, which can impair memory and cognitive function.</p>
                                <p className='foodpara'><strong>Reduces Brain Plasticity:</strong> Diets high in sugar have been shown to reduce brain plasticity, which is essential for learning and memory.</p>
                                <p className='foodpara'><strong>Impairs Memory:</strong> High sugar consumption can damage the hippocampus, the part of the brain involved in memory and learning.</p>
                            </div>
                        </motion.article>

                        {/* Processed Meats Card */}
                        <motion.article className="food-card"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}>
                            <img src={meat}
                                 alt='Processed Meats'
                                 className="food-card-image" />
                            <div className="food-card-content">
                                <h5 className='food-card-title'>Processed Meats (Bacon, Sausages, Hot Dogs)</h5>
                                <p className='foodpara'><strong>High in Saturated Fats:</strong> Processed meats contain unhealthy fats that contribute to inflammation in the brain, which impairs cognitive function.</p>
                                <p className='foodpara'><strong>Increases Risk of Alzheimer's:</strong> Studies have linked high consumption of processed meats to an increased risk of Alzheimer's disease.</p>
                                <p className='foodpara'><strong>Contains Nitrates:</strong> The nitrates used to preserve processed meats can produce harmful compounds that damage brain cells over time.</p>
                            </div>
                        </motion.article>

                        {/* Refined Carbohydrates Card */}
                        <motion.article className="food-card"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}>
                            <img src={refined}
                                 alt='Refined Carbohydrates'
                                 className="food-card-image" />
                            <div className="food-card-content">
                                <h5 className='food-card-title'>Refined Carbohydrates (White Bread, Pastries, Pizza)</h5>
                                <p className='foodpara'><strong>Causes Blood Sugar Spikes:</strong> Refined carbs cause rapid spikes in blood sugar levels, leading to inflammation in the brain.</p>
                                <p className='foodpara'><strong>Linked to Cognitive Decline:</strong> Diets high in refined carbs have been linked to a higher risk of cognitive decline and dementia in later life.</p>
                                <p className='foodpara'><strong>Increases Risk of Obesity:</strong> High consumption of refined carbs contributes to weight gain, which has been associated with reduced brain function.</p>
                            </div>
                        </motion.article>

                        {/* Artificial Sweeteners Card */}
                        <motion.article className="food-card"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}>
                            <img src={sweet}
                                 alt='Artificial Sweeteners'
                                 className="food-card-image" />
                            <div className="food-card-content">
                                <h5 className='food-card-title'>Artificial Sweeteners (Aspartame, Sucralose)</h5>
                                <p className='foodpara'><strong>Interferes with Brain Signals:</strong> Some studies suggest that artificial sweeteners may interfere with neurotransmitter signaling in the brain, affecting mood and cognition.</p>
                                <p className='foodpara'><strong>Linked to Memory Issues:</strong> Long-term use of artificial sweeteners may be linked to memory deficits and an increased risk of neurodegenerative diseases.</p>
                            </div>
                        </motion.article>

                        {/* Trans Fats Card */}
                        <motion.article className="food-card"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}>
                            <img src={trans}
                                 alt='Trans Fats'
                                 className="food-card-image" />
                            <div className="food-card-content">
                                <h5 className='food-card-title'>Trans Fats (Margarine, Packaged Snacks)</h5>
                                <p className='foodpara'><strong>Damages Brain Cells:</strong> Trans fats are harmful to brain cells, impairing cognitive function and increasing the risk of Alzheimer's disease.</p>
                                <p className='foodpara'><strong>Raises Inflammation:</strong> These fats increase inflammation in the brain, which negatively affects mental clarity and memory.</p>
                            </div>
                        </motion.article>

                        {/* High-Sodium Foods Card */}
                        <motion.article className="food-card"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}>
                            <img src={canned}
                                 alt='High-Sodium Foods'
                                 className="food-card-image" />
                            <div className="food-card-content">
                                <h5 className='food-card-title'>High-Sodium Foods (Canned Soups, Processed Cheese)</h5>
                                <p className='foodpara'><strong>Increases Blood Pressure:</strong> High sodium intake raises blood pressure, which can negatively affect brain health and increase the risk of stroke.</p>
                                <p className='foodpara'><strong>Reduces Cognitive Function:</strong> Excessive salt intake is linked to reduced cognitive function and may increase the risk of dementia and Alzheimer's disease.</p>
                            </div>
                        </motion.article>


                    </div>
                </section>
            </div>
        </div>
    );
}

export default Brain;
