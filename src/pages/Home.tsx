import Category from "../molecules/Category";
import CategoryText from "../molecules/CategoryText";
import Everlane from "../molecules/Everlane";
import Favourite from "../molecules/Favourite";
import Gift from "../molecules/Gift";
import Hero from "../molecules/Hero";
import LearnMore from "../molecules/LearnMore";
import Review from "../molecules/Review";
import Shipping from "../molecules/Shipping";

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
        <Review />
        <Gift />
        <Everlane />
        <Shipping />
      </div>
    </>
  );
};

export default Home;
