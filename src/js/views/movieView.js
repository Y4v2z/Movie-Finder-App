import { elements } from "../base";
export const backToTop = () => {
    window.scroll({ top: 0, behavior: "smooth" })
};
export const closeDetails = () => {
    elements.movieDetailsContainer.classList.remove("d-block");
};
export const displayMovieDetails = (movie) => {
    var html = `<div class="row">`;
    var genres = "";
    movie.genres.forEach(genre => {
        genres += `<span class="badge badge-primary ml-1">${genre.name}</span>`;
    });

    html += ` 
    <div class="col-md-4">
        <img src="	https://www.themoviedb.org/t/p/w500/${movie.poster_path}" onerror="this.src='https://via.placeholder.com/92x138';"= class="mr-3 img-fluid" alt="${movie.title}">
    </div>
    <div class="col-md-8">
        <div>
            <h5>${movie.original_title}</h5>
            <p>${movie.overview}</p>        
            <p><span><small class="badge badge-primary"> ${movie.vote_average.toFixed(1)}</small></span> 
            <span class="font-weight-bold badge badge-secondary float-right">Time : ${movie.runtime} min.</span>
            
            </p>
            <hr>
            ${genres}        
        </div>    
    </div>
    `;
    html += `</div>`;
    elements.movieDetailsContainer.classList.add("d-block");
    elements.movieDetails.innerHTML = html;
};
