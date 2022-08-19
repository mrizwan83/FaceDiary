import React from "react";
import { Link } from 'react-router-dom';


class Header extends React.Component {
    render() {
        return(
            <div className="header-parent">
            


            <div className="header-left">
            <Link to="/feed">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png" alt="" className="logo" />
            </Link>
            <input type="text" placeholder="Search FaceDiary" className="searchbar"/>
            </div>

            <div className="header-middle">
                <Link to="/feed">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2mzkC_s6MVaJhbJG-krLC16KQuVwBCu0cWYg9AcJJJ4uSQnjbrEz9hjpNGCCuMVwzuAU&usqp=CAU" alt="" className="logo" />
                </Link>
                <a href="https://github.com/mrizwan83/FaceDiary"><img src="https://1000logos.net/wp-content/uploads/2021/05/GitHub-logo.png" alt="" className="logo"/></a>
                <a href="https://linkedin.com/in/mohammad-rizwan-a83a31246"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png" alt="" className="logo" /></a>
            </div>

            <div className="header-right">
            <button onClick={this.props.logout} className="logout"> <img src="https://freepikpsd.com/file/2019/10/logout-logo-png-Transparent-Images.png" alt="" className="logo"/></button>
            </div>
            
            </div>
        )
    }
}

export default Header