import React from "react";

const Login = () => {
    return (
        <div>
    <div className="card">
        <h5 className="card-header info-color white-text text-center py-4">
          <strong>Sign in</strong>
        </h5>
        {/*Card content*/}
        <div className="card-body px-lg-5 pt-0">
          {/* Form */}
          <form className="text-center" style={{color: '#757575'}} action="#!">
            {/* Email */}
            <div className="md-form">
              <input type="email" id="materialLoginFormEmail" className="form-control" />
              <label htmlFor="materialLoginFormEmail">E-mail</label>
            </div>
            {/* Password */}
            <div className="md-form">
              <input type="password" id="materialLoginFormPassword" className="form-control" />
              <label htmlFor="materialLoginFormPassword">Password</label>
            </div>
            <div className="d-flex justify-content-around">
              <div>
                {/* Remember me */}
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="materialLoginFormRemember" />
                  <label className="form-check-label" htmlFor="materialLoginFormRemember">Remember me</label>
                </div>
              </div>
              <div>
                {/* Forgot password */}
                <a href>Forgot password?</a>
              </div>
            </div>
            {/* Sign in button */}
            <button className="btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0" type="submit">Sign in</button>
            {/* Register */}
            <p>Not a member?
              <a href>Register</a>
            </p>
            {/* Social login */}
            <p>or sign in with:</p>
            <a type="button" className="btn-floating btn-fb btn-sm">
              <i className="fab fa-facebook-f" />
            </a>
            <a type="button" className="btn-floating btn-tw btn-sm">
              <i className="fab fa-twitter" />
            </a>
            <a type="button" className="btn-floating btn-li btn-sm">
              <i className="fab fa-linkedin-in" />
            </a>
            <a type="button" className="btn-floating btn-git btn-sm">
              <i className="fab fa-github" />
            </a>
          </form>
          {/* Form */}
        </div>
      </div>
        </div>
    );
};

export default Login;