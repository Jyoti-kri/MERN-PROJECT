import { Analytics } from "../components/Analytics";
import { NavLink } from "react-router-dom";

export const Home=()=>{
    return(
    <>
    <main>
        <section className="sec-hero">
        <div className="container grid grid-two-cols">
            <div className="hero-content">
            <p>We are the world best IT Company </p>
            <h1>Welcome to my website</h1>
            <p>
                Are u ready to take your business to the next level with 
                cutting-edge IT solutions? Look no futher! At my website, we 
                specialize in providing innovative IT services and solutions
                tailored to meet your unique needs.
            </p>
            <div className="btn btn-grp">
               <NavLink to="/contact"><button className="btn">connect now</button></NavLink>
                
                
              <NavLink to="/service"><button className="btn sec-btn">learn more</button></NavLink>
            </div>
            </div>
            
            <div className="hero-img">
            <img src="/images/home.png" alt="coding together"
            width="400"
            height="300"
            />
            </div>
            
        </div>

        
        </section>
    </main>

    {/* second section */}

   <Analytics />


    <section className="sec-hero">
        <div className="container grid grid-two-cols">
            <div className="hero-img">
            <img src="/images/home.png" alt="coding together"
            width="400"
            height="300"
            />
            </div>
            <div className="hero-content">
            <p>We are here to help you </p>
            <h1>Get Started Today</h1>
            <p>
                Ready to take the first step towards a more efficcient and secure 
                IT infrastructure? Contact us today for a free consultation and
                let's discuss how my website can help your business thrive in
                the digital age.
            </p>
            <div className="btn btn-grp">
                <NavLink to="/contact"><button className="btn">connect now</button></NavLink>
                
                
              <NavLink to="/service"><button className="btn sec-btn">learn more</button></NavLink>
                
                
            </div>
            </div>
            
            
            
        </div>

        
        </section>


    </>
    ) 
};

