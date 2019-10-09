import { IUser, User, UserCollection } from '../models/user'
import { Request, Response, Router } from 'express'

import { createNewUser } from '../services/userService'

const router = Router()

/**
 * @swagger
 * components:
 *   parameters:
 *     offsetParam:
 *       in: query
 *       name: offset
 *       required: false
 *       schema:
 *         type: integer
 *         minimum: 0
 *       description: The number of items to skip before starting to collect the result set.
 *     limitParam:
 *       in: query
 *       name: limit
 *       required: false
 *       schema:
 *         type: integer
 *         minimum: 1
 *         maximum: 50
 *         default: 20
 *       description: The numbers of items to return.
 */

/**
 * @swagger
 * /user:
 *     get:
 *       description: |
 *         Searches and returns `User` objects.
 *       parameters:
 *         - in: query
 *           name: search
 *           required: false
 *           schema:
 *             type: string
 *           description: Search text
 *         - $ref: '#/components/parameters/offsetParam'
 *         - $ref: '#/components/parameters/limitParam'
 *       responses:
 *         "200": # Response
 *           description: OK
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: "#/components/schemas/Users"
 */
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

/**
 * @swagger
 * /user/{id}:
 *   get:
 *     description: Gets a `User` object by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: User's unique id
 *     responses:
 *        '200':
 *           description: OK
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/User'
 */
router.get('/:userId', async (req: Request, res: Response) => {
  let user = await UserCollection.findOne({ _id: req.params.userId })
  if (!user) {
    return res.status(404).send({ message: 'User not found.' })
  }
  res.send(user)
})

/**
 * @swagger
 * /user:
 *   post:
 *     summary: Create a new `User`
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *        '200':
 *           description: OK
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/User'
 */
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
