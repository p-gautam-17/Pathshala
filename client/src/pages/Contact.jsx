import { useState } from "react";
const apiUrl = "http://localhost:5000/api/form/contact";



export const Contact = () => {

    // using 
    const [user,setUser] = useState({
        username : "",
        email : "",
        message : "",
   });
   

   const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...user,
            [name]: value,
        })
   };

   const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user);
        try {
            const response = await fetch(apiUrl,{
                method:"POST",
                headers : {"Content-Type":"application/json"},
                body : JSON.stringify(user),
            });
           // console.log(response);
            if(response.ok)
            {
                alert("message send sucessfully.");
                const res_data = await response.json();
                console.log(res_data);
                setUser({
                    username : "",
                    email : "",
                    message : "",
               });
            }
        } catch (error) {
            console.log("Message Not Send");
        }
   }


    return (<>
        <section>
        <main>
            <div className="section-registration">
                <div className="container grid grid-two-cols">
                    <div className="cnt-img">
                        <img src="/images/contact us.jpg" alt="a girl is trying to do registration"
                          width="500" height="500" />
                    </div>
                    {/* let tackle contact form */}
                      <div className="registration-form">
                        <h1 className="main-heading mb-3">Write Your Queries Here!</h1>
                        <br/>
                        <form className="contact-us" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="username">username</label>
                                <br />
                                <input
                                type="text"
                                name="username"
                                id="username"
                                required
                                autoComplete="off"
                                value = {user.username}
                                onChange={handleInput} />
                            </div>

                            <div>
                                <label htmlFor="email">email</label>
                                <br/>
                                <input
                                type="email"
                                name="email"
                                id="email"
                                required
                                autoComplete="off"
                                value = {user.email}
                                onChange={handleInput} />
                            </div>

             
                            <div className="message-div">
                                <label htmlFor="message">message</label>
                                <br />
                                <input className="messsage-input"
                                type="text"
                                name="message"
                                id="message"
                                required
                                autoComplete="off"
                                value = {user.message}
                                onChange={handleInput} />
                            </div>

                            <br />
                            <button type="submit" className="btn btn-submit">Send</button>
                        </form>
                      </div>
                </div>
            </div>
        </main>
      </section>
    </>);
}