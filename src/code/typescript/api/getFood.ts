import { Food } from "../types";

async function getFood(id: number | number[]) {
    const slugBase = process.env.NEXT_PUBLIC_WP_WEBSITE_FOOD_URL;
    if (!slugBase) {
        console.log("slugBase missing error.")
        return null;
    }

    const queryParam = Array.isArray(id)
        ? id.map((tagId) => `food_category[]=${tagId}`).join("&")
        : `food_category=${id}`;

    const res = await fetch(`${slugBase}&${queryParam}`, { cache: "no-store" });
    if (!res.ok) return null;

    const data = await res.json();
    return Array.isArray(data) && data.length > 0 ? data : null;
}

export default getFood