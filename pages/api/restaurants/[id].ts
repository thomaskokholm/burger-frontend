import { allRestaurants } from "@/data";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query as { id?: string };
  if (id) {
    allRestaurants.map((r) => {
      if (r.id === id) {
        return res.status(200).json(r);
      }
    });
  }
  res.status(404).end();
}
