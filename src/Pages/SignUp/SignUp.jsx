import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // console.log(data);
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);

      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          // console.log("user profile info update");

          const saveUser = { email: data.email, name: data.name };

          fetch("http://localhost:5000/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(saveUser),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                reset();
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "User created successfully",
                  showConfirmButton: false,
                  timer: 1500,
                });

                navigate("/");
              }
            });
        })
        .catch((error) => {
          console.error(error);
        });
    });
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Sign Up</title>
      </Helmet>

      <div className="hero min-h-screen bg-[url('https://t4.ftcdn.net/jpg/05/51/93/35/360_F_551933523_nBWNQeC6vA8sDE6DDDQeo3YmSRQnlOjN.jpg')] gap-10  bg-cover">
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

          <div className="card  md:w-1/2 max-w-sm shadow-2xl  bg-[url('https://img.freepik.com/free-vector/white-abstract-background_23-2148817571.jpg?w=996&t=st=1685731093~exp=1685731693~hmac=87761a276a35f19c8d1dcfea9259596a0a277667448e84f254f0b3ec24385288')]   bg-cover drop-shadow-2xl ">
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
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo URL"
                  {...register("photoURL", { required: true })}
                  className="input input-bordered"
                />
                {errors.photoURL && (
                  <span className="text-red-600">Photo URL is required</span>
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
