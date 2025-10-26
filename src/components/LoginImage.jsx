import loginIllustration from "../assets/img3.svg";

function LoginImage() {
  return (
    <div className="md:w-3/4 bg-white flex items-center justify-center p-8">
      <img
        src={loginIllustration}
        alt="Educación e informes"
        className="w-96 md:w-[500px] h-auto object-contain"
      />
    </div>
  );
}

export default LoginImage;
