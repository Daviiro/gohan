import type { NextApiRequest, NextApiResponse } from "next";
import ItemInterface from "@/types/itemInterface";
import data from "@/assets/staticData.json";

export default function handler(
	_req: NextApiRequest,
	res: NextApiResponse<ItemInterface[]>
) {
	res.status(200).json(data);
}
