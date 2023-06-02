import { useContext, useEffect, useRef, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const captchaRef = useRef(null);

  const [disabled, setdisabled] = useState(true);

  const { signIn } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };

  const handleValidateCaptcha = () => {
    const user_captcha_value = captchaRef.current.value;

    if (validateCaptcha(user_captcha_value)) {
      console.log("okay");
      setdisabled(false);
    }

    // else {
    //   console.log("Not okay");
    //   setdisabled(true);
    // }
  };

  useEffect(() => {
    loadCaptchaEnginge(2);
  }, []);

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Login</title>
      </Helmet>

      <div className="hero min-h-screen bg-red-200 gap-10">
        <div className="hero-content flex-col md:flex-row-reverse">
          <div className="text-center md:w-1/2  lg:text-left shadow-xl drop-shadow-xl p-10 rounded-2xl bg-green-100">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>

          <div className="card md:w-1/2 max-w-sm shadow-2xl bg-green-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              {/* 


 */}
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  type="text"
                  ref={captchaRef}
                  placeholder="Type the captcha above"
                  name="captcha"
                  className="input input-bordered"
                />

                <button
                  onClick={handleValidateCaptcha}
                  className="items-center btn w-24 btn-outline btn-xs mt-5 hover:bg-[#1c201e] hover:text-white mx-auto"
                >
                  Validate
                </button>
              </div>
              {/* 


 */}
              <div className="form-control mt-6">
                <input
                  disabled={disabled}
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <p className="text-center">
              <small>
                New Here?{" "}
                <Link
                  className=" hover:bg-[#1c201e] hover:text-white   btn btn-xs my-5 w-24 mx-auto"
                  to="/sign-up"
                >
                  Sign Up
                </Link>
              </small>{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
