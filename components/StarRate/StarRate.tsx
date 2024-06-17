"use client"
import "./StarRate.css"
import { addRating } from "@/services/actions/starRating/add-rating"
import { Check } from "../Icons/Check"
import toast from "react-hot-toast"


export function StarRate({
  product_id,
  rating,
  card,
  average
}: {
  product_id: number,
  rating?: IProductRating,
  card?: boolean,
  average?: number
}) {

  const avg = Number(rating?.average_points) || Number(average);

  const handleRating = async (value: number) => {
    if (!card) {
      const res = await addRating(value, product_id);
      if (res?.message) toast.success(res.message);
    }
  }

  const isDefaultChecked = (value: number) => {
    if (avg >= 4.5 || avg === 0) return value === 5;
    if (avg >= 3.5 && avg < 4.5) return value === 4;
    if (avg >= 2.5 && avg < 3.5) return value === 3;
    if (avg >= 1.5 && avg < 2.5) return value === 2;

    return value === 1;
  };

  return (
    <div className="stars">
      <div className="rate" style={card ? { pointerEvents: "none" } : undefined}>
        <input
          type="radio"
          id="star5"
          name="rate"
          value="5"
          className={isDefaultChecked(5) ? "checked" : ""}
          onChange={(e) => handleRating(+e.target.value)}
          readOnly={card}
        />
        <label htmlFor="star5" title="5">5 stars</label>
        <input
          type="radio"
          id="star4"
          name="rate"
          value="4"
          className={isDefaultChecked(4) ? "checked" : ""}
          onChange={(e) => handleRating(+e.target.value)}
          readOnly={card}
        />
        <label htmlFor="star4" title="4">4 stars</label>
        <input
          type="radio"
          id="star3"
          name="rate"
          value="3"
          className={isDefaultChecked(3) ? "checked" : ""}
          onChange={(e) => handleRating(+e.target.value)}
          readOnly={card}
        />
        <label htmlFor="star3" title="3">3 stars</label>
        <input
          type="radio"
          id="star2"
          name="rate"
          value="2"
          className={isDefaultChecked(2) ? "checked" : ""}
          onChange={(e) => handleRating(+e.target.value)}
          readOnly={card}
        />
        <label htmlFor="star2" title="2">2 stars</label>
        <input
          type="radio"
          id="star1"
          name="rate"
          value="1"
          className={isDefaultChecked(1) ? "checked" : ""}
          onChange={(e) => handleRating(+e.target.value)}
          readOnly={card}
        />
        <label htmlFor="star1" title="1">1 star</label>
      </div>
      <div className="rating_calculations">
        <span>{avg.toFixed(2)}</span>
        {!card && <>
          <span>{` (${rating?.rating_count})`}</span>
          {rating?.user_exists ? <span title={`already rated (${rating?.user_point})`}><Check /></span> : null}
        </>}
      </div>
    </div>
  )
}
