import { Exclude } from "class-transformer";
import { UsersEntity } from "src/auth/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ExerciseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        length: 40,
    })
    title: string;

    @Column({
        type: 'date',
    })
    date: Date;

    @Column({
        length: 40,
    })
    exerciseName: string;

    @Column({
        length: 40,
    })
    reps: string;

    @Column({
        length: 40,
    })
    weights: string;

    @ManyToOne(_type => UsersEntity, user => user.exercises, { eager: false })
    @Exclude({
        toPlainOnly: true,
    })
    user: UsersEntity;
}