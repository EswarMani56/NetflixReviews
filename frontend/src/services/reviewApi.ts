const BASE_URL = "http://localhost:5000/api/reviews";

export const getReviews = async (imdbID: string) => {
  const res = await fetch(`${BASE_URL}/${imdbID}`);
  return res.json();
};

export const addReview = async (review: {
  imdbID: string;
  movieName: string;
  rating: number;
  comment: string;
}) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(review),
  });

  return res.json();
};
