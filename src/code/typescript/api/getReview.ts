import { Review } from "../types";

async function getReview() {
  const reviewBase = process.env.NEXT_PUBLIC_WP_WEBSITE_REVIEW_URL;
  if (!reviewBase) {
    console.error("NEXT_PUBLIC_WP_WEBSITE_REVIEW_URL is not defined.");
    return null;
  }

  const res = await fetch(reviewBase, { cache: "no-store" });
  if (!res.ok) {
    console.error("Failed to fetch reviews", res.statusText);
    return null;
  }

  const data = (await res.json()) as Review[];
  return Array.isArray(data) && data.length > 0 ? data : null;
}

export default getReview;
