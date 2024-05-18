import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";

const Menu = () => {
  const [menu] = useMenu();
  const offered = menu.filter((item) => item.category === "offered");
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");

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
      <SectionTitle
        heading={"Today's Offer"}
        subHeading={"Don't Miss"}
      ></SectionTitle>

      {/* offered */}
      <MenuCategory items={offered}></MenuCategory>
      {/* desert */}
      <MenuCategory
        items={dessert}
        title={"Dessert"}
        img={dessertImg}
      ></MenuCategory>
      {/* Pizza */}
      <MenuCategory items={pizza} title={"Pizza"} img={pizzaImg}></MenuCategory>
      {/* salad */}
      <MenuCategory items={salad} title={"Salad"} img={saladImg}></MenuCategory>
      {/*soup */}
      <MenuCategory items={soup} title={"Soup"} img={soup}></MenuCategory>
    </div>
  );
};

export default Menu;
