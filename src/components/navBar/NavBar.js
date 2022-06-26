import React,{useContext} from 'react';
import logo from '../../logo.svg';
import styled from 'styled-components'
import imagenes from '../CartWidget'
import {Link} from 'react-router-dom'
import MenuGenre from './MenuGenre/MenuGenre'
import {contexto} from '../../Context/CartContext'
import "./Nav.css"


let Header=styled.header`
background-image: linear-gradient(#001219, #001e2a);
display: flex;
justify-content: space-between;
align-items: center;
padding: 8px 8%;
`;

let lis= {
fontfamily: 'Open Sans',
texttransform: 'uppercase',
fontsize: '1.1em',
color: '#f8f8f7',

}

let Li=styled.li` display:inline-block;
textDecoration: 'none';
padding: 0px 60px;
text-decoration: none;`;

const Title = styled.h1`
font-size: 1.5em;
text-align: center;
color: white;
`;

let log={
width: '100px',
height: '90px'
}

let logi={
width: '60px',
height: '50px'
}

let navlinks={
transition: 'all 0.2s ease 0s'
}
const A = styled.p`
color: white;
    font-size: 15px;
    padding: 5px 0 10px 0;
    display: block;
    text-transform: uppercase;
    font-family: 'Montserrat';
    letter-spacing: 1px;
`;

function NavBar() {

    const {totalItems}=useContext(contexto)


return (

    <div id="navegador">
    <Header className='sidebar-social' >
            <Link to='/'>
            <img src={logo} style={log} className="App-logo" alt="logo" />
            </Link>
            <Title>Electronics Arts</Title>
            <nav>
                <ul className="nav-links" style={navlinks}>

                    <Link to='/'>
                    <Li style={lis} ><A href="#">Inicio</A></Li>
                    </Link>
                    <MenuGenre/>
                </ul>
            </nav>
            <Link to='/carrito' className="cart">
             <img className="fas fa-shopping-cart" style={logi} src={imagenes.img1}/> <span >Carrito</span> 
            <span id="cart_menu_num" data-action="cart-can" className="badge rounded-circle">{totalItems}</span>
            
            </Link>
        </Header>    
    </div>
        );

    };



export default NavBar;
