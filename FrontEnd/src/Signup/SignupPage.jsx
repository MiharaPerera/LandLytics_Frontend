import React from "react";
import { useNavigate } from "react-router-dom";

function SignupPage() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Signup</h2>
      <button onClick={() => navigate("/about")}>Go to About</button>
    </div>
  );
}

export default SignupPage;
