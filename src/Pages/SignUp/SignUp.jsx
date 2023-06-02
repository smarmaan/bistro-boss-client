import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
    });
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Sign Up</title>
      </Helmet>

      <div className="hero min-h-screen bg-[url('https://i.pinimg.com/originals/e2/5b/2f/e25b2fa0d4c97f6e4ebf5dff3eb9a45d.jpg')] gap-10  bg-cover">
        <div className="hero-content flex-col md:flex-row-reverse">
          <div className="text-center md:w-1/2  lg:text-left shadow-xl drop-shadow-xl p-10 rounded-2xl bg-green-100">
            <h1 className="text-5xl font-bold">Sign Up</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>

          {/* 






 */}

          <div className="card text-white md:w-1/2 max-w-sm shadow-2xl  bg-[url('https://t4.ftcdn.net/jpg/05/51/93/35/360_F_551933523_nBWNQeC6vA8sDE6DDDQeo3YmSRQnlOjN.jpg')]   bg-cover drop-shadow-2xl ">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  name="name"
                  {...register("name", { required: true })}
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-600">Name is required</span>
                )}
              </div>

              {/* 






 */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="Type here"
                  name="email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-600">Email is required</span>
                )}
              </div>

              {/* 






 */}

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  placeholder="Enter your password"
                  name="password"
                  className="input input-bordered"
                />

                {errors.password?.type === "required" && (
                  <span className="text-red-600">Password is required</span>
                )}

                {errors.password?.type === "minLength" && (
                  <span className="text-red-600">
                    Password must be 6 characters long
                  </span>
                )}

                {errors.password?.type === "maxLength" && (
                  <span className="text-red-600">
                    Password must be less than 20 characters long
                  </span>
                )}

                {errors.password?.type === "pattern" && (
                  <span className="text-red-600">
                    Password must have one of uppercase, lowercase , number
                    special character.
                  </span>
                )}
              </div>

              {/* 






 */}

              <div className="form-control mt-6">
                <input
                  className="btn btn-primary  hover:bg-[#1c201e] hover:text-white "
                  type="submit"
                  value="Sign Up"
                />
              </div>

              {/* 






 */}
            </form>
            <p className="text-center">
              <small>
                Already registered? Go to{" "}
                <Link
                  className=" hover:bg-[#1c201e] hover:text-white   btn btn-xs my-5 w-24 mx-auto"
                  to="/login"
                >
                  Login
                </Link>
              </small>{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
