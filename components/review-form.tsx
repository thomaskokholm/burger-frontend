import { Restaurant } from "@/types";
import { useState } from "react";
import Button from "./button";

export default function ReviewForm({
  restaurants,
}: {
  restaurants: Array<Restaurant>;
}) {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  return (
    <div className="border rounded-md p-3 bg-white mb-12 shadow-sm">
      <div className="flex flex-col">
        <label className="font-bold mb-1">Restaurant</label>
        <select
          className="form-input w-full px-4 py-3 border-gray-200 bg-gray-50 rounded-md mb-3"
          onChange={() => {
            setCollapsed(true);
          }}
          defaultValue="NONE"
        >
          <option value="NONE" disabled hidden>
            Select restaurant
          </option>
          {restaurants &&
            restaurants.map((r) => {
              return (
                <option key={r.id} value={r.id}>
                  {r.name}
                </option>
              );
            })}
        </select>
      </div>
      {collapsed && (
        <div>
          <div className="flex flex-col">
            <label className="font-bold mb-1">Comment</label>
            <textarea
              className="form-input px-4 py-3 bg-gray-50 border-gray-200 w-full rounded-md mb-3"
              placeholder="Write your comment"
              rows={5}
            ></textarea>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-between mb-3">
            <div className="flex flex-col">
              <label className="font-bold mb-1">Taste</label>
              <select
                className="form-input px-4 py-3 border-gray-200 bg-gray-50 rounded-md"
                defaultValue="NONE"
              >
                <option value="NONE" disabled hidden>
                  Taste
                </option>
                <option value="VERY_JUICY">Very juicy</option>
                <option value="MUSHROOM_LIKE">Mushroom like</option>
                <option value="BEEFY">Beefy</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="font-bold mb-1">Texture</label>
              <select
                className="form-input px-4 py-3 border-gray-200 bg-gray-50 rounded-md"
                defaultValue="NONE"
              >
                <option value="NONE" disabled hidden>
                  Texture
                </option>
                <option value="VERY_JUICY">Very juicy</option>
                <option value="MUSHROOM_LIKE">Mushroom like</option>
                <option value="BEEFY">Beefy</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="font-bold mb-1">Visual presentation</label>
              <select
                className="form-input px-4 py-3 border-gray-200 bg-gray-50 rounded-md"
                defaultValue="NONE"
              >
                <option value="NONE" disabled hidden>
                  Presentation
                </option>
                <option value="PERFECT">Perfect</option>
                <option value="GOOD">Good</option>
                <option value="DECENT">Decent</option>
                <option value="MEH">Meh</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col mb-3">
            <label className="font-bold mb-1">Burger picture</label>
            <input
              className="block w-full min-w-0 flex-auto rounded-md border border-gray-200 bg-clip-padding px-3 py-4 file:-mx-3 file:-my-4 file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-gray-50 file:px-3 file:py-4 file:[border-inline-end-width:1px] file:[margin-inline-end:1rem]"
              type="file"
            />
          </div>
          <Button className="w-full" kind="primary" role="button">
            Share review
          </Button>
        </div>
      )}
    </div>
  );
}
