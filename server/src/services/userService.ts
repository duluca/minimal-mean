import { IUser, User } from '../models/user'

export async function createNewUser(userData: IUser): Promise<User | boolean> {
  // TODO: mongo transaction
  let user = User.Builder(userData)
  let success = await user.save()
  if (success) {
    return user
  } else {
    return false
  }
}
