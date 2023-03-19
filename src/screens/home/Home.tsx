import React from "react";

import { DATA } from "../../data/data";
import Card from "../../components/card/Card";

import "./Home.css";

type HomeProps = {
  advice: string;
};

class Home extends React.Component<HomeProps> {
  render(): JSX.Element {
    const { advice } = this.props;
    return (
      <div data-testid="main-page">
        <div className="home__wrapper">
          <div className="home__card">
            {DATA.map((card) => {
              return (
                <Card
                  key={card.id}
                  image={card.image}
                  title={card.title}
                  author={card.author}
                  description={card.description}
                  location={card.location}
                  likes={card.likes}
                  requirements={card.requirements}
                />
              );
            })}
          </div>
          <div className="home__text">
            <div className="home__advice">{advice}</div>
            <div className="home__img"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
