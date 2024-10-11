import { Component } from "react";
import styled from "styled-components";

const Moviecart = styled.div`
background: linear-gradient(180deg, #c3d0d4d9, #505057);
`;

function MovieCart(props) {

    const { movies, addStars, decStars, toggleFav, toggleCart } = this.props;
    const { title, plot, price, rating, star, fav, isInCart } = this.props.movies

    return (
        <>
            <div className="main">
                <Moviecart className="movie-card" >

                    <div className="left">
                        <img alt="poster" src="https://cdn.marvel.com/content/1x/avengersendgame_lob_crd_05.jpg" />
                    </div>

                    <div className="right">
                        <div className="title"> {title} </div>
                        <div className="plot"> {plot}</div>
                        <div className="price"> Rs. {price} </div>

                        <div className="footer">
                            <div className="rating"> {rating} </div>
                            <div className="star-dis">

                                <img
                                    alt="decrease"
                                    src="https://cdn-icons-png.flaticon.com/128/1828/1828901.png" className="str-btn"
                                    onClick={() => { decStars(movies) }}
                                />

                                <img
                                    alt="star"
                                    src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" className="stars"
                                />

                                <img
                                    alt="increase"
                                    src="https://cdn-icons-png.flaticon.com/128/3524/3524388.png" className="str-btn"
                                    onClick={() => { addStars(movies) }}
                                />

                                <span className="starCount">{star}</span>

                            </div>
                            {/* conditional rendering methode 1 */}
                            {/* {favourite ? <button className="unfavourite-btn" onClick={this.handelFav}> Un-favourite </button> : <button className="favourite-btn" onClick={this.handelFav}> favourite </button>} */}

                            {/* conditional rendering methode 2 */}
                            <button
                                className={fav ? "unfavourite-btn" : "favourite-btn"}
                                onClick={() => { toggleFav(movies) }}>
                                {fav ? "Un-favourite" : "favourite"}
                            </button>


                            <button className={isInCart ? "removeCart-btn" : "cart-btn"}
                                onClick={() => { toggleCart(movies) }}>
                                {isInCart ? "Remove from cart" : "Add to cart"}
                            </button>
                        </div>
                    </div>
                </Moviecart>
            </div>
        </>
    )
}


export default MovieCart;