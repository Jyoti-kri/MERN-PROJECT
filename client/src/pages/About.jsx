
import { Analytics } from "../components/Analytics"
import { useAuth } from "../store/auth"

export const About=()=>{


    const {user} =useAuth();

    return (
        <>
         <main>
        <section className="sec-hero">
        <div className="container grid grid-two-cols">
            <div className="hero-content">
            <p>Welcome,
            {user ? `${user.username} to our website` :`to our website`}</p>
            <h1>Why Choose Us? </h1>
            <p>
                Expertise: Our team consists of experienced IT professionals who
                are passionate about staying up-to-date with the latest industry
                trends.
            </p>
            <p>
                Customization: We understand that every business is unique.
                That's why we create solutions that are tailored to your 
                specific needs and goals.
            </p>
            <p>
                Customer-Centric Approach: We prioritize your statisfaction and 
                provide top-notch support to address your IT concerns.
            </p>
            <p>
                Affordability: We offer competitive pricing without compromising 
                on the quality of our services.
            </p>
            <p>
                Reliability: Count on us to be there when you need us. We're
                committed to ensuring your IT environment is relible and 
                availble 24/7
            </p>
            <div className="btn btn-grp">
                <a href="/contact">
                <button className="btn">connect now</button>
                </a>
                <a href="/services">
                <button className="btn sec-btn">learn more</button>
                </a>
            </div>
            </div>
            
            <div className="hero-img">
            <img src="/images/home.png" alt="coding buddies"
            width="400"
            height="300"
            />
            </div>
            
        </div>

        
        </section>
    </main>

    <Analytics/>
        </>
    )
}