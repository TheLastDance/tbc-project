"use client"
import "./StarRate.css"
import { addRating } from "@/services/actions/starRating/add-rating"
import { Check } from "../Icons/Check"
import toast from "react-hot-toast"


export function StarRate({ product_id, rating }: { product_id: number, rating: IProductRating }) {

  const handleRating = async (value: number) => {
    const res = await addRating(value, product_id);
    if (res?.message) toast.success(res.message);
  }

  const isDefaultChecked = (value: number) => {
    const avg = Number(rating.average_points);
    if (avg >= 4.5 || avg === 0) return value === 5;
    if (avg >= 3.5 && avg < 4.5) return value === 4;
    if (avg >= 2.5 && avg < 3.5) return value === 3;
    if (avg >= 1.5 && avg < 2.5) return value === 2;

    return value === 1;
  };

  return (
    <div className="stars">
      <div className="rate">
        <input
          type="radio"
          id="star5"
          name="rate"
          value="5"
          onChange={(e) => handleRating(+e.target.value)}
          defaultChecked={isDefaultChecked(5)}
        />
        <label htmlFor="star5" title="5">5 stars</label>
        <input
          type="radio"
          id="star4"
          name="rate"
          value="4"
          onChange={(e) => handleRating(+e.target.value)}
          defaultChecked={isDefaultChecked(4)}
        />
        <label htmlFor="star4" title="4">4 stars</label>
        <input
          type="radio"
          id="star3"
          name="rate"
          value="3"
          onChange={(e) => handleRating(+e.target.value)}
          defaultChecked={isDefaultChecked(3)}
        />
        <label htmlFor="star3" title="3">3 stars</label>
        <input
          type="radio"
          id="star2"
          name="rate"
          value="2"
          onChange={(e) => handleRating(+e.target.value)}
          defaultChecked={isDefaultChecked(2)}
        />
        <label htmlFor="star2" title="2">2 stars</label>
        <input
          type="radio"
          id="star1"
          name="rate"
          value="1"
          onChange={(e) => handleRating(+e.target.value)}
          defaultChecked={isDefaultChecked(1)}
        />
        <label htmlFor="star1" title="1">1 star</label>
      </div>
      <div className="rating_calculations">
        <span>{Number(rating.average_points).toFixed(2)}</span>
        <span>{` (${rating.rating_count})`}</span>
        {rating?.user_exists ? <span title={`already rated (${rating?.user_point})`}><Check /></span> : null}
      </div>
    </div>
  )
}
