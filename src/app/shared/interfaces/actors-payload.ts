import { MoviesPayload } from "./movies-payload";

export interface ActorsPayload{
    actorId: number;
    actorName: string;
    age: string;
    height: string;
    actorImageUrl: string;
    actorMovies: MoviesPayload[];
}