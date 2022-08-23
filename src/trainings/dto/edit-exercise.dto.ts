import { IsDateString, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class EditExerciseDto {

    id?: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(40)
    title: string;

    @IsNotEmpty()
    @IsDateString()
    date: Date;

    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(40)
    exerciseName: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(40)
    reps: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(40)
    weights: string;
}