import { User, IUser, UserCollection } from '../models/user'

export async function createNewUser(userData: IUser): Promise<User | boolean> {
  let user = new User(userData)
  let success = await user.save()
  if(success) {
    return user
  } else {
    return false
  }
}