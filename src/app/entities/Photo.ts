import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { User } from "./User"

@Entity({name: 'PHOTO'})
export class Photo {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    url: string

    @ManyToOne(() => User, (user) => user.photos)
    user: User
}