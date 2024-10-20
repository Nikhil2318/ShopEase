import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./About.css";
function About() {
  return (
    <>
      <div className="story">
        <div className="story-text">
          <h1>Our Story</h1>
          <p>
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.{" "}
          </p>
          <p>
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>
        <div className="story-image">
          <img src="./icons/Story-Image.png" alt="Story Image" />
        </div>
      </div>

      <div className="fixuters">
        <div className="fixture-box">
          <div className="fixture-img">
            <img src="./icons/icon_shop.png" alt="Fixuters 1" />
          </div>
          <h2>10.5k</h2>
          <p>Sallers active at our site</p>
        </div>

        <div className="fixture-box">
          <div className="fixture-img money">
            <img src="./icons/Icon-Money.png" alt="Fixuters 1" />
          </div>
          <h2>33k</h2>
          <p>Sallers active at our site</p>
        </div>
        <div className="fixture-box">
          <div className="fixture-img">
            <img src="./icons/Icon-Shopping-bag.png" alt="Fixuters 1" />
          </div>
          <h2>45.5k</h2>
          <p>Sallers active at our site</p>
        </div>

        <div className="fixture-box">
          <div className="fixture-img">
            <img src="./icons/Icon-Moneybag.png" alt="Fixuters 1" />
          </div>
          <h2>25k</h2>
          <p>Sallers active at our site</p>
        </div>
      </div>

      <div className="team">
        <div className="team-member">
          <div className="human-img">
            <img src="./icons/human1.png" alt="Team Member 1" />
          </div>
          <h2>John Doe</h2>
          <p>CEO, Exclusive</p>
        </div>

        <div className="team-member">
          <div className="human-img">
            <img src="./icons/human2.png" alt="Team Member 2" />
          </div>
          <h2>Jane Smith</h2>
          <p>Marketing Manager</p>
        </div>

        <div className="team-member">
          <div className="human-img">
            <img src="./icons/human3.png" alt="Team Member 3" />
          </div>
          <h2>Alice Johnson</h2>
          <p>Product Manager</p>
        </div>
        <div className="team-member">
          <div className="human-img">
            <img src="./icons/human1.png" alt="Team Member 3" />
          </div>
          <h2>Alice Johnson</h2>
          <p>Product Manager</p>
        </div>
      </div>
    </>
  );
}

export default About;
