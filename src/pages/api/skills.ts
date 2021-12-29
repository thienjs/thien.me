import { NextApiRequest, NextApiResponse } from "next";
import { NormalizedData, Domain } from "~/components/SkillsTable/interfaces";
import skills from "~/data/skills.json";

export default async (
  _req: NextApiRequest,
  res: NextApiResponse<NormalizedData<Domain>>
): Promise<void> => {
  res.status(200).json(skills);
};