import { execute, findAllPhotos, findAllUsers } from "./src/scripts"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "123",
  database: "tests",
  synchronize: true,
  logging: false,
  entities: ["./src/app/entities/**/*.ts"],
  subscribers: [],
  migrations: [],
})

AppDataSource.initialize()
    .then(() => {
        console.log('database is Up!')
        // execute()
        findAllUsers().then(console.log)
        findAllPhotos().then(console.log)
    })
    .catch((error) => console.log(error))