export interface Exercise {
    id: string;
    title: string;
    date: Date;
    exerciseName: string;
    reps: string;
    weights: string;
}

export type Training = Exercise[];

export type DeleteTrainingResponse = {
    isSuccess: true,
}