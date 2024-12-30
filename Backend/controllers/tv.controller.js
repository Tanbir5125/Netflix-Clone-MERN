import { fetchFromTMDB } from "../services/tmdb.service.js";

export async function getTrendingShows(req, res) {
    try {
        const data = await fetchFromTMDB('https://api.themoviedb.org/3/trending/tv/day?language=en-US');
        const randomShow = data.results[Math.floor(Math.random() * data.results?.length)];
        res.status(200).json({ success: true, content: randomShow });
    } catch (error) {
        if(error.message.includes('404')){
            return res.status(404).send(null)
        }
        res.status(500).json({ success: false, message: "Internal Server Error" })
    }
}

export async function getShowTrailer(req, res) {
    const id = req.params.id;

    try {
        const data = await fetchFromTMDB(`https://api.themoviedb.org/3/tv/${id}/videos?language=en-US`)
        res.status(200).json({ success: true, trailer: data.results });
    } catch (error) {
        if(error.message.includes('404')){
            return res.status(404).send(null)
        }
        res.status(500).json({ success: false, message: "Internal Server Error" })
    }
}
export async function getShowDetails(req, res) {
    const id = req.params.id;

    try {
        const data = await fetchFromTMDB(`https://api.themoviedb.org/3/tv/${id}?language=en-US`)
        res.status(200).json({ success: true, content: data});
    } catch (error) {
        if (error.message.includes('404')) {
            return res.status(404).send(null)
        }
        res.status(500).json({ success: false, message: "Internal Server Error" })
    }
}
export async function getSimilarShows(req, res) {
    const id = req.params.id;

    try {
        const data = await fetchFromTMDB(`https://api.themoviedb.org/3/tv/${id}/similar?language=en-US&page=1`)
        res.status(200).json({ success: true, similar: data.results });
    } catch (error) {
        if (error.message.includes('404')) {
            return res.status(404).send(null)
        }
        res.status(500).json({ success: false, message: "Internal Server Error" })
    }
}
export async function getShowsByCategory(req, res) {
    const category = req.params.category;

    try {
        const data = await fetchFromTMDB(`https://api.themoviedb.org/3/tv/${category}?language=en-US&page=1`)
        res.status(200).json({ success: true, content: data.results });
    } catch (error) {
        if (error.message.includes('404')) {
            return res.status(404).send(null)
        }
        res.status(500).json({ success: false, message: "Internal Server Error" })
    }

}