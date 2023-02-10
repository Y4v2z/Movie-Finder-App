export const elements = {
    searchForm: document.getElementById("formSearch"),
    searchInput: document.getElementById("txtKeyword"),
    btnSubmit: document.getElementById("btnSubmit"),
    cardBody: document.getElementById("cardBody"),
    movieListHeader: document.getElementById("movieListHeader"),
    movieList: document.getElementById("movieList"),
    movieListContainer: document.getElementById("movieListContainer"),
    movieDetails: document.getElementById("movieDetails"),
    movieDetailsClose: document.getElementById("movieDetailsClose"),
    movieDetailsContainer: document.getElementById("movieDetailsContainer")
};
export const renderLoader = parent => {
    const loader = `
    <div id="loader">
        <div class="progress-bar">
            <div class="shadow"></div>
        </div>
  </div>
    `;
    parent.insertAdjacentHTML("afterbegin", loader)
};
export const clearLoader = () => {
    const loader = document.getElementById("loader");
    if (loader) {
        loader.remove();
    }
};
