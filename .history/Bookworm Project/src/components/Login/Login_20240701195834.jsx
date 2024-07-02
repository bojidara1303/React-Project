export default function Login() {
    return (
        <section className="login-page">
            <form className="login">
                <div className="login-left">
                    <h1>Login</h1>
                    <input type="text" placeholder="Enter your email" />
                    <input type="password" placeholder="Enter your password" />
                    <p className="to-register">If you don't have profile click <a href="">here</a>
                    </p>
                    <button className="login-btn">Login</button>
                </div>
                <div className="login-right">
                    <img src="./public/images/1.jpg" alt="1" />
                </div>
            </form>
        </section>
    );
}