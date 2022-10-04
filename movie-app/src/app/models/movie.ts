export interface Movie {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    revenue:number;
    runtime:number;
    status:string;
    genres:Genrce[];
}
export interface MovieDto{
    page:number;
    results:Movie[];
    total_results:number;
    total_pages:number;

}

export interface Genrce{
    id:number;
    name:string;
}
export interface MovieVedioDto{
    id:number;
    results:MovieVedio[];
}

export interface MovieVedio{
    key:string;
    site:string;
}
export interface MOvieImages{
    
backdrops:{
    file_path:string;
}[];
}
export interface MOvieCredits{
    
cast:{
        name:string;
        profile_path:string;
    }[];
    }