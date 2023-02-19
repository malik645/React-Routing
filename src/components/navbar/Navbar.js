import React from 'react'
import { Link } from 'react-router-dom'

const styles = {
    container: {
      backgroundColor: 'rgba(0,0,0,0.8)',
      padding: 10,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    heading:{
        color: '#fff'
    },
    list: {
        display: 'flex',
        listStyleType: 'none',
    },
    link: {
        textDecoration: 'none',
        color: '#fff',
        padding: 15
      },
  };
function Navbar(){
    return(
        <div style={styles.container}>
            <h3 style={styles.heading}>React Routing</h3>
            <ul style={styles.list}>
                <li style={styles.li}> <Link style={styles.link} to="/">Home</Link> </li>
                <li style={styles.li}> <Link style={styles.link} to="/about">About</Link> </li>
                <li style={styles.li}> <Link style={styles.link} to="/contact">Contact</Link> </li>
                <li style={styles.li}> <Link style={styles.link} to="/services">Services</Link> </li>
            </ul>
        </div>
    )
}
export default Navbar