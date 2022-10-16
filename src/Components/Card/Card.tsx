import "./Card.scss";

export enum CardSizes {
  small = "small",
  regular = "regular",
}

interface CardProps {
  image: string;
  size?: CardSizes;
}

export function Card({ image, size = CardSizes.small }: CardProps) {
  return (
    <div className="card">
      <img
        className={`card__image --${size}`}
        src={image}
        alt="A playing card."
      />
    </div>
  );
}
