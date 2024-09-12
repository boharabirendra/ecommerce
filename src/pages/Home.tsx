import Category from "../molecules/Category";
import CategoryText from "../molecules/CategoryText";
import Favourite from "../molecules/Favourite";
import Hero from "../molecules/Hero";
import LearnMore from "../molecules/LearnMore";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="main__container">
        <Category />
        <CategoryText
          src="/image.png"
          text="Show now"
          buttonText="SHOP THE LATEST"
        />
        <LearnMore />
        <Favourite />
      </div>
    </>
  );
};

export default Home;
