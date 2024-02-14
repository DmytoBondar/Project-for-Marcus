import type { NextApiRequest, NextApiResponse } from "next";
import { promises as fs } from 'fs';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
      const mockJsonFile = await fs.readFile(process.cwd() + '/faq.json', 'utf8');
      const faqdata = JSON.parse(mockJsonFile).faqs;
      return res.status(200).json({data: faqdata, status: "success"})
    }
    catch(error) {
      return res.status(500).json({ error: error, message: error.message})
    }
  }