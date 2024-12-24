import './FeaturesItem';

export const FeaturesItem = ({ title, features }) => {
  return (
    <>
      <div className="features-item__top">
        <p className="feature__title text-accent">{title}</p>
      </div>
      <div className="feature__content">
        <ul className="feature-content__list">
          {features.map((feature) => (
            <li key={feature} className="feauture-content__item">
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
