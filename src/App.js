import MovieList from "./movie-List.js";
import Navber from "./Navbar.js";
import { Component } from "react";
import { movies } from "./moviesData.js";

class App extends Component {

  constructor() {
    super()
    this.state = {
      movies: movies,
      cartItemCount: 0
    }
  }

  incHandleStars = (movie) => {
    const { movies } = this.state;
    const mid = movies.indexOf(movie)

    if (movies[mid].star < 5) {
      movies[mid].star += 0.5
    }
    this.setState({
      movies: movies
    })
  }

  decHandleStars = (movie) => {

    const { movies } = this.state;
    const mid = movies.indexOf(movie);

    if (movies[mid].star > 0) {
      movies[mid].star -= 0.5
    }

    this.setState({
      movies: movies
    })
  }

  handleFavourite = (movie) => {
    // console.log(`fav : ${movie.fav}`)
    const { movies } = this.state;
    const mid = movies.indexOf(movie)
    movies[mid].fav = !movies[mid].fav
    this.setState({
      movies: movies
    })
  }

  handleCart = (movie) => {
    // console.log(`fav : ${movie.fav}`)
    let { movies, cartItemCount } = this.state;
    const mid = movies.indexOf(movie)
    movies[mid].isInCart = !movies[mid].isInCart
    if (movies[mid].isInCart === true) {
      cartItemCount += 1
    } else {
      cartItemCount -= 1
    }
    this.setState({
      movies: movies,
      cartItemCount: cartItemCount
    })
  }

  render() {
    const { movies, cartItemCount } = this.state;
    return (
      <>
        <Navber cartItemQun={ cartItemCount } />
        <MovieList
          movies={movies}
          addStars={this.incHandleStars}
          decStars={this.decHandleStars}
          toggleFav= {this.handleFavourite}
          toggleCart={this.handleCart}  
        />
      </>

    )
  }

}



export default App;
