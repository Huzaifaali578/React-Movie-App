import React from "react";
// import styled from "styled-components"
import NavbarStyle from "./style/Navbar.module.css"

// const CartCount = styled.div`
//     background: ${props => props.color};
//     visibility: ${props => (props.show ? "visible" : "hidden")};
// `
class Navbar extends React.Component {

    render() {
        const { cartItemQun } = this.props;
        console.log(cartItemQun)
        return (
            <>
                <div className={NavbarStyle.Nav}>

                    <div className={NavbarStyle.Title}>MOVIE APP</div>

                    <div className={NavbarStyle.CartIconContainer}>
                        <img alt="Cart-Icon"
                            src="https://cdn-icons-png.flaticon.com/128/891/891462.png"
                            className={NavbarStyle.CartImg}
                        />
                        <span className={NavbarStyle.CartCount} >{ cartItemQun }</span>
                    </div>
                </div>

            </>
        )
    }
}


export default Navbar;
