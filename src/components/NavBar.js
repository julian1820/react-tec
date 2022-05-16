import logo from '../logo.svg';
import styled from 'styled-components'
import imagenes from './CartWidget'
import {Link} from 'react-router-dom'

function NavBar() {
    
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
const Button = styled.button`
padding: 9px 30px;
background-color: #0a9396;
border: none;
border-radius: 50px;
cursor: pointer;
transition: all 0.2s ease 0s;
`;

return (

    <div id="navegador">
    <Header >
            <Link to='/'>
            <a style={lis} href="#"><img src={logo} style={log} className="App-logo" alt="logo" /></a>
            </Link>
            <Title>Electronics Arts</Title>
            <nav>
                <ul className="nav-links" style={navlinks}>

                    <Link to='/'>
                    <Li style={lis} ><a href="#">Home</a></Li>
                    </Link>
                    <Link to='categoria/sonido'>
                    <Li style={lis}><a href="#">Sonido</a></Li>
                    </Link>
                    <Link to='categoria/celulares'>
                    <Li style={lis}><a href="#">Celulares</a></Li>
                    </Link>
                </ul>
            </nav>
            <a style={lis} href="#"><Button >Sign Up</Button></a>
            <img style={logi} src={imagenes.img1}/>
        </Header>    
    </div>
        );

    };



export default NavBar;
