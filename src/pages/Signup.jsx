import { Link } from "react-router-dom";
import SignupBgVideo from "../videos/signup-bg-video.mp4";
import useSignup from "../hooks/useSignup";
import { useRef } from "react";
import { useLogin } from "../hooks/useLogin";

function Signup() {
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const form = useRef();
  const { isPending, error, signup } = useSignup();
  const { enterWithGoogle } = useLogin();
  const handleSubmit = (e) => {
    e.preventDefault();
    signup(name.current.value, email.current.value, password.current.value);

    form.current.reset();
  };

  const handleEnterWithGoogle = (e) => {
    e.preventDefault();
    enterWithGoogle();
  };
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
          <form
            ref={form}
            onSubmit={handleSubmit}
            className="flex flex-col gap-5"
          >
            <label className="form-label">
              <span>Name:</span>
              <input ref={name} type="text" placeholder="Your name" />
            </label>
            <label className="form-label">
              <span>Email:</span>
              <input ref={email} type="email" placeholder="Your email" />
            </label>
            <label className="form-label">
              <span>Password:</span>
              <input
                ref={password}
                type="password"
                placeholder="Your password"
              />
            </label>
            <button className="btn bg-cyan-400 font-bold">
              {isPending ? "Loading..." : "Signup"}
            </button>
            <button
              onClick={handleEnterWithGoogle}
              className="btn bg-slate-800 font-bold"
            >
              Google
            </button>
            <Link
              to="/login"
              className="btn bg-emerald-500 text-center font-bold"
            >
              Login
            </Link>
            {error && <p>{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
