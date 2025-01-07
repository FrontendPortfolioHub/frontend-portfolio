import { useNavigate } from "react-router-dom";

export const BackLink = () => {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate(-1)} className="back__link text-accent" to="/">
      back...
    </button>
  );
};
