import { Component } from "react";
import MovieCart from "./movieCart.js";

class MovieList extends Component {

    render() {
        const { movies, addStars, decStars, toggleFav, toggleCart } = this.props;
        return (
            <>
                {movies.map((movie) => <MovieCart
                    movies={movie}
                    addStars={addStars}
                    decStars={decStars}
                    toggleFav= {toggleFav}
                    toggleCart={toggleCart}
                    key={movie.id}
                />)}
            </>
        )
    }
}

export default MovieList;