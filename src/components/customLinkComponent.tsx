import { Link } from "react-router-dom";

const CustomLinkComponent = ({
  toRoute,
  text,
}: {
  toRoute: string;
  text: string;
}) => {
  return (
    <Link to={toRoute} className="hover:border-b-[2px] border-white text-base">
      {text}
    </Link>
  );
};

export default CustomLinkComponent;
