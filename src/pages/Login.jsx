import { Link } from "react-router-dom";
import LoginBgVideo from "../videos/login-video-bg.mp4";

function Login() {
  return (
    <div className="h-screen relative">
      <video
        muted
        autoPlay
        loop
        className="absolute h-screen w-screen object-cover z-[-1]"
        src={LoginBgVideo}
      ></video>
      <div className="grid place-items-center text-white h-screen bg-black bg-opacity-50 w-full">
        <div className="bg-white bg-opacity-60 rounded-md p-8 max-w-md w-full">
          <h1 className="text-3xl text-black text-center mb-4">Login</h1>
          <form className="flex flex-col gap-5">
            <label className="form-label">
              <span>Email:</span>
              <input type="email" placeholder="Your email" />
            </label>
            <label className="form-label">
              <span>Password:</span>
              <input type="password" placeholder="Your password" />
            </label>
            <button className="btn bg-cyan-400 font-bold">Login</button>
            <Link
              to="/signup"
              className="btn bg-emerald-500 text-center font-bold"
            >
              If you don't have any account?
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
