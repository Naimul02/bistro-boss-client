const MenuItem = ({ item }) => {
  const { image, price, recipe, name } = item;
  return (
    <div className="flex space-x-2">
      <img
        src={image}
        alt=""
        style={{ borderRadius: "0 200px 200px 200px" }}
        className="w-[100px]"
      />
      <div>
        <h1>{name} ----------</h1>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow-500">${price}</p>
    </div>
  );
};

export default MenuItem;
