import { Link } from "react-router-dom";
import SignupBgVideo from "../videos/signup-bg-video.mp4";

function Signup() {
  return (
    <div className="h-screen relative">
      <video
        muted
        autoPlay
        loop
        className="absolute h-screen w-screen object-cover z-[-1]"
        src={SignupBgVideo}
      ></video>
      <div className="grid place-items-center text-white h-screen bg-black bg-opacity-50 w-full">
        <div className="bg-white bg-opacity-60 rounded-md p-8 max-w-md w-full">
          <h1 className="text-3xl text-black text-center mb-4">Signup</h1>
          <form className="flex flex-col gap-5">
            <label className="form-label">
              <span>Name:</span>
              <input type="text" placeholder="Your name" />
            </label>
            <label className="form-label">
              <span>Email:</span>
              <input type="email" placeholder="Your email" />
            </label>
            <label className="form-label">
              <span>Password:</span>
              <input type="password" placeholder="Your password" />
            </label>
            <button className="btn bg-cyan-400 font-bold">Signup</button>
            <Link
              to="/login"
              className="btn bg-emerald-500 text-center font-bold"
            >
              Login
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
