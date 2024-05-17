import useAuthContext from "../Hook/useAuthContext";

const SocialLogin = () => {
    const {googleLogin, githubLogin}= useAuthContext()
    return (
        <div className="flex gap-3 justify-around">
            <button onClick={() =>googleLogin()} className="btn btn-primary">Google</button>
            <button onClick={() =>githubLogin()} className="btn btn-primary">Github</button>
        </div>
    );
};

export default SocialLogin;