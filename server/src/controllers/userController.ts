import { IUser, User, UserCollection } from '../models/user'
import { Request, Response, Router } from 'express'

import { createNewUser } from '../services/userService'

const router = Router()

router.get('/', async (req: Request, res: Response) => {
  let users = await UserCollection.findWithPagination<User>(
    req.query,
    undefined,
    req.query.filter,
    undefined,
    true
  )
  res.send(users)
})

router.get('/:userId', async (req: Request, res: Response) => {
  let user = await UserCollection.findOne({ _id: req.params.userId })
  if (!user) {
    return res.status(404).send({ message: 'User not found.' })
  }
  res.send(user)
})

router.post('/', async (req: Request, res: Response) => {
  let userData = req.body as IUser
  let success = await createNewUser(userData)
  if (success instanceof User) {
    res.send(success)
  } else {
    res.status(400).send({ message: 'Failed to create user.' })
  }
})

export default router
