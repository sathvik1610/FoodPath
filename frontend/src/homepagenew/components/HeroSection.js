import { useRef, useEffect } from "react";
import { motion } from 'framer-motion';


const HeroSection = () => {
    const cutoutRef = useRef(null);
    const h1Ref = useRef(null);
    const h3Ref = useRef(null);
    useEffect(() => {
        const handleScroll = () => {
            const cutout = cutoutRef.current;
            const h1 = h1Ref.current;
            const h3 = h3Ref.current;

            if (cutout) {
                let offset = window.pageYOffset * 0.2;
                cutout.style.backgroundPositionX = `${offset}px`;
            }

            if (h1 && h3) {
                const h1Rect = h1.getBoundingClientRect();
                const h3Rect = h3.getBoundingClientRect();

                const zoomLevel = window.devicePixelRatio;
                const triggerPoint = window.innerHeight * (0.8 / zoomLevel);

                if (h1Rect.top < triggerPoint) {
                    h1.classList.add("fade-in-up");
                }
                if (h3Rect.top < triggerPoint) {
                    h3.classList.add("fade-in-up");
                }
            }
        };

        setTimeout(() => {
            if (h1Ref.current) {
                h1Ref.current.classList.add("fade-in-up-slow");
            }
        }, 500);

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="hero-cutout relative flex h-screen">
            <div className="hero-section w-1/3 p-8">
                <h1
                    className="text-6xl text-white font-worksans font-extralight mb-4 pt-52 pl-7 opacity-0" // Added opacity-0
                    style={{
                        lineHeight: "1.2",
                        transition: "opacity 1s ease-in-out, transform 1s ease-in-out",
                    }}
                    ref={h1Ref}
                >
                    Fueling Your Inner World: <br /> What Does Food Do To Your Organs?
                </h1>
                <h3
                    className="text-2xl text-white font-worksans font-extralight mt-14 pl-8 opacity-0" // Added opacity-0
                    style={{
                        lineHeight: "1.5",
                        transition: "opacity 0.5s ease-in-out, transform 0.5s ease-in-out",
                    }}
                    ref={h3Ref}
                >
                    Ever thought of the effects of food on your body's organs? <br />
                    Now with FoodPath, you can see them via our models!
                </h3>
            </div>
            <div
                className="cutout absolute w-1/3 h-96 ml-4 top-[85%] left-[40%]"
                ref={cutoutRef}
            ></div>
            <div className='journey-text mt-14 pr-20'

            >
                <motion.p className='text-5xl text-white font-worksans text-center font-extralight whitespace-nowrap'
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 40 }}
                          transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                    OUR JOURNEY AND PURPOSE<br/>
                </motion.p>
                <motion.p className='journey-text2 text-center text-white font-worksans font-extralight  pt-3'
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 30 }}
                          transition={{ duration: 0.7, ease: "easeInOut" }}>
                    Take control of your health with FoodPath.
                </motion.p>
                <motion.p className='journey-text3  text-white font-worksans font-extralight pl-8 pt-2'
                          initial={{ opacity: 0, x: -20  }}
                          whileInView={{ opacity: 1, x: 30 }}
                          transition={{ duration: 0.8, ease: "easeInOut" }}>
                    Unlock a healthier, happier you with FoodPath. Our groundbreaking interactive 2D, 3D models provides an unparalleled visual journey through the human body, revealing the remarkable impact of your food choices on your organs and overall health. With FoodPath, you'll gain a deeper understanding of how nutrition works, empowering you to make informed decisions that support your well-being. {/*Discover the secrets to a vibrant life, optimize your diet, and achieve your health goals with our intuitive and engaging platform.*/}
                    {/*FoodPath's mission is to revolutionize how you understand nutrition. Explore our 3D model and discover the intricate relationship between food and your internal well-being.*/}
                </motion.p>

            </div>
        </div>
    );
};

export default HeroSection;