import { useState } from "react";

const ReviewForm = ({ imdbID }: { imdbID?: string }) => {
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(5);

  const submitReview = async () => {
    await fetch("http://localhost:5000/api/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ imdbID, review, rating }),
    });

    setReview("");
  };

  return (
    <div>
      <h3>Add Review</h3>
      <textarea
        value={review}
        onChange={(e) => setReview(e.target.value)}
      />
      <br />
      <input
        type="number"
        min="1"
        max="10"
        value={rating}
        onChange={(e) => setRating(Number(e.target.value))}
      />
      <br />
      <button onClick={submitReview}>Submit</button>
    </div>
  );
};

export default ReviewForm;
