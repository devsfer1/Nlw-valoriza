import { Request, Response, NextFunction, request } from 'express';
import { verify } from 'jsonwebtoken'

interface IPayload {
  sub: string;
}

export function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {

  const authToken = req.headers.authorization
  
  if(!authToken) {
    return res.status(401).end();
  }

  const [, token] = authToken.split(' ')

  try {
    const { sub } = verify(token, '3a6bf87d84ed6dea83129eab3aff6bbc') as IPayload;

    request.user_id = sub;

    return next();
  } catch(err) {
    return res.status(401).end()
  }
}