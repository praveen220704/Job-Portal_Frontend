import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import userServices from "../services/userServices";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {

    e.preventDefault();

    // perform user login
    userServices.login(email, password)
      .then(response => {
        alert(response.data.message);

        // clear the form
        setEmail("");
        setPassword("");

        // redirect to dashboard page
        setTimeout(() => {
          navigate("/dashboard");
        }, 500);

      })
      .catch(error => {
        alert(error.response.data.message);
      });

  }

  return (
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <div className="card">
                <div className="card-header">
                  Login
                </div>
                <div className="card-body">
                  <form onSubmit={handleLogin}>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" 
                    value={email} onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="form-control" id="password" 
                    value={password} onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
              </form>
              <br />
              <p>Don't have an account? <Link to="/register">Register</Link></p>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Login;