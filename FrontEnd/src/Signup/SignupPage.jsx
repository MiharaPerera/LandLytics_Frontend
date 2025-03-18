import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SignupPage.module.css";
import SignupForm from "./SignupForm";
import LeftSection from "./LeftSection";

function SignupPage() {
  const navigate = useNavigate();

  return (
      <div>
          <div className={styles.signupContainer}>
              <div className={styles.signupCard}>
                  <div className={styles.imageSection}>
                      <img src="/assets/loginSignupImage.png" alt="Signup Background"/>
                      <div className={styles.overlay}>
                          <img src="/assets/Light%20BG%20JPG.png" alt="Logo" className={styles.logoImage}/>
                          <p className={styles.tagline}>
                              Plan your property dreams
                              <br/>
                              with confidence...
                          </p>
                      </div>
                  </div>
                  <SignupForm/>
              </div>
          </div>
          <p className={styles.loginRedirect}>
              Already have an account?{" "}
              <span className={styles.loginLink} onClick={() => navigate("/login")}>
              Login here
            </span>
          </p>
      </div>
  );
}

export default SignupPage;
