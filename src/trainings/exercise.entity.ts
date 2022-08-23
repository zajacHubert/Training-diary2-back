import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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

}