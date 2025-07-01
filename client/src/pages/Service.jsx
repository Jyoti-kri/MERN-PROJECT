{/*import { useAuth } from "../store/auth";

export const Service=()=>{


    const {services}=useAuth();

    return (
        <section className="sec-services">
            <div className="container">
                <h1 className="main-heading">Services</h1>
            </div>

            <div className="container grid grid-three-cols">

                {
                    services.map((curElem,idx)=> {
                        

                    const {price,description,provider,service} =curElem
                    return(     <div className="card" key={idx}>
                    <div className="card-img">
                        <img src="/images/contact.png" alt="our services info"  width="200" height="300"/>
                    </div>

                    <div className="card-details">
                        <div className="grid grid-two-cols">
                            <p>{provider}</p>
                            <p>{price}</p>
                        </div>
                        <h2>{service}</h2>
                        <p>{description}</p>
                    </div>
                </div>
                    );

                   })
                 }
                
               
            </div>
        </section>
    )
};   */}




{/* 
   
     {
                    services.map((curElem,idx)=> {
                        

                        const {price,description,provider,service} =curElem
                    return(     <div className="card">
                    <div className="card-img">
                        <img src="/images/contact.png" alt="our services info"  width="200" height="300"/>
                    </div>

                    <div className="card-details">
                        <div className="grid grid-two-cols">
                            <p>{provider}</p>
                            <p>{price}</p>
                        </div>
                        <h2>{service}</h2>
                        <p>{description}</p>
                    </div>
                </div>
                    );

                   })
                 }
                
    
    */}




import { useAuth } from "../store/auth";

export const Service = () => {
  const { services } = useAuth();

  console.log("services:", services); // ✅ Debug log

  return (
    <section className="sec-services">
      <div className="container">
        <h1 className="main-heading">Services</h1>
      </div>

      <div className="container grid grid-three-cols">
        {
          Array.isArray(services) && services.length > 0 ? (
            services.map((curElem, idx) => {
              const { price, description, provider, service } = curElem;

              return (
                <div className="card" key={idx}>
                  <div className="card-img">
                    <img
                      src="/images/contact.png"
                      alt="our services info"
                      width="200"
                      height="300"
                    />
                  </div>

                  <div className="card-details">
                    <div className="grid grid-two-cols">
                      <p>{provider}</p>
                      <p>{price}</p>
                    </div>
                    <h2>{service}</h2>
                    <p>{description}</p>
                  </div>
                </div>
              );
            })
          ) : (
            <p style={{ textAlign: "center", width: "100%" }}>
              No services available at the moment.
            </p>
          )
        }
      </div>
    </section>
  );
};
