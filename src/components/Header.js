import React,{useState} from 'react';
import styled from 'styled-components';
import CloseIcon from '@material-ui/icons/Close';
import {selectCars} from '../features/car/carSlice';
import {useSelector} from 'react-redux';
import { IconButton, ButtonGroup  } from '@material-ui/core';
import { green } from '@mui/material/colors';



function Header() {

    const[menuStatus, setMenuStatus] = useState(false)
    const cars = useSelector(selectCars)

  return (
    <Container>
        <a>
           <img src='/images/logo.svg' /> 
        </a>
        
        <Menu>
        {cars && cars.map((car, index)=>(
            <IconButton style={{ fontSize: 14, borderRadius:10 }}  >
            <a key={index} href='#'>{car}</a> </IconButton>
        ))}
        </Menu>

        <RightMenu>
            <IconButton style={{ fontSize: 14, borderRadius:10 }} className="close" ><a href='#'>Shop</a></IconButton>
            <IconButton style={{ fontSize: 14, borderRadius:10 }} className="close" ><a href='#'>Account</a></IconButton>
            <IconButton style={{ fontSize: 14, borderRadius:10 }}  ><a href='#' onClick={() => setMenuStatus(true)}>Menu</a></IconButton>
            

            </RightMenu>
            <BurgerNav show={menuStatus}>
            <CloseWrapper>
            <CustomClose onClick={()=> setMenuStatus(false)}/>
            </CloseWrapper>


        {cars && cars.map((car, index)=>(
            <li><IconButton style={{fontSize: 14, borderRadius:10}}  >
            <a key={index} href='#'>{car}</a> </IconButton>
            </li>
        ))}

 
            <li>
                <a href=''>Existing Inventory</a>
            </li>
            <li>
                <a href=''>Used Inventory</a>
            </li>
            <li>
                <a href=''>Trade-in</a>
            </li>
            <li><a href=''>Test Drive</a></li>
            <li><a href=''>Cybertruck</a></li>
            <li><a href=''>Roadster</a></li>
            <li><a href=''>Semi</a></li>
            <li><a href=''>Charging</a></li>
            <li><a href=''>Powerwall</a></li>
            <li><a href=''>Commercial Energy</a></li>
            


            </BurgerNav>

    </Container>
  )
}

export default Header

const Container =styled.div`
min-height:60px;
position:fixed;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 20px;
top: 0 ;
left: 0;
right: 0;
z-index: 1;

`

const Menu = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex: 1;

a{
    font-weight: 600;
    text-transform:uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
}

@media(max-width:1200px){
    display:none;
}
`

const RightMenu = styled.div`
display: flex;
align-items: center;
a{
    font-weight: 600;
    text-transform:uppercase;
    margin-right: 10px;
}
@media(max-width:1200px){
    .close{
        display:none;
    }
}

`

const CustomMenu = styled.div`
`
const BurgerNav = styled.div`
position: fixed;
top:0;
bottom:0;
right: 0;
background:white;
width: 300px;
z-index: 12;
list-style: none;
padding: 20px;
display:flex;
flex-direction:column;
text-align:start;
transform:${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
transition: transform 0.3s ;
li{
    padding: 15px 0;

    a{
        font-weight: 600;
    }
}
`
const CustomClose = styled(CloseIcon)`
cursor:pointer;
`
const CloseWrapper = styled.div`
display:flex;
justify-content: flex-end;
`

const CustomIconButton = styled(IconButton)`
font-size: 14;
border-radius:10;
`