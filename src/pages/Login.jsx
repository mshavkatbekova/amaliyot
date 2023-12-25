import { Link } from "react-router-dom";
import LoginBgVideo from "../videos/login-video-bg.mp4";
import { useRef } from "react";
import { useLogin } from "../hooks/useLogin";

function Login() {
  const email = useRef();
  const password = useRef();
  const form = useRef();

  const { isPending, error, login, enterWithGoogle } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();

    login(email.current.value, password.current.value);
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
        src={LoginBgVideo}
      ></video>
      <div className="grid place-items-center text-white h-screen bg-black bg-opacity-50 w-full">
        <div className="bg-white bg-opacity-60 rounded-md p-8 max-w-md w-full">
          <h1 className="text-3xl text-black text-center mb-4">Login</h1>
          <form
            ref={form}
            onSubmit={handleSubmit}
            className="flex flex-col gap-5"
          >
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
              {isPending ? "Loading..." : "Login"}
            </button>
            <button
              onClick={handleEnterWithGoogle}
              className="btn bg-slate-800 font-bold"
            >
              Google
            </button>
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
