import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";
const Featured = () => {
  return (
    <div className="featured-item text-white pt-8 my-20">
      <SectionTitle
        heading="Featured Item"
        subHeading="check it out"
      ></SectionTitle>

      <div className="md:flex items-center justify-center pb-20 pt-12 px-36">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10">
          <p>Aug 20, 2029</p>
          <p className="uppercase">Where can i get some</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla totam
            quaerat possimus qui temporibus assumenda quisquam tempore, minima
            sit consequatur? Eaque aliquid, cumque, delectus magni fuga adipisci
            alias, distinctio doloremque omnis est mollitia rem impedit iste
            excepturi aut expedita veniam nam aspernatur enim accusantium
            consequatur cupiditate itaque dolorem odit? Atque!
          </p>
          <button className="btn btn-outline">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
