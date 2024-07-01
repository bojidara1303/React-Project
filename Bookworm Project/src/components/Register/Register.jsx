export default function Register(){
    return(
        <section id="register-page">
        <form id="register">
            <div className="register-left">
                <img src="./public/images/2.jpg" alt="2"/>
            </div>
            <div className="register-right">
                <h1>Register</h1>
                <input type="text" placeholder="Enter your email"/>
                <input type="password" placeholder="Enter your password"/>
                <input type="password" placeholder="Confirm your password"/>
                <p className="to-login">If you already have profile click <a href="">here</a>
                </p>
                <button className="register-btn">Register</button>
            </div>
        </form>
    </section>
    )
}