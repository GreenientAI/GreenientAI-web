import { Request, Response } from 'express';
import axios from 'axios';

export const SIMULATE = async (req: Request, res: Response) => {
  const response = await axios.get('http://localhost:5000/', {});

  res.status(200).json({
    message: response.data
  })
};