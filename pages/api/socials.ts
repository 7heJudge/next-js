import {NextApiRequest, NextApiResponse} from "next";

import {socials} from "./data/socials";
import {Social} from "../../utils/types";

export default function handler (req: NextApiRequest, res: NextApiResponse<Array<Social>>) {
    if (req.method === 'GET') {
        res.status(200).json(socials);
    }
}