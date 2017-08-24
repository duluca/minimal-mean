'use strict'
import { createNewUser } from '../services/userService';

import app from '../app'
import { ObjectID } from 'mongodb'
import { User, IUser, UserCollection } from '../models/user'
import { Request, Response } from 'express'

app.get('/user', async (req: Request, res: Response) => {
  let users = await UserCollection.findWithPagination(req.query, undefined, req.query.filter, undefined, true)
  res.send(users)
})

app.get('/user/:userId', async (req: Request, res: Response) => {
  let user = await UserCollection.findOne({ _id: req.params.userId })
  if(!user){
    return res.status(404).send({ message: 'User not found.' })
  }
  res.send(user)
})

app.post('/user', async (req: Request, res: Response) => {
  let userData = req.body as IUser
  let success = await createNewUser(userData)
  if(success instanceof User) {
    res.send(success)
  } else {
    res.status(400).send({ message: 'Failed to create user.' })
  }
})