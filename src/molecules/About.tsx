import Image from "../atoms/Image";

const About = () => {
  return (
    <div className="about">
      <div className="about__hero">
        <div className="about__hero__content d-flex align-items-center">
          <h1 className="about__hero__content--title">
            We believe we can all make a difference.
          </h1>
          <p className="about__hero__content--text">
            Our way: Exceptional quality. Ethical factories. Radical
            Transparency.
          </p>
        </div>
      </div>
      <div className="about__description d-flex justify-content-center">
        <p>
          At Everlane, we want the right choice to be as easy as putting on a
          great T-shirt. That’s why we partner with the best, ethical factories
          around the world. Source only the finest materials. And share those
          stories with you—down to the true cost of every product we make. It’s
          a new way of doing things. We call it Radical Transparency.
        </p>
      </div>

      <div className="about__companyinfo">
        <Image src="/factory.png" />
        <div className="about__companyinfo__service d-flex">
          <h3 className="about__companyinfo__service--name">OUR FACTORIES</h3>
          <h1 className="about__companyinfo__service--title">
            Our ethical approach.
          </h1>
          <p className="about__companyinfo__service--text">
            We spend months finding the best factories around the world—the same
            ones that produce your favorite designer labels. We visit them often
            and build strong personal relationships with the owners. Each
            factory is given a compliance audit to evaluate factors like fair
            wages, reasonable hours, and environment. Our goal? A score of 90 or
            above for every factory.
          </p>
        </div>
      </div>

      <div className="about__service__img">
        <Image src="/aboutmiddle.png" />
      </div>

      <div className="about__companyinfo d-flex">
        <div className="about__companyinfo__service d-flex">
          <h3 className="about__companyinfo__service--name">OUR QUALITY</h3>
          <h1 className="about__companyinfo__service--title">
            Designed to last.
          </h1>
          <p className="about__companyinfo__service--text">
            At Everlane, we’re not big on trends. We want you to wear our pieces
            for years, even decades, to come. That’s why we source the finest
            materials and factories for our timeless products— like our Grade-A
            cashmere sweaters, Italian shoes, and Peruvian Pima tees.
          </p>
        </div>
        <Image src="/about1.png" />
      </div>

      <div className="about__service__img">
        <Image src="/about2.png" />
      </div>

      <div className="about__companyinfo d-flex">
        <Image src="/about3.png" />
        <div className="about__companyinfo__service d-flex">
          <h3 className="about__companyinfo__service--name">OUR PRICES</h3>
          <h1 className="about__companyinfo__service--title">
            Radically Transparent.
          </h1>
          <p className="about__companyinfo__service--text">
            We believe our customers have a right to know how much their clothes
            cost to make. We reveal the true costs behind all of our
            products—from materials to labor to transportation—then offer them
            to you, minus the traditional retail markup.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
