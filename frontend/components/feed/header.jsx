import React from "react";
import { Link } from 'react-router-dom';
import SearchContainer from "../search/search_container";

class Header extends React.Component {
    
    render() {
        return(
            <div className="header-parent">
            
            <div className="header-left">
            <Link to="/feed">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png" alt="" className="logo" />
            </Link>
            <SearchContainer location={this.props.location} />
            </div>

            <div className="header-middle">
                <Link to="/feed">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2mzkC_s6MVaJhbJG-krLC16KQuVwBCu0cWYg9AcJJJ4uSQnjbrEz9hjpNGCCuMVwzuAU&usqp=CAU" alt="" className="logo" />
                </Link>
                <a href="https://github.com/mrizwan83/FaceDiary" target="_blank"><img src="https://1000logos.net/wp-content/uploads/2021/05/GitHub-logo.png" alt="" className="logo"/></a>
                <a href="https://angel.co/u/mohammad-h-rizwan" target="_blank"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhGOMqJ4VmhTJxuQ3ejv4jyki4ZfZQJURn7F8uGmBALA&s" alt="" className="logo"/></a>
                <a href="https://linkedin.com/in/mohammad-rizwan-a83a31246" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png" alt="" className="logo" /></a>
            </div>

            <div className="header-right">
            <button onClick={this.props.logout} className="logout"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxQ9u8d_iLsoJi0a6Xt2ZbV9NYb0YxpONn0A&usqp=CAU" alt="" className="logo"/></button>
            </div>
            
            </div>
        )
    }
}

export default Header