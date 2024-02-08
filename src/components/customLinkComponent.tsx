import { Link } from "react-router-dom";

const CustomLinkComponent = ({
  toRoute,
  text,
}: {
  toRoute: string;
  text: string;
}) => {
  return (
    <Link
      to={toRoute}
      className="text-xs hover:border-b-[2px] border-white md:text-base"
    >
      {text}
    </Link>
  );
};

export default CustomLinkComponent;
