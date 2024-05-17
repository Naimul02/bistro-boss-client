import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";

import PopularMenu from "../../Home/PopularMenu/PopularMenu";

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>

      <Cover
        img={
          "https://www.menubly.com/wp-content/uploads/2023/04/a-la-carte-menu-scaled.jpg"
        }
        title={"Our Menu"}
      ></Cover>
      <PopularMenu></PopularMenu>
      <PopularMenu></PopularMenu>
      <PopularMenu></PopularMenu>
    </div>
  );
};

export default Menu;
