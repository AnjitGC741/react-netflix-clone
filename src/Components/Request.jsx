const apiKey = "92cc6ff97f5700f52e2d3a424c1e4b8f";

const fetchMedia = {
    fetchNewRelease : `discover/movie?api_key=${apiKey}`,
    // fetchUpcoming : `movie/upcoming?api_key=${apiKey}&primary_release_date.gte=2023-06-07`,
    fetchTopRatedSeries : `tv/top_rated?api_key=${apiKey}`,
    fetchOnlyInNetflix : `discover/tv?api_key=${apiKey}&with_networks=213`,
    fetchDocumentry:`discover/movie?api_key=${apiKey}&with_genres=99`,
    fetchKids : `discover/tv?api_key=${apiKey}&with_genres=16`,
    fetchAnimated : `discover/movie?api_key=${apiKey}&with_genres=16`,
    fetchWar : `discover/movie?api_key=${apiKey}&with_genres=10752`,
    fetchFamily :`discover/movie?api_key=${apiKey}&with_genres=10751`,
    fetchSciFri :`discover/movie?api_key=${apiKey}&with_genres=878`,
    fetchAdvanture :`discover/movie?api_key=${apiKey}&with_genres=12`,
    fetchCrime :`discover/movie?api_key=${apiKey}&with_genres=80`,
    fetchHorror :`discover/movie?api_key=${apiKey}&with_genres=27`,
}

export default fetchMedia;
// to get season detail
//https://api.themoviedb.org/3/tv/66732/season/2?api_key=92cc6ff97f5700f52e2d3a424c1e4b8f
//to get image
//https://image.tmdb.org/t/p/original/efz0MgPAxPw11PIeAJNgKKg3Paa.jpg
// https://api.themoviedb.org/3/tv/top_rated?api_key=92cc6ff97f5700f52e2d3a424c1e4b8f