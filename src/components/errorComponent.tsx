import { Link } from "react-router-dom";

const ErrorComponent = () => {
    const errorImg = "https://media.istockphoto.com/id/1269245576/vector/vector-concept-illustration-of-page-error-404.jpg?s=170667a&w=0&k=20&c=emKYALdPjbcZr-SUyIhy4ZJ2a02VShVE46WV9-qqxkE=";
  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center gap-7 m-1">
      <img src={errorImg} alt="" />
      <p className="first-letter:uppercase text-center font-lato text-gray-950 text-lg md:text-3xl font-semiboldr">Oops! It looks like the page you're looking for doesn't exist.</p>
      <p className="text-base lg:text-lg font-semibold">Check the URL for typos and try again.</p>
      <Link to={"/"} className="red-btn w-1/2 lg:w-[80%]  bg-gray-900">Return to Homepage</Link>
    </section>
  );
};

export default ErrorComponent;
