import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import "./style.css";
import tnuhdb_logo from "./tnuhdb_logo.png";
function Login() {
  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required("Username is required")
      .min(6, "Username must be at least 6 characters")
      .max(20, "Username must not exceed 20 characters"),

    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(40, "Password must not exceed 40 characters"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });

  const onSubmit = (data) => {
    console.log(JSON.stringify(data, null, 2));
  };

  return (
    <div class="row m-0 mh-100">
      <div class="col-xl-4"></div>
      <div class="col-xl-4">
        <img src={tnuhdb_logo} width="500" height="70" />
        <div class="col-md-12 mt-100 application-label">
          <h1 class="make-small-font  text-center" style={{ color: "#4f2d7f" }}>
            Housing Need Assessment and Data Management System
          </h1>
        </div>
        <div class="card mt-5">
          <div class="card-header p-0 header-color">
            <h2 class="card-title mb-0 text-white text-center align-middle">
              LOGIN
            </h2>
          </div>
          <div class="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div class="mb-3">
                <div class="input-group mb-3 ">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="username"
                    aria-label="Recipient's username"
                    aria-
                    describedby="basic-addon2"
                    {...register("username")}
                    className={`form-control ${
                      errors.username ? "is-invalid" : ""
                    }`}
                  />

                  <span class="input-group-text" id="basic-addon2">
                    <i class="fas fa-user"></i>
                  </span>
                  <div className="invalid-feedback">
                    {errors.username?.message}
                  </div>
                </div>
              </div>
              <div class="mb-3">
                <div class="input-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="password"
                    aria-label="Recipient's username"
                    aria-
                    describedby="basic-addon2"
                    {...register("password")}
                    className={`form-control ${
                      errors.password ? "is-invalid" : ""
                    }`}
                  />

                  <span class="input-group-text" id="basic-addon2">
                    <i class="fas fa-lock"></i>
                  </span>
                  <div className="invalid-feedback">
                    {errors.password?.message}
                  </div>
                </div>
              </div>

              <div className="d-grid mt-2">
                <button
                  className="btn btn-warning fw-500 rounded-0 text-white submit fontandsize m-auto w-25"
                  id="form_submit"
                  type="submit"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="col-xl-4"></div>
    </div>
  );
}

export default Login;
