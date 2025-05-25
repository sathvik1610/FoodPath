import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./SplashScreen.css";

const SplashScreen = () => {
    const [text, setText] = useState("");
    const fullText = "FoodPath®";
    const [animationComplete, setAnimationComplete] = useState(false);

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            if (index < fullText.length) {
                setText(fullText.slice(0, index + 1));
                index++;
            } else {
                clearInterval(interval);
                setAnimationComplete(true);
            }
        }, 150);

        // Delay the start of the animation
        setTimeout(() => {
            // Trigger the animation
        }, 2000); // Delay for 2 seconds

        return () => clearInterval(interval);
    }, [fullText]);

    return (
        <motion.div
            className="splash-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <motion.h1
                className="splash-text"
                initial={{ scale: 1, opacity: 1, x: 0, y: 0 }}
                animate={{
                    scale: animationComplete ? 0.5 : 1,
                    x: animationComplete ? -650 : 0,
                    y: animationComplete ? -340 : 0,
                    fontSize: animationComplete ? "48px" : "120px",
                }}
                transition={{
                    type: "tween",
                    stiffness: 100,
                    damping: 25,
                    duration: 1, // Increase the duration of the animation
                    delay: 0, // Delay the start of the animation (already handled in useEffect)
                }}
            >
                {text.slice(0, -1)}<sup className="superscript">®</sup>
            </motion.h1>
        </motion.div>
    );
};

export default SplashScreen;