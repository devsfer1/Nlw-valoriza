import { getCustomRepository } from 'typeorm';
import { Request, Response, NextFunction } from 'express'
import { UsersRepositories } from '../repositories/UsersRepositories';

export async function ensureAdmin(req: Request, res: Response, next: NextFunction) {

  const { user_id } = req
  console.log(user_id)
 
  const usersRepositories = getCustomRepository(UsersRepositories);

  const { admin } = await usersRepositories.findOne(user_id)


  if(admin) {
    return next();
  }

  return res.status(401).json({
    error: 'Unauthorized',

  })
}