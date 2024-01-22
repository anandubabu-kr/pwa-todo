import Logo from "./Logo";
import user from "../assets/icons/user.svg";

const Appbar = () => {
  return (
    <div className="flex justify-between px-6">
      <Logo />
      <button className="py-2">
        <img src={user} width={26} height={26} alt="a" />
      </button>
    </div>
  );
};

export default Appbar;
