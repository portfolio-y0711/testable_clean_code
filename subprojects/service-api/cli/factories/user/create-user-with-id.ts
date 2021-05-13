import { User } from '@feed/database'
import { createRandomUser } from './create-random-user'


export const createUserWithId
    = (uuid: string, userId?: string): Partial<User> => {
        if (userId) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-return
            return { ...createRandomUser(uuid), userId }
        } else {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-return
            return { ...createRandomUser(uuid) }
        }
    }

export const createUserWithId2
    = (uuid: string, userId?: string): Partial<User> => {
        if (userId) {
            return { userId }
        } else {
            return { userId: createRandomUser(uuid).userId }
        }
    }
