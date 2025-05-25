import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./loginsignup/login";
import HomePage from "./homepagenew/components/HomePage";
import Model2dpage from "./model2dpage";
import Brain from "./guides/brain";
import Lungs from "./guides/lungs";
import Heart from "./guides/heart";
import Intestine from "./guides/intestine";
import Stomach from "./guides/stomach";
import Liver from "./guides/liver";
import Signup from "./loginsignup/signup";
import Model3dpage from "./model3dpage";
import Faq from "./homepagenew/components/Faq";
import TrophiesPage from "./trophies/trophies";
import Kidney from "./guides/kidney";
import GuideHome from "./guides/guidehome";
import BlogBrain from "./blogs/blogbrain";
import QuizPage from "./homepagenew/Quiz/QuizPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/model2dpage" element={<Model2dpage />} />
        <Route path="/model3dpage" element={<Model3dpage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/guides" element={<BlogBrain />} />
        <Route path="/guides/brain" element={<Brain />} />
        <Route path="/guides/heart" element={<Heart />} />
        <Route path="/guides/liver" element={<Liver />} />
        <Route path="/guides/lungs" element={<Lungs />} />
        <Route path="/guides/stomach" element={<Stomach />} />
        <Route path="/guides/intestines" element={<Intestine />} />
        <Route path="/guides/kidneys" element={<Kidney />} />
        <Route path="/trophies" element={<TrophiesPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
