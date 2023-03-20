import React from 'react';
import './About.css';

type AboutProps = {
  title: string;
  message: string;
};

class About extends React.Component<AboutProps> {
  render(): JSX.Element {
    const { title, message } = this.props;
    return (
      <div className="about__page">
        <div className="about__title" data-testid="about-page">
          {title}
        </div>
        <div className="about__img">
          <div className="about__message">{message}</div>
        </div>
      </div>
    );
  }
}

export default About;
