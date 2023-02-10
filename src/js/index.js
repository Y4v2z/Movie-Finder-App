// Model View Controller
import Search from "./models/Search";
import { elements, renderLoader, clearLoader } from "./base"
import * as searchView from "./views/searchView"
import * as movieViews from "./views/movieView"
const state = {};
// Seach Controller
const searchController = async () => {
    const keyword = elements.searchInput.value;
    if (keyword) {
        state.search = new Search(keyword);
        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.cardBody);
        await state.search.getResults();
        searchView.displayResults(keyword, state.search.data);
        setTimeout(() => {
            clearLoader();
        }, 1000);
    } else {
        alert("enter the word you want to search")
    }
};
elements.searchForm.addEventListener("submit", function (e) {
    searchController()
    e.preventDefault()
});
// Movie Controller
import Movie from "./models/Movie";
const movieController = async () => {
    const id = window.location.hash.replace("#", "")
    if (id) {
        state.movie = new Movie(id);
        renderLoader(elements.cardBody);
        await state.movie.getMovie();
        movieViews.backToTop();
        movieViews.displayMovieDetails(state.movie.data);
        setTimeout(() => {
            clearLoader();
        }, 1000);

    }
};
window.addEventListener("hashchange", movieController);
elements.movieDetailsClose.addEventListener("click", movieViews.closeDetails);