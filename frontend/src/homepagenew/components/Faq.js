import { motion } from "framer-motion";
import "./faqpagestyles.css";
import Header from "./Header";
import Footer from "./Footer";

function Faq() {
  const questionVariantsLeft = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const questionVariantsRight = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const answerVariantsLeft = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, delay: 0.1 } },
  };
  const answerVariantsRight = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.1 } },
  };


  return (
    <div className="main-background2 bg-gray-500 flex flex-col min-h-screen items-center px-4 pt-24">
      <Header />
      <div className="content-overlay4 flex-grow w-full max-w-9xl text-white mt-30px bg-cover bg-center
      bg-no-repeat bg-fixed bg-[url('../assets/123.jpg')]"  >
        {/* Q1 */}
        <div className="about-text mt-40 ml-20" >
          <motion.p
            id="q1que"
            className="font-worksans text-5xl font-light"
            variants={questionVariantsLeft}
            initial="hidden"
            whileInView="visible"
          >
            What is FoodPath?
          </motion.p>

          <motion.p
            id="q1ans"
            className=" text-xl font-helvetica mt-8 max-w-screen-lg"
            variants={answerVariantsLeft}
            initial="hidden"
            whileInView="visible"
          >
            FoodPath is an interactive platform that uses 2D and 3D simulations
            to show the effects of different foods on your internal organs. It
            also provides a personalized health evaluation and recommendations
            to help you make informed food choices.
          </motion.p>
        </div>

        {/* Q2 */}
        <div className="q2 mt-36 mr-24 text-right">
          <div className="linex w-[321px] h-[1px] bg-white my-[10px] mb-[75px] ml-auto mr-0"></div>
          <motion.p
            id="q2que"
            className="font-worksans text-5xl font-light"
            variants={questionVariantsRight}
            initial="hidden"
            whileInView="visible"
          >
            How does the simulation work?
          </motion.p>

          <motion.p
            id="q2ans"
            className=" text-xl font-helvetica mt-8 max-w-screen-lg "
            variants={answerVariantsRight}
            initial="hidden"
            whileInView="visible"
          >
            Our simulations use advanced algorithms and scientific data to
            visualize how food is processed by your body and how it affects your
            organs. You can see the impact of different foods on your digestive
            system, liver, heart, and more.
          </motion.p>
        </div>

        {/* Q3 */}
        <div className="q3 mt-40 ml-20">
          <div className="linex w-[321px] h-[1px] bg-white my-[10px] mb-[75px]"></div>
          <motion.p
            id="q3que"
            className="font-worksans text-5xl font-light"
            variants={questionVariantsLeft}
            initial="hidden"
            whileInView="visible"
          >
            How does our model evaluate?
          </motion.p>

          <motion.p
            id="q3ans"
            className=" text-xl font-helvetica mt-8 max-w-screen-lg"
            variants={answerVariantsLeft}
            initial="hidden"
            whileInView="visible"
          >
            We use a unique pointing system based on three key parameters:
            oxygen, glucose, and calories. This system evaluates the healthiness
            of a food item based on its impact on these parameters.
          </motion.p>
        </div>

        {/* Q4 */}
        <div className="q4 mt-40 mr-24 text-right">
          <div className="linex w-[321px] h-[1px] bg-white my-[10px] mb-[75px] ml-auto mr-0"></div>
          <motion.p
            id="q4que"
            className="font-worksans text-5xl font-light"
            variants={questionVariantsRight}
            initial="hidden"
            whileInView="visible"
          >
            Why do I need to log in?
          </motion.p>

          <motion.p
            id="q4ans"
            className=" text-xl font-helvetica mt-8 max-w-screen-lg"
            variants={answerVariantsRight}
            initial="hidden"
            whileInView="visible"
          >
            Creating an account allows you to save your food history, track your
            progress, and unlock personalized achievements. It also enables you
            to receive customized recommendations based on your individual needs
            and goals.
          </motion.p>
        </div>

        {/* Q5 */}
        <div className="q5 mt-40 ml-20">
          <div className="linex w-[321px] h-[1px] bg-white my-[10px] mb-[75px]"></div>
          <motion.p
            id="q5que"
            className="font-worksans text-5xl font-light max-w-screen-md"
            variants={questionVariantsLeft}
            initial="hidden"
            whileInView="visible"
          >
            Can I see the long-term effects of my food choices?
          </motion.p>

          <motion.p
            id="q5ans"
            className=" text-xl font-helvetica mt-8 max-w-screen-lg"
            variants={answerVariantsLeft}
            initial="hidden"
            whileInView="visible"
          >
            Yes, by tracking your food intake over time, you can observe the
            cumulative effects of your diet on your organs and overall health.
            This helps you understand the long-term consequences of your eating
            habits.
          </motion.p>
        </div>

        {/* Q6 */}
        <div className="q6 mt-40 mr-24 text-right">
          <div className="linex w-[321px] h-[1px] bg-white my-[10px] mb-[75px] ml-auto mr-0"></div>
          <motion.p
            id="q6que"
            className="font-worksans text-5xl font-light max-w-screen-md text-right"
            variants={questionVariantsRight}
            initial="hidden"
            whileInView="visible"
          >
            How can I improve my health status?
          </motion.p>

          <motion.p
            id="q6ans"
            className=" text-xl font-helvetica mt-8 max-w-screen-lg"
            variants={answerVariantsRight}
            initial="hidden"
            whileInView="visible"
          >
            We provide a dedicated page that offers personalized recommendations
            and guidance on how to improve the health status of specific organs.
            This includes dietary suggestions, lifestyle tips, and other
            resources to help you achieve your health goals.
          </motion.p>
        </div>

        {/* Q7 */}
        <div className="q7 mt-40 ml-20">
          <div className="linex w-[321px] h-[1px] bg-white my-[10px] mb-[75px]"></div>
          <motion.p
            id="q7que"
            className="font-worksans text-5xl font-light max-w-screen-md"
            variants={questionVariantsLeft}
            initial="hidden"
            whileInView="visible"
          >
            What are the technologies used for <br />
            using the platform?
          </motion.p>

          <motion.p
            id="q7ans"
            className=" text-xl font-helvetica mt-8 max-w-screen-lg"
            variants={answerVariantsLeft}
            initial="hidden"
            whileInView="visible"
          >
            FoodPath was developed on MERN stack
          </motion.p>
        </div>

        {/* Q8 */}
        <div className="q8 mt-40 mr-24 text-right">
          <div className="linex w-[421px] h-[1px] bg-white my-[10px] mb-[75px] ml-auto mr-0 "></div>
          <motion.p
            id="q8que"
            className="font-worksans text-5xl font-light max-w-screen-md text-right"
            variants={questionVariantsRight}
            initial="hidden"
            whileInView="visible"
          >
            Is FoodPath suitable for people with specific dietary needs or
            medical conditions?
          </motion.p>

          <motion.p
            id="q8ans"
            className=" text-xl font-helvetica mt-8 max-w-screen-lg text-right"
            variants={answerVariantsRight}
            initial="hidden"
            whileInView="visible"
          >
            Although FoodPath strives to give accurate information, it is not
            accurate all the time. So, please don't take the information for
            medical purpose
          </motion.p>
        </div>

        {/* Q9 */}
        <div className="q9 mt-40 ml-20">
          <div className="linex w-[321px] h-[1px] bg-white my-[10px] mb-[75px]"></div>
          <motion.p
            id="q9que"
            className="font-worksans text-5xl font-light max-w-screen-md"
            variants={questionVariantsLeft}
            initial="hidden"
            whileInView="visible"
          >
            How can I get support if I have questions or issues?
          </motion.p>

          <motion.p
            id="q9ans"
            className=" text-xl font-helvetica mt-8 max-w-screen-lg"
            variants={answerVariantsLeft}
            initial="hidden"
            whileInView="visible"
          >
            Contact Us at contact@foodpath.com
            <br /> +91 1234567890{" "}
          </motion.p>
        </div>

        {/* Q10 */}
        {/* <div className="q10 mt-40 mr-24 text-right">
          <div className="linex w-[321px] h-[1px] bg-white my-[10px] mb-[75px] ml-auto mr-0"></div>
          <motion.p
            id="q10que"
            className="font-worksans text-5xl font-light max-w-screen-md"
            variants={questionVariantsRight}
            initial="hidden"
            whileInView="visible"
          >
            Venky show dengutaada?
          </motion.p>

          <motion.p
            id="q10ans"
            className=" text-xl font-helvetica mt-8 max-w-screen-lg text-right"
            variants={answerVariantsRight}
            initial="hidden"
            whileInView="visible"
          >
            Yes
          </motion.p>
        </div> */}
      </div>
      <Footer />
    </div>
  );
}

export default Faq;
