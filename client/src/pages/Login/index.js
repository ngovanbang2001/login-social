import Social from "./../../component/Social/index";
import { useForm } from "react-hook-form";
import Axios from "axios";
import { useAuth } from "../../context/AuthProvider";
function Login() {
  const { register, handleSubmit } = useForm();
  const { signIn } = useAuth();
  const onSubmit = async (data) => {
    await signIn(data);
  };
  const socials = [
    {
      name: "Google",
      Google: () => {
        window.open("http://localhost:5000/auth/google", "_self");
      },
      color: "bg-[#ee5253]",
      img: (
        <img
          src="https://img.icons8.com/color/32/000000/google-logo.png"
          alt=""
        />
      ),
    },
    {
      name: "Facebook",
      Facebook: () => {
        window.open("http://localhost:5000/auth/facebook", "_self");
      },
      color: "bg-[#0abde3]",
      img: (
        <img
          src="https://img.icons8.com/color/32/000000/facebook-new.png"
          alt=""
        />
      ),
    },
    {
      name: "Github",
      Github: () => {
        window.open("http://localhost:5000/auth/github", "_self");
      },
      color: "bg-[#000]",
      img: (
        <img
          src="https://img.icons8.com/color/32/000000/github--v1.png"
          alt=""
        />
      ),
    },
  ];
  return (
    <div className="flex  justify-center ">
      <div className="flex w-[600px] h-[400px] rounded-xl  mt-12 pt-16  shadow-lg shadow-[rgba(0,0,0,0.2)]">
        <div className="flex-1 text-center flex flex-col items-center pt-12">
          {socials.map((social, index) => (
            <Social key={index} social={social} />
          ))}
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex-1 text-center border-l-2 pt-12"
        >
          <input
            className="px-2 border my-2"
            type="text"
            name="username"
            {...register("username")}
            placeholder="Username"
          />
          <br />
          <input
            className="px-2 border my-2"
            name="password"
            type="password"
            {...register("password")}
            placeholder="Password"
          />
          <br />
          <button className="py-[5px] w-[200px] my-2  bg-[#48dbfb] text-white font-bold ">
            {" "}
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
export default Login;
