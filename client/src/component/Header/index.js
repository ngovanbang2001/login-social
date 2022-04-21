import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";
function Header() {
  const { currentUser } = useAuth();
  console.log(currentUser);
  const avatarDefault =
    "https://user-images.githubusercontent.com/62241342/162770639-ef95ccb6-98df-40e3-b99b-739bb1e4213e.png";
  const logout = () => {
    window.open("http://localhost:5000/auth/logout", "_self");
  };
  return (
    <div className="bg-[#48dbfb] h-[60px] flex items-center justify-around text-white ">
      <div className="text-2xl font-bold">
        <Link to="/">Bilis App</Link>
      </div>
      {currentUser ? (
        <div className="flex justify-center items-center">
          <div className="flex flex-col items-center mx-4">
            {" "}
            <img
              src={
                currentUser.photos ? currentUser.photos[0].value : avatarDefault
              }
              alt=""
              className="w-[30px] h-[30px] rounded-2xl"
            />
            <h1>{currentUser.displayName || currentUser.username}</h1>
          </div>
          <div className="text-lg mx-4 cursor-pointer" onClick={logout}>
            Logout
          </div>
        </div>
      ) : (
        <div>
          <Link to="/login">Login</Link>
        </div>
      )}
    </div>
  );
}
export default Header;
