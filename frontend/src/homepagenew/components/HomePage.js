import React, { useState, useEffect } from "react";
import HeroSection from "./HeroSection";
import Header from "./Header";
import Footer from "./Footer";
import Tomodel from "./Tomodel";
import About from "./About.js";
import SplashScreen from "./SplashScreen";
import "./homepagestyles.css";

const HomePage = () => {
    const [showSplash, setShowSplash] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setShowSplash(false), 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {showSplash ? (
                <SplashScreen />
            ) : (
                <div className="main-background bg-gray-500 flex flex-col items-center pt-24 px-4">
                    <Header />
                    <div className="content-overlay w-full max-w-9xl">
                        <HeroSection />
                    </div>
                    <div className="another-content-layer w-full max-w-9xl">
                        <Tomodel />
                    </div>
                    <div className="about-content w-full max-w-9xl">
                        <About />
                    </div>
                    <Footer />
                </div>
            )}
        </>
    );
};

export default HomePage;
