
import Content from "./model3d/content3d";
import React from "react";
import Header from "./homepagenew/components/Header";
import Footer from "./homepagenew/components/Footer";
import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import './App.css'
function Model2dpage() {
  const token = localStorage.getItem("jwtToken");
  const [isSignIn, setSignIn] = useState(false);
  const navigate = useNavigate();
  const chkSignIn = () => {
    if (token) {
      setSignIn(true);
    }
  };
  const handleClick = () => {
    navigate('/login');
  }

  useEffect(() => {
    chkSignIn();
  }, []);
  return (
    <>
      <div style={{paddingTop:'95px'}}></div>
      <Header />
      {!isSignIn && (
        <div
          className="nosigninbackground"
          style={{
            backgroundColor: "#1C2E3B",
            width: "94%",
            marginTop: "20px",
            marginBottom: "20px",
            borderRadius: "20px",
            padding: "20px",
            paddingBottom:'100px',
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
                            color:'#F0F0F0',
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
        <div class='contentbackground'style={{backgroundColor:'#1C2E3B',width:'94%',marginTop:'20px',borderRadius:'20px',padding:'20px',position:'relative',zIndex:'10',diplay:'flex',marginLeft:'53px',marginBottom:'7px'}}>
        <Content />
        </div>
      )}
      <Footer/>
    </>
  );
}
export default Model2dpage;
