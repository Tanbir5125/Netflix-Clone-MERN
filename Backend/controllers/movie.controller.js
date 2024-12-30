import { fetchFromTMDB } from "../services/tmdb.service.js";


export async function getTrendingMovie(req, res) {
    try {
        const data = await fetchFromTMDB("https://api.themoviedb.org/3/trending/movie/day?language=en-US")
        const randomMovie = data.results[Math.floor(Math.random() * data.results?.length)]

        res.json({ success: true, content: randomMovie })
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal Server Error" })
    }
}

export async function getMovieTrailer(req, res) {
    const { id } = req.params;
    try {
        const data = await fetchFromTMDB(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`);
        res.json({ success: true, trailer: data.results });
    } catch (error) {
        if (error.message.includes('404')) {
            return res.status(404).send(null)
        }

        res.status(500).json({ success: false, message: "Internal Server Error" })
    }
}

export const getMovieDetails = async (req, res) => {
    const id = req.params.id;
    try {
        const data = await fetchFromTMDB(`https://api.themoviedb.org/3/movie/${id}?language=en-US`)
        res.status(200).json({ success: true, content: data })
    } catch (error) {
        if(error.message.includes('404')){
            return res.status(404).send(null)
        }
        res.status(500).json({ success: false, message: "Internal Server Error" })
    }
}

export async function getSimilarMovies(req, res) {
    const id = req.params.id;
    try {
        const data = await fetchFromTMDB(`https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1`);
        res.status(200).json({ success: true, similar: data.results })
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal Server Error" })
    }
}

export async function getMoviesByCategory(req, res) {
    const category = req.params.category;
    try {
        const data = await fetchFromTMDB(`https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`);
        res.status(200).json({ success: true, content: data.results })
    } catch (error) {
        if(error.message.includes('404')){
            return res.status(404).send(null)
        }
        res.status(500).json({ success: false, message: "Internal Server Error" })
    }
}