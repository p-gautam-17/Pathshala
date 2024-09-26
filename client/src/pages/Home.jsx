import {Analytics} from "../components/Analytics";

export const Home = () => {
    return (<>
       <main>
        <section className="section-hero">
            <div className="container grid grid-two-cols">
                <div className="hero-content">
                    <p>We are the World Best IT Company</p>
                    <h1>Welcome to Pathshala</h1>
                    <p>
                        Are you ready to take your businees to the next level width
                        cutting-edge IT solutions? Look no further! At Pathshala,
                        we specialise in providing innovative IT services and solutions
                        tailored to meet your unique needs.
                    </p>
                    <div className="btn btn-group">
                        <a href="/contact">
                          <button className="btn">connect now</button>
                        </a>
                        <a href="/services">
                          <button className="btn secondery-btn">learn more now</button>
                        </a>
                    </div>
                </div>

                {/*hero images */}
                <div className="hero-images">
                    <img src="/images/home.jpg"
                     alt="Showing some technlogies"
                     width="500"
                     height="400" />
                </div>
            </div>
        </section>
       </main>
       {/* 2nd Section */}
       <Analytics />

       {/* 3rd Section */}

       <section className="section-hero">
            <div className="container grid grid-two-cols">
                  {/*hero images */}
                  <div className="hero-images">
                    <img src="/images/footer.jpg"
                     alt="Showing some technlogies"
                     width="500"
                     height="400" />
                </div>
                <div className="hero-content">
                    <p>We are the World Best IT Company</p>
                    <h1>Welcome to Pathshala</h1>
                    <p>
                        Ready to take the first step towards a more efficient and secure
                        IT infrastructure? Contact us today for a free consultation and 
                        lets discuss how Pathshala can help your business thrive in
                        the digital age.  
                    </p>
                    <div className="btn btn-group">
                        <a href="/contact">
                          <button className="btn">connect now</button>
                        </a>
                        <a href="/services">
                          <button className="btn secondery-btn">learn more now</button>
                        </a>
                    </div>
                </div>
        </div>
        </section>
    
    </>);
}