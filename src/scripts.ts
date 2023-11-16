import { AppDataSource } from "../server";
import { Photo } from "./app/entities/Photo";
import { User } from "./app/entities/User";

export const execute = async () => {
  
  // Photo has a relation manyToOne
  const photo1 = new Photo()
  photo1.url = 'www.xvideos.com'
  
  const photo2 = new Photo()
  photo2.url = "me-and-bears.jpg"
  
  // User has a relation oneToMany
  const user = new User()
  user.name = "Daniel"
  user.photos = [photo1, photo2]
  
  try {
    await AppDataSource.manager.save(photo2)
    await AppDataSource.manager.save(photo1)
    await AppDataSource.manager.save(user)
    
  } catch (error) {
    console.log(error)
  }
}

export const findAllUsers = async () => {
  const userRepository = AppDataSource.getRepository(User)
  try {

    // List only the users from the entity User
    // const users = await userRepository.find()

    // List the users and the related itens on PHOTO entity
    const users = await userRepository.find({
      relations: {
        photos: true
      }
    })
    
    return users

  } catch (error) {
    console.log(error)
  }
}

export const findAllPhotos = async () => {
  const photoRepository = AppDataSource.getRepository(Photo)
  try {

    // List only the photos from the entity user
    // const photos = await photoRepository.find()

    // List the photos and the related Id on User entity, because has a relation many, to One with User entitie
    const photos = await photoRepository.find({
      relations: {
        user: true
      }
    })
    
    return photos

  } catch (error) {
    console.log(error)
  }
}
