import CustomLinkComponent from "./customLinkComponent";
import { GiSpikedDragonHead } from "react-icons/gi";

const HeaderComponent = () => {
  return (
    <nav
      data-testid="header-component"
      className="absolute md:fixed w-full flex flex-row gap-3 h-16 justify-evenly items-center top-0 text-white  px-6 lg:px-24 font-montserrat text-xs md:text-sm font-light bg-gray-900 uppercase  z-10"
    >
    <div className="flex flex-row justify-center items-center gap-4">
        <GiSpikedDragonHead
        fontSize={60}
        />
        <p className="text-4xl font-raleway">
            Library: Ice And Fire
        </p>
    </div>
      <div className="flex flex-row gap-4">
          <CustomLinkComponent toRoute="/"  text="All Books"/>
          <CustomLinkComponent toRoute="/favorites" text="Favorites"/>
          <CustomLinkComponent toRoute="/add-book" text="Add Book"/>
      </div>
    </nav>
  );
};

export default HeaderComponent;
