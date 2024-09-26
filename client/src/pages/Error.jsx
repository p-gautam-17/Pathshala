import { NavLink } from "react-router-dom";

export const Error = () =>
{
    return (<>
      <section id="error-page">
        <div className="content">
            <h2 className="header">404</h2>
            <h4 className="err-h4">Sorry! Page not found</h4>
            <p className="err-p">
                Oops! It seems like the page you are trying to acess does not exist.
                If you believe there is an issue, feel free to report it, and we will
                look into it.
            </p>
            <div>
                <button className="btns"><NavLink to="/">return home</NavLink></button>
               
               <button className="btns sec-btns"><NavLink to="/contact">report problem</NavLink></button>
            </div>
        </div>

      </section>

    </>);
}