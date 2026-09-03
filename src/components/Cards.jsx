import IconCalculator from "../assets/icon-calculator.svg";
import IconKarma from "../assets/icon-karma.svg";
import IconSupervisor from "../assets/icon-supervisor.svg";
import IconTeamBuilder from "../assets/icon-team-builder.svg";

const CARD_DATA = [
  {
    id: 1,
    icon: IconSupervisor,
    title: "Supervisor",
    description: "Monitors activity to identify project roadblocks",
    theme: "mint",
  },
  {
    id: 2,
    icon: IconTeamBuilder,
    title: "Team Builder",
    description:
      "Scans our talent network to create the optimal team for your project",
    theme: "red",
  },
  {
    id: 3,
    icon: IconKarma,
    title: "Karma",
    description: "Regularly evaluates our talent to ensure quality",
    theme: "orange",
  },
  {
    id: 4,
    icon: IconCalculator,
    title: "Calculator",
    description:
      "Uses data from past projects to provide better delivery estimates",
    theme: "blue",
  },
];

const Cards = () => {
  return (
    <section className="feature-cards" aria-label="Features">
      {CARD_DATA.map((card) => (
        <article
          key={card.id}
          className={`card card--${card.theme}`}
        >
          <div className="card__detail">
            <h2 className="card__header">{card.title}</h2>
            <p className="card__description">{card.description}</p>
          </div>
          <img
            src={card.icon}
            alt=""
            className="card__icon"
            aria-hidden="true"
          />
        </article>
      ))}
    </section>
  );
};

export default Cards;
