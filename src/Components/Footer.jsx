import logo from "../assets/images/Logo.png";

const Footer = () => {
  return (
    <div className="flex justify-center gap-3 items-center bg-red-100 py-4">
      <img src={logo} alt="logo" style={{ width: "40px", height: "40px" }} />
      <p className=" font-bold pt-4">Keep Your self Sharp</p>
    </div>
  );
};

export default Footer;
