import useAuthContext from "../Hook/useAuthContext";

const SocialLogin = () => {
    const {googleLogin, githubLogin}= useAuthContext()
    return (
        <div className="flex gap-3 justify-around pb-5 ">
            <button onClick={() =>googleLogin()} className="btn btn-outline btn-primary btn-sm">Google</button>
            <button onClick={() =>githubLogin()} className="btn btn-outline btn-primary btn-sm">Github</button>
        </div>
    );
};

export default SocialLogin;