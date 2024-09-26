import { NavLink } from "react-router-dom";
import {Analytics} from "../components/Analytics";

export const About = () => {
    return (<>
     <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
               <h1>Why Choose Us?</h1>
               <p>
                Expertise: Our team consists of experinced IT professionals who are passionate about staying 
                up to date with the latest industry trends.
               </p>
               <p>
                Customization: We understand that every business is unique. Thats why we create solutions
                that are tailored to your specific needs and goals.
               </p>
               <p>Customer-Centric Approach: We prioritize your satisfaction and provide top-notch support to 
                address your IT concerns.
                 </p>
                <p>Affordability: We offer competitive pricing without compromising
                    on the quality of our services.
                </p>
                <p>
                    Reliability: Count on us to be there when you need us. We are
                    committed to ensuring your IT enviroment is reliable and 
                    available 24/7.
                </p>
                <div className="btn">
                    <NavLink to="/contact">
                    {" "}
                      <button  className="btn">Connect Now</button>
                    </NavLink>
                    <button className="btn secondery-btn">Learn More</button>
                </div>
            </div>
            <div className="hero-image">
                <img 
                src = "/images/about.jpg"
                alt = "telling somthing"
                width="400"
                height = "500"
                />

            </div>
          </div>
        </section>
     </main>
       <Analytics />
       
    
    </>);
}