export interface MoviesPayload{
    next(res: MoviesPayload[]): unknown;
    movieId: number; 
    movieName: string; 
    directorName: string; 
    movieDuration: string; 
    movieProductionYear: string;
    movieCategory: string; 
    movieImageUrl: string;
    movieRating: string;
    movieVideoUrl: string, 
    movieDescription: string;
}