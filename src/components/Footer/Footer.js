import React from 'react';
import "./Footer.css"

function Footer() {
  return (
    <div>
      <div id="footer" className="footer-two bg-light pt50">
            <div className="container-fluid bb-solid-1">
                <div className="container pb35">
                    <div className="row">
                        
                        {/* <!-- footer about start --> */}
                        <div className="col-md-5 col-sm-12 col-xs-12">
                            <h6 className="font-montserrat text-uppercase color-dark" style={{textAlign:"left"}}>About Us</h6>
                            <p style={{textAlign:"left"}}>Rubixe™ is a global technology company specializing in disruptive technologies – Artificial Intelligence (AI), Machine Learning, Robotic Process Automation (RPA), BlockChain and Internet of Things (IoT). Rubixe mission to enable businesses to leverage the full potential of disruptive technologies to stay competitive in the market.</p>
                        </div>
                        {/* <!-- footer about end --> */}
                        
                        {/* <!-- footer menu one start --> */}
                        <div className="col-md-2 col-sm-3 col-xs-4">
                            <h6 className="font-montserrat text-uppercase color-dark">Menus</h6>
                            <ul className="no-icon-list" style={{textAlign:"left", listStyleType: "none"}}>
                                <ul>Home</ul>
                                <ul>Services</ul>
                                <ul>Products</ul>
                                <ul>Career</ul>
                                
                            </ul>
                        </div>
                        {/* <!-- footer menu one end --> */}
                        
                        {/* <!-- footer menu two start --> */}
                        <div className="col-md-2 col-sm-3 col-xs-4">
                            <h6 className="font-montserrat text-uppercase color-dark">Learn more</h6>
                            <ul className="no-icon-list"  style={{textAlign:"left",listStyleType: "none"}}>
                                
                               <ul>About</ul>
                                <ul>Contact Us</ul>
                                </ul>
                        </div>
                        {/* <!-- footer menu two end --> */}
                        
                       
                        
                        {/* <!-- footer social icons start --> */}
                        <div className="col-md-3 col-sm-3 col-xs-12">
                            <h6 className="font-montserrat text-uppercase color-dark" style={{textAlign:"left"}}>Address</h6>
                            <div className="social social-two" style={{textAlign:"left"}}>
                                Novel Tech Park, 1st Floor, Hosur Rd, Kudlu gate, Bengaluru, Karnataka 560068
							   <br/>
							   Phone:   0804-717-8999
							   <br/>
							   Email: hi@rubixe.com
                            </div>
                            
							
							<h6 className="font-montserrat text-uppercase color-dark" style={{textAlign:"left"}}>Social Media</h6>
                            <div className="social social-two" style={{textAlign:"left"}}>
                                  
                                <a href=" " target="_blank"><i class="fa fa-facebook color-primary"></i></a>
                                <a href=" " target="_blank"><i class="fa fa-linkedin color-blue"></i></a>
                                 
                            </div>
                        </div>
                        {/* <!-- footer social icons end --> */}

                    </div>
                </div>
            </div>
            
            <div className="container-fluid pt20">
                <div className="container">
                    <div className="row">

                        {/* <!-- copyright start --> */}
                        <div className="col-md-8 col-sm-8 col-xs-8 pull-left">
                            <p>© Copyright 2017 - 2023   |   Rubixe is a brand of THINK AHEAD INNOVATIONS PVT. LTD.   |   All Rights Reserved </p>
                        </div>
                        {/* <!-- copyright end --> */}

                        {/* <!-- footer bottom start --> */}
                       
                        

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
