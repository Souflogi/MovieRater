import Star from "./Star";
import classes from "./StarRating.module.css";

const StarRating = ({ maxRating = 5 }) => {
  return (
    <div className={classes.rating}>
      <div className={classes.stars}>
        {Array.from({ length: maxRating }, (_, i) => (
          <Star key={i} type={"full"} />
        ))}
      </div>
      <p>10</p>
    </div>
  );
};
export default StarRating;
