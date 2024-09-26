import { useAuth } from "../source/auth";

export const Services = () => {
   
    const {services} = useAuth();

    return (
        
        <section className="section-services">
            <div className="container">
                <h1 className="main-heading">Services</h1>
            </div>
            <div className="container grid grid-three-cols">
                {
                    services.map((currElem,index)=>{
                        const {price,description,instructor,title}=currElem;

                        return (
                            <div className="card" key={index}>
                            <div className="card-img">
                                <img src="/images/login.jpg" alt="our service info"
                                width="500" />
                                <div className="card-details">
                                    <div className="grid grid-two-cols">
                                        <p>{instructor}</p>
                                        <p>${price}</p>
                                    </div>
                                    <h2>{title}</h2>
                                    <p>{description}</p>
                                </div>
                            </div>
                        </div>
                        );
                    })
                }
               
            </div>
        </section>
    );
};