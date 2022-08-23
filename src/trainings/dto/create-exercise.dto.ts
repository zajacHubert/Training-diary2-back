import { IsDateString, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class CreateExerciseDto {

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
    @MinLength(1)
    @MaxLength(40)
    weights: string;
}