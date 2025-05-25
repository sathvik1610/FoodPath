import React, { useState } from "react";
import "./QuizPage.css";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Footer from "../components/Footer";

// const questionsPool = [
//   { question: "What organ processes glucose in the body?", options: ["Heart", "Liver", "Kidney", "Lungs"], answer: "Liver" },
//   { question: "Which nutrient is essential for muscle repair?", options: ["Protein", "Carbs", "Fats", "Sugars"], answer: "Protein" },
//   { question: "Which food promotes brain function?", options: ["Salmon", "Ice Cream", "Cookies", "Chips"], answer: "Salmon" },
//   { question: "What organ filters waste from the blood?", options: ["Kidney", "Liver", "Heart", "Brain"], answer: "Kidney" },
//   { question: "Excess sugar affects which organ the most?", options: ["Liver", "Heart", "Kidney", "Lungs"], answer: "Liver" },
//   { question: "What food is best for heart health?", options: ["Avocado", "Butter", "Fried Chicken", "Chocolates"], answer: "Avocado" },
//   { question: "Which vitamin supports vision?", options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin B"], answer: "Vitamin A" },
//   { question: "Which nutrient is critical for strong bones?", options: ["Calcium", "Iron", "Potassium", "Zinc"], answer: "Calcium" },
//   { question: "What does trans fat increase?", options: ["Cholesterol", "Bone Density", "Vision Clarity", "Hair Growth"], answer: "Cholesterol" },
//   { question: "Which organ is most impacted by smoking?", options: ["Lungs", "Heart", "Brain", "Liver"], answer: "Lungs" },
//   { question: "What happens to organs with excess calories?", options: ["Turn Red", "Turn Green", "Turn Yellow", "No Effect"], answer: "Turn Red" },
//   { question: "Which vitamin is synthesized by the skin?", options: ["Vitamin D", "Vitamin A", "Vitamin E", "Vitamin B12"], answer: "Vitamin D" },
//   { question: "What food boosts immunity?", options: ["Citrus Fruits", "Ice Cream", "Pizza", "Chips"], answer: "Citrus Fruits" },
//   { question: "What nutrient is vital for oxygen transport in blood?", options: ["Iron", "Calcium", "Zinc", "Magnesium"], answer: "Iron" },
//   { question: "Which food group provides quick energy?", options: ["Carbohydrates", "Proteins", "Fats", "Fibers"], answer: "Carbohydrates" },
//   { question: "Which organ detoxifies chemicals?", options: ["Liver", "Kidney", "Brain", "Heart"], answer: "Liver" },
//   { question: "What is a common symptom of dehydration?", options: ["Fatigue", "Hunger", "Blurred Vision", "Shortness of Breath"], answer: "Fatigue" },
//   { question: "Which nutrient is essential for brain function?", options: ["Omega-3 Fatty Acids", "Glucose", "Protein", "Fats"], answer: "Omega-3 Fatty Acids" },
//   { question: "Which organ regulates blood pressure?", options: ["Kidney", "Liver", "Heart", "Lungs"], answer: "Kidney" },
//   { question: "Which food promotes healthy digestion?", options: ["Yogurt", "Candy", "Soda", "Chips"], answer: "Yogurt" },
//   { question: "What organ is protected by the rib cage?", options: ["Heart", "Kidney", "Brain", "Liver"], answer: "Heart" },
//   { question: "What happens when you consume excess salt?", options: ["Increased Blood Pressure", "Improved Digestion", "Enhanced Energy", "Better Vision"], answer: "Increased Blood Pressure" },
//   { question: "What organ is most affected by alcohol?", options: ["Liver", "Heart", "Lungs", "Kidney"], answer: "Liver" },
//   { question: "What nutrient is important for hair and skin?", options: ["Biotin", "Vitamin C", "Calcium", "Iron"], answer: "Biotin" },
//   { question: "Which organ pumps blood throughout the body?", options: ["Heart", "Lungs", "Brain", "Kidney"], answer: "Heart" },
//   { question: "What is the primary function of dietary fiber?", options: ["Improving Digestion", "Increasing Cholesterol", "Boosting Energy", "Enhancing Vision"], answer: "Improving Digestion" },
//   { question: "Which vitamin is found in sunlight?", options: ["Vitamin D", "Vitamin C", "Vitamin A", "Vitamin K"], answer: "Vitamin D" },
//   { question: "What organ is most affected by high cholesterol?", options: ["Heart", "Kidney", "Brain", "Liver"], answer: "Heart" },
//   { question: "What mineral strengthens teeth and bones?", options: ["Calcium", "Zinc", "Iron", "Magnesium"], answer: "Calcium" },
//   { question: "Which food is best for hydration?", options: ["Watermelon", "Chocolate", "Chips", "Fried Foods"], answer: "Watermelon" },
// ];
const questionsPool = [
  { question: "What organ processes glucose in the body?", options: ["Liver", "Heart", "Lungs", "Kidney"], answer: "Liver" },
  { question: "Which nutrient is essential for muscle repair?", options: ["Carbs", "Fats", "Protein", "Sugars"], answer: "Protein" },
  { question: "Which food promotes brain function?", options: ["Salmon", "Ice Cream", "Chips", "Cookies"], answer: "Salmon" },
  { question: "What organ filters waste from the blood?", options: ["Heart", "Brain", "Kidney", "Liver"], answer: "Kidney" },
  { question: "Excess sugar affects which organ the most?", options: ["Heart", "Kidney", "Lungs", "Liver"], answer: "Liver" },
  { question: "What food is best for heart health?", options: ["Butter", "Fried Chicken", "Avocado", "Chocolates"], answer: "Avocado" },
  { question: "Which vitamin supports vision?", options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin B"], answer: "Vitamin A" },
  { question: "Which nutrient is critical for strong bones?", options: ["Iron", "Calcium", "Potassium", "Zinc"], answer: "Calcium" },
  { question: "What does trans fat increase?", options: ["Cholesterol", "Hair Growth", "Vision Clarity", "Bone Density"], answer: "Cholesterol" },
  { question: "Which organ is most impacted by smoking?", options: ["Liver", "Heart", "Lungs", "Brain"], answer: "Lungs" },
  { question: "What happens to organs with excess calories?", options: ["Turn Yellow", "No Effect", "Turn Green", "Turn Red"], answer: "Turn Red" },
  { question: "Which vitamin is synthesized by the skin?", options: ["Vitamin A", "Vitamin D", "Vitamin E", "Vitamin B12"], answer: "Vitamin D" },
  { question: "What food boosts immunity?", options: ["Pizza", "Chips", "Ice Cream", "Citrus Fruits"], answer: "Citrus Fruits" },
  { question: "What nutrient is vital for oxygen transport in blood?", options: ["Iron", "Zinc", "Magnesium", "Calcium"], answer: "Iron" },
  { question: "Which food group provides quick energy?", options: ["Carbohydrates", "Fats", "Proteins", "Fibers"], answer: "Carbohydrates" },
  { question: "Which organ detoxifies chemicals?", options: ["Heart", "Kidney", "Liver", "Brain"], answer: "Liver" },
  { question: "What is a common symptom of dehydration?", options: ["Blurred Vision", "Fatigue", "Hunger", "Shortness of Breath"], answer: "Fatigue" },
  { question: "Which nutrient is essential for brain function?", options: ["Glucose", "Omega-3 Fatty Acids", "Fats", "Protein"], answer: "Omega-3 Fatty Acids" },
  { question: "Which organ regulates blood pressure?", options: ["Lungs", "Heart", "Kidney", "Liver"], answer: "Kidney" },
  { question: "Which food promotes healthy digestion?", options: ["Yogurt", "Chips", "Soda", "Candy"], answer: "Yogurt" },
  { question: "What organ is protected by the rib cage?", options: ["Brain", "Heart", "Liver", "Kidney"], answer: "Heart" },
  { question: "What happens when you consume excess salt?", options: ["Better Vision", "Increased Blood Pressure", "Improved Digestion", "Enhanced Energy"], answer: "Increased Blood Pressure" },
  { question: "What organ is most affected by alcohol?", options: ["Heart", "Lungs", "Kidney", "Liver"], answer: "Liver" },
  { question: "What nutrient is important for hair and skin?", options: ["Iron", "Vitamin C", "Biotin", "Calcium"], answer: "Biotin" },
  { question: "Which organ pumps blood throughout the body?", options: ["Heart", "Kidney", "Lungs", "Brain"], answer: "Heart" },
  { question: "What is the primary function of dietary fiber?", options: ["Boosting Energy", "Enhancing Vision", "Improving Digestion", "Increasing Cholesterol"], answer: "Improving Digestion" },
  { question: "Which vitamin is found in sunlight?", options: ["Vitamin C", "Vitamin D", "Vitamin A", "Vitamin K"], answer: "Vitamin D" },
  { question: "What organ is most affected by high cholesterol?", options: ["Heart", "Liver", "Kidney", "Brain"], answer: "Heart" },
  { question: "What mineral strengthens teeth and bones?", options: ["Zinc", "Iron", "Magnesium", "Calcium"], answer: "Calcium" },
  { question: "Which food is best for hydration?", options: ["Chocolate", "Fried Foods", "Watermelon", "Chips"], answer: "Watermelon" },
];

const AnswersModal = ({ isOpen, onClose, questions, userAnswers }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          Close
        </button>
        <h3>Answers Preview</h3>
        <ul>
          {questions.map((question, index) => (
            <li key={index}>
              <p>
                <strong>Q:</strong> {question.question}
              </p>
              <p>
                <strong>Your Answer:</strong> {userAnswers[index] || "No answer selected"} 
                {userAnswers[index] === question.answer ? " ✅" : " ❌"}
              </p>
              <p>
                <strong>Correct Answer:</strong> {question.answer}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const QuizPage = () => {
  const token = localStorage.getItem("jwtToken");
  const [isSignIn, setSignIn] = useState(false);
  const navigate = useNavigate();
  const [userAnswers, setUserAnswers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);



  useEffect(() => {
    chkSignIn();
  }, []);

  const chkSignIn = () => {
    if (token) {
      setSignIn(true);
    }
  };

  const handleClick = () => {
    navigate("/login");
  };

  const [questions] = useState(() =>
    questionsPool.sort(() => 0.5 - Math.random()).slice(0, 10)
  );
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (selectedOption) => {
    setUserAnswers([...userAnswers, selectedOption]); 
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  

  return (
    <div>
      <header>
        <Header />
      </header>

      {!isSignIn && (
        <div
          className="nosigninbackground"
          style={{
            backgroundColor: "#1C2E3B",
            width: "94%",
            marginTop: "120px",
            marginBottom: "20px",
            borderRadius: "20px",
            padding: "20px",
            paddingBottom: "100px",
            position: "relative",
            zIndex: "10",
            diplay: "flex",
            marginLeft: "53px",
            marginBottom: "20px",
          }}
        >
          <div
            className="notsignedin"
            style={{
              height: "calc(100vh - 250px)",
              width: "100%",
              textAlign: "center",
            }}
          >
            <div style={{ height: "100px" }}></div>
            <label
              className="inputinfoheading2"
              style={{
                color: "#F0F0F0",
                textAlign: "center",
                fontSize: "50px",
                margin: "0px",
              }}
            >
              Just a Moment!<br></br>Sign In to access the models :)
            </label>
            <div style={{ minHeight: "20%" }}></div>
            <button
              className="inputbuttons20 p-5 pl-4 pr-4 border-customHoverColor text-lg font-normal  text-custom-blue font-worksans font-light 
                bg-customHoverColor  hover:bg-white w-[210px] h-[65px] hover:bg-customHoverColor hover:text-black hover:text-lg hover:font-normal transition duration-300"
              onClick={handleClick}
              // style={{ marginLeft: "0px", fontSize: "20px",alignItems:'center',height:'auto',padding:"20px" ,width:"250px",paddingTop:"10px",paddingBottom:"10px",
              //   backgroundColor:"#CA8263",borderColor:"#CA8263",color:"#1c2a3b"
              // }}
              //             onMouseEnter={(e) => (e.target.style.backgroundColor = '#f0f0f0')}
              // onMouseLeave={(e) => (e.target.style.backgroundColor = '')}
            >
              Proceed to Sign In
            </button>
          </div>
        </div>
      )}

      {isSignIn && (
        <div>
          <div className="quiz-container">
            {showScore ? (
              <div className="score-section font-worksans">
                <h2 className="score-heading">🎉 Quiz Complete! 🎉</h2>
                <div className="score-display">
                  <p className="score-text">Your Score:</p>
                  <p className="score-value">
                    {score} / {questions.length}
                  </p>
                </div>
                <p className="feedback-text">
                  {score === questions.length
                    ? "Excellent! You aced it! 🏆"
                    : score > questions.length / 2
                    ? ("Great job! Keep it up! 🌟 Use our guides to improve further")
                    : "Keep practicing! Use our guides to improve further"}
                </p>
                <div className="answers-review">
      {/* <h3>Review Your Answers:</h3>
      <ul>
        {questions.map((question, index) => (
          <li key={index}>
            <p><strong>Q:</strong> {question.question}</p>
            <p>
              <strong>Your Answer:</strong> {userAnswers[index] || "No answer selected"} 
              {userAnswers[index] === question.answer ? " ✅" : " ❌"}
            </p>
            <p><strong>Correct Answer:</strong> {question.answer}</p>
          </li>
        ))}
      </ul> */}
    </div>
     {/* New Answers Preview Button */}
     <button
                  className="retrybutton"
                  onClick={() => setIsModalOpen(true)}
                >
                  Preview answers 
                </button>
                <button
                  className="retrybutton"
                  onClick={() => window.location.reload()}
                >
                  Retry Quiz
                </button>
              </div>
            ) : (
              <div className="question-section  text-center font-worksans pb-8">
                <h3 className=" pt-8 text-3xl">{`Question ${currentQuestion + 1}/${questions.length}`}</h3>
                <p className="question-text font-worksans text-2  xl pt-4 pb-4">
                  {questions[currentQuestion].question}
                </p>
                <div className="options-container">
                  {questions[currentQuestion].options.map((option) => (
                    <button
                      key={option}
                      className="option-button"
                      onClick={() => handleAnswer(option)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
          <AnswersModal 
            isOpen={isModalOpen} 
            onClose={() => setIsModalOpen(false)} 
            questions={questions} 
            userAnswers={userAnswers} 
          />
        </div>
      )}
      <Footer/>
    </div>
  );
};

export default QuizPage;
