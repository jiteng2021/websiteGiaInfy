import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../firebaseConfig";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export default function Login() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const provider = new GoogleAuthProvider();
  const loginWithGmail = async () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <section class="mb-5">
      <div class="container-fluid h-custom mt-5 ">
        <div class="row d-flex justify-content-center align-items-center ">
          <div class="col-md-9 col-lg-6 col-xl-5 mt-5">
            <img src="images/draw2.png" class="img-fluid" alt="Sample image" />
          </div>
          <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form>
              {/* <!-- Email input --> */}
              <div class="form-outline mb-4 mt-5">
                {/* <div class="form-outline mb-4"> */}
                <input
                  type="email"
                  id="form3Example3"
                  class="form-control form-control-lg"
                  placeholder="Enter a valid email address"
                  onChange={(event) => {
                    setLoginEmail(event.target.value);
                  }}
                />
              </div>

              {/* <!-- Password input --> */}
              <div class="form-outline mb-3">
                <input
                  type="password"
                  id="form3Example4"
                  class="form-control form-control-lg"
                  placeholder="Enter password"
                  onChange={(event) => {
                    setLoginPassword(event.target.value);
                  }}
                />
              </div>

              <div class="d-flex justify-content-between align-items-center">
                {/* <!-- Checkbox --> */}
                <div class="form-check mb-0">
                  <input
                    class="form-check-input me-2"
                    type="checkbox"
                    value=""
                    id="form2Example3"
                  />
                  <label class="form-check-label" for="form2Example3">
                    Remember me
                  </label>
                </div>
                <a href="#!" class="text-body">
                  Forgot password?
                </a>
              </div>

              <div class="text-center text-lg-start mt-4 pt-2">
                <button
                  type="button"
                  class="btn btn-primary btn-lg"
                  style={{ fontSize: "15px" }}
                  onClick={login}
                >
                  Login
                </button>

                {/* Login using social media code  */}
                <div
                  style={{
                    width: "100%",
                    height: "20px",
                    borderBottom: "1px solid black",
                    textAlign: "center",
                  }}
                >
                  <span
                    style={{ fontSize: "15px", backgroundColor: "#F3F5F6" }}
                  >
                    or Login with
                  </span>
                </div>

                <div class="mt-3">
                  <a
                    class=" btn"
                    style={{
                      backgroundColor: "#3B5998",
                      color: "white",
                      fontSize: "12px",
                    }}
                  >
                    <i class="fa fa-facebook "></i> Facebook
                  </a>

                  <a
                    class=" btn mx-3"
                    style={{
                      backgroundColor: "#dd4b39",
                      color: "white",
                      fontSize: "12px",
                    }}
                    onClick={loginWithGmail}
                  >
                    <i class="fa fa-google"></i> Google
                  </a>

                  <a
                    class="twitter btn"
                    style={{
                      backgroundColor: "#55ACEE",
                      color: "white",
                      fontSize: "12px",
                    }}
                  >
                    <i class="fa fa-mobile"></i> Mobile
                  </a>
                </div>

                {/* ========================================== */}

                <p class="small fw-bold mt-2 pt-1 mb-0">
                  Don't have an account?{" "}
                  <a href="#!" class="link-danger">
                    Register
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <br />
      <br />
    </section>
  );
}
