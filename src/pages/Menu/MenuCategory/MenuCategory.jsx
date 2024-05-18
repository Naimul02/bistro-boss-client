import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, img }) => {
  return (
    <>
      {title && <Cover title={title} img={img} className="mt-16"></Cover>}
      <div className="grid md:grid-cols-2 gap-10 my-12">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </>
  );
};

export default MenuCategory;
