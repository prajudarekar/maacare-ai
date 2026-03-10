import { useNavigate } from "react-router-dom";
import "../styles/DisclaimerPage.css"; // Custom CSS file
import Header from "./Header";
export default function DisclaimerPage() {
  const navigate = useNavigate();

  const handleAgree = () => {
    navigate("/login"); // redirect to login page
  };

  return (
    <>
    <Header/>
    <div className="disclaimer-container">
      <div className="disclaimer-card">
        <h2>⚠️ Important Disclaimer</h2>
        <p>
          This web app provides general pregnancy information. No medical advice.
          Consult a doctor for serious symptoms.
        </p>
        <button className="agree-btn" onClick={handleAgree}>
          I Agree & Continue
        </button>
      </div>
    </div>
    </>
  );
}
