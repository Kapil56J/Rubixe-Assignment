import React from "react";
import "./Card.css";

function Card() {
  return (
    <>
      <div className="testimonial">
        <div
          className="small-container"
          style={{ backgroundColor: "rgb(241 241 241)", padding: "40px" }}
        >
          <h2 className="title">TECH FOR TEENS -A RUBIXE @INITIATIVE</h2>
          <div className="row">
            <div className="col-4" style={{ height: "300px", width: "250px" }}>
              <div
                style={{
                  height: "40px",
                  backgroundColor: "#25215e",
                  width: "110%",
                  borderRadius: "25px 25px 0px 0px",
                  marginLeft: "-12px",
                }}
              ></div>
              <img
                src="assets/first.jpg"
                alt=""
                style={{ height: "80px", width: "90px" }}
              />
              <p
                classname="card-info"
                style={{ fontSize: "20px", color: "black", padding:"20px"}}
              >
                Introducing AI to a children in an age Appropriate Manner
              </p>
            </div>

            <div className="col-4" style={{ height: "300px", width: "250px" }}>
              <p style={{ fontSize: "20px", color: "black" }}>
                Gain awareness on AI and build an interactive story around it
              </p>
              <img
                src="assets/second.jpg"
                alt=""
                style={{ height: "80px", width: "90px"}}
              />
              <div
                style={{
                  height: "40px",
                  backgroundColor: " rgb(220, 20, 177)",
                  width: "110%",
                  borderRadius: "0px 0px 25px 25px",
                  marginLeft: "-12px",
                  marginTop: "60px",
                }}
              ></div>
            </div>

            <div className="col-4" style={{ height: "300px", width: "250px" }}>
              <div
                style={{
                  height: "40px",
                  backgroundColor: "#ff6c0c",
                  width: "110%",
                  borderRadius: "25px 25px 0px 0px",
                  marginLeft: "-12px",
                }}
              ></div>
              <img
                src="assets/third.jpg"
                alt=""
                style={{ height: "80px", width: "90px" }}
              />
              <p style={{ fontSize: "20px", color: "black", padding:"20px"}}>
                Acquire Programming skills in a user friendly format
              </p>
            </div>

            <div className="col-4" style={{ height: "300px", width: "250px"}}>
              <p style={{ fontSize: "20px", color: "black" }}>
                Exposer to mini project on diverse topics
              </p>
              <img
                src="assets/fourth.jpg"
                alt=""
                style={{ height: "80px", width: "90px" }}
              />
              <div
                style={{
                  height: "40px",
                  backgroundColor: "#006903",
                  width: "110%",
                  borderRadius: "0px 0px 25px 25px",
                  marginLeft: "-12px",
                  marginTop: "90px",
                }}
              ></div>
            </div>

            <div className="col-4" style={{ height: "300px", width: "250px" }}>
              <div
                style={{
                  height: "40px",
                  backgroundColor: "#e0aa24",
                  width: "110%",
                  borderRadius: "25px 25px 0px 0px",
                  marginLeft: "-12px",
                  
                }}
              ></div>
              <img
                src="assets/fifth.jpg"
                alt=""
                style={{ height: "80px", width: "90px" }}
              />
              <p style={{ fontSize: "20px", color: "black",padding:"20px" }}>
                Exposer to mini project on diverse topics
              </p>
            </div>
          </div>
        </div>

        
      </div>
    </>
  );
}

export default Card;
