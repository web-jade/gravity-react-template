import React, { Component } from 'react';
import styles from './Home.module.css';
import './Home.css';

import Lead from "../../blocks/Lead/Lead";
import ProblemsSolve from "../../blocks/ProblemsSolve/ProblemsSolve";
import Services from "../../blocks/Services/Services";

class Home extends Component {
  render() {
    return (
      <main className="Home">
        <div className={styles.lead}>
          <Lead
            heading="Work around you and your team"
            description="From ads that dance or sing to MTV-like commercials, online advertisers are now using a new type of technology “rich media” to attract consumers."
          />
        </div>
        <div className={styles.problemsSolve}>
          <ProblemsSolve
            heading="We solve digital problems with an outstanding creative flare"
            content={
              [
                "The best time to view the moon, obviously, is at night when there are few clouds and the weather is accommodating for a long and lasting study.",
                "For most of us, the idea of astronomy is something we directly connect to “stargazing”, telescopes and seeing magnificent displays in the heavens."
              ]
            }
          />
        </div>
        <div className={styles.services}>
          <Services
            heading="We love work hard and explore new things that’s why we cover lot of things. Check our service list and view details"
            categories={[
              "Multimedia",
              "Creative Strategy",
              "Interactive design",
              "UI/UX",
              "Packaging",
              "Coding",
              "Branding"
            ]}
            slider={[
              {
                id: 0,
                url: "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2249&q=100",
                alt: "Image",
                category: "Multimedia"
              },
              {
                id: 1,
                url: "https://images.unsplash.com/photo-1519974719765-e6559eac2575?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=100",
                alt: "Image",
                category: "Creative Strategy"
              },
              {
                id: 2,
                url: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=100",
                alt: "Image",
                category: "Interactive design"
              },
              {
                id: 3,
                url: "https://images.unsplash.com/photo-1484101403633-562f891dc89a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2253&q=100",
                alt: "Image",
                category: "UI/UX"
              },
              {
                id: 4,
                url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=100",
                alt: "Image",
                category: "Packaging"
              },
              {
                id: 5,
                url: "https://images.unsplash.com/photo-1489171078254-c3365d6e359f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3289&q=100",
                alt: "Image",
                category: "Coding"
              },
              {
                id: 6,
                url: "https://images.unsplash.com/photo-1495433324511-bf8e92934d90?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=100",
                alt: "Image",
                category: "Branding"
              }
            ]}
          />
        </div>
      </main>
    );
  }
}

export default Home;
