import "../plan.css";
import { NavLink } from "react-router-dom";

import { GiCheckMark } from "@react-icons/all-files/gi/GiCheckMark.esm";

import { RiArrowRightSFill } from "@react-icons/all-files/ri/RiArrowRightSFill.esm";

import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";

export const Plan = () => {
  return (
    <section className="Plan" id="plan">

      <div className="Plan-container">
  
        
            <div className="Container-items">
              
                <div>
                  <h3>Silver Plan </h3>
                </div>

              
                  <p>
                    <GiCheckMark fontSize={25} className="me-2" color="#ED1C24" />{""}
                     You're The Boss!
                  </p>
                
                
                  <p>
                    <GiCheckMark fontSize={25} className="me-2" color="#ED1C24" />
                    No Forced Dispatch
                  </p>
              
                
                  <p>
                    <GiCheckMark fontSize={25} className="me-2" color="#ED1C24" />
                    Payload & FSC = 100% Yours
                  </p>
                
                
                  <p>
                    <GiCheckMark fontSize={25} className="me-2" color="#ED1C24" />
                    We Negotiate Top Paying Rates
                  </p>
                
                
                  <p>
                    <GiCheckMark fontSize={25} className="me-2" color="#ED1C24" />
                    Setup Paperwork
                  </p>
                
                
                  <p>
                    <GiCheckMark fontSize={25} className="me-2" color="#ED1C24" />
                    Fax/Email Documents
                  </p>
              
                
                  <div className="button-plan">
                  <NavLink
              id="pricing"
              to="/pricing#pricing"
              className="btn btn3" type="button">
              <RiArrowRightSFill /> READ MORE
            </NavLink>
            </div>
                  
                

                </div>
              
        
        

          
            <div className="Container-items">
              
                  <h3>Gold Plan</h3>
                
                
                  <p>
                    <GiCheckMark fontSize={25} className="me-2" color="#ED1C24" />
                    Request Fuel Advances
                  </p>
                
                
                  <p>
                    <GiCheckMark fontSize={25} className="me-2" color="#ED1C24" />
                    Request Quick Pay
                  </p>
                
                
                  <p>
                    <GiCheckMark fontSize={25} className="me-2" color="#ED1C24" />
                    Personal Dispatcher
                  </p>
                
                
                  <p>
                    <GiCheckMark fontSize={25} className="me-2" color="#ED1C24" />
                    Limited Credit Checks
                  </p>
                
                
                  <p>
                    <GiCheckMark fontSize={25} className="me-2" color="#ED1C24" />
                    Setup Paperwork
                  </p>
                
                
                  <p>
                    <GiCheckMark fontSize={25} className="me-2" color="#ED1C24" />
                    Collection Assistance
                  </p>
                
                
                  <div className="button-plan">
                  <NavLink
              id="pricing"
              to="/pricing#pricing"
              className="btn btn3" type="button">
              <RiArrowRightSFill /> READ MORE
            </NavLink>
            </div>
                
            
            </div>
          

          
            <div className="Container-items">
              

                  <h3>Custom Plan</h3>
                
                
                  <p>
                    <GiCheckMark fontSize={25} className="me-2" color="#ED1C24" />
                    Detention Charges Assistance
                  </p>
                
                
                  <p>
                    <GiCheckMark fontSize={25} className="me-2" color="#ED1C24" /> No Forced
                    Dispatch
                  </p>
                
                
                  <p>
                    <GiCheckMark fontSize={25} className="me-2" color="#ED1C24" />
                    Driver Director Assistance
                  </p>
                
                
                  <p>
                    <GiCheckMark fontSize={25} className="me-2" color="#ED1C24" />
                    Request Quick Pay
                  </p>
                
                
                  <p>
                    <GiCheckMark fontSize={25} className="me-2" color="#ED1C24" />
                    Request Insurance Certificate
                  </p>
                
                
                  <p>
                    <GiCheckMark fontSize={25} className="me-2" color="#ED1C24" /> Credit
                    Checks
                  </p>
                
                
                  <div className="button-plan">
                  <NavLink
              id="pricing"
              to="/pricing#pricing"
              className="btn btn3" type="button">
              <RiArrowRightSFill /> READ MORE
            </NavLink>
            </div>

                </div>
              

        </div>
    
    </section>
  );
};
