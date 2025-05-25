import { motion } from 'framer-motion';

const About = () => {
    return (
        <div
            className="about-text ml-14 pl-3 mt-20 pt-9 text-custom-blue relative"
            style={{position: 'relative'}} // Ensure relative positioning for container
        >
            <motion.p
                className="about-heading text-6xl font-worksans font-light"
                style={{lineHeight: "1.2"}}
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.8, ease: "easeInOut"}}
            >
                The Way Our Platform <br/> Works
            </motion.p>

            <motion.p
                className="paragraph1 mt-10 font-helvetica font-extralight max-w-screen-sm"
                style={{lineHeight: "1.5", fontSize: "1.3rem"}}
                initial={{opacity: 0, x: -20}}
                whileInView={{opacity: 1, x: 0}}
                transition={{duration: 0.5, ease: "easeInOut"}}
            >
                Our nutritional evaluation platform uses three key parameters—calories, glucose, and oxygen— and two organ specific parameters to comprehensively assess how your food choices impact your health
                . By focusing on these vital factors, we provide personalized insights that can help optimize your dietary habits
            </motion.p>

            <motion.p
                className="paragraph2 mt-14 font-helvetica font-extralight text-right absolute right-[12px]"
                style={{
                    lineHeight: "1.5",
                    fontSize: "1.3rem",
                }}
                initial={{opacity: 0, x: '100%'}}
                whileInView={{opacity: 1, x: 600}}
                transition={{duration: 0.5, ease: "easeInOut", delay: 0.2}}
            >
                We make healthy eating simple and enjoyable with personalized recommendations and interactive
                tools, thoughtfully designed to keep you engaged and on track.            </motion.p>


            <motion.p
                className="paragraph3 mt-52 font-helvetica font-extralight ml-25 max-w-screen-sm"
                style={{lineHeight: "1.5", fontSize: "1.3rem"}}
                initial={{opacity: 0, x: -20, y :20}}
                whileInView={{opacity: 1, x: 0,y : 20}}
                transition={{duration: 0.5, ease: "easeInOut", delay: 0.4}}
            >
                We make healthy eating more enjoyable with personalized recommendations and interactive tools.
                Our engaging and intuitive design makes adopting a nutritious diet easy.







            </motion.p>
        </div>
    );
};

export default About;
