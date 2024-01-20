import React from 'react';
import Cashbean from "../assets/Cashbean.jpg"

const Navbar = () => {
  return (
    <div style={navbarStyle}>
     <img style={im} src={Cashbean}/>
      <ul style={navListStyle}>
       <h2><li style={navItemStyle}>Home</li></h2> 
        <h2><li style={navItemStyle}>About</li></h2>
       <h2> <li style={navItemStyle}>Services</li></h2>
        <h2><li style={navItemStyle}>Contact</li></h2>
      </ul>
    </div>
  );
};


const navbarStyle = {
   background: 'white',
  padding: '5px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  color: 'black',
  position: 'sticky',
  top:'0',
  boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset',
 
  
};
const im={
width:"70px",
higth:"30px"
}

const logoStyle = {
  fontSize: '34px',
};

const navListStyle = {
  listStyle: 'none',
  display: 'flex',
  gap: '190px',
 fontSize: '13px',
 marginRight:'300px',
 color:'black',
  
 
 
};
const navItemStyle = {
  cursor: 'pointer',
  borderRadius: '5px',
  transition: 'background-color 0.3s ease-in-out',
};

export default Navbar;
