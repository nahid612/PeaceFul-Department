import { useLocation, useNavigate } from "react-router-dom";
import useAuthContext from "../Hook/useAuthContext";

const SocialLogin = () => {
  const { googleLogin, githubLogin } = useAuthContext();

  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location)
  const from = location?.state || "/";

  const handleSocialLogin = (socialProvider) => {
    socialProvider().then((result) => {
      if (result.user) {
        navigate(from);
        // console.log(result.user)
      }
    });
  };
  return (
    <div className="flex gap-3 justify-around pb-5 ">
      <button
        onClick={() => handleSocialLogin(googleLogin)}
        className="btn btn-outline btn-primary btn-sm"
      >
        Google
      </button>
      <button
        onClick={() => handleSocialLogin(githubLogin)}
        className="btn btn-outline btn-primary btn-sm"
      >
        Github
      </button>
    </div>
  );
};

export default SocialLogin;
