import { ExerciseEntity } from "src/trainings/exercise.entity";
import { Training } from "src/trainings/training.model";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UsersEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        unique: true,
    })
    username: string;

    @Column()
    password: string;

    @OneToMany(_type => ExerciseEntity, exercise => exercise.user, { eager: true })
    exercises: ExerciseEntity[];
}