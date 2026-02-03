import { useEffect, useState } from "react";

const ReviewList = ({ imdbID }: { imdbID?: string }) => {
  const [reviews, setReviews] = useState<any[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/reviews")
      .then((res) => res.json())
      .then((data) =>
        setReviews(data.filter((r: any) => r.imdbID === imdbID))
      );
  }, [imdbID]);

  return (
    <div>
      <h3>Reviews</h3>
      {reviews.map((r, i) => (
        <div key={i}>
          ⭐ {r.rating} / 10
          <p>{r.review}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewList;
