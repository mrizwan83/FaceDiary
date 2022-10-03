import React from "react";
import { Link } from 'react-router-dom';


class Search extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            users: this.props.users,
            search: "",
            results: []
        }
        this.search = this.search.bind(this);

    }

    search(e) {
        let resultsarr = [];
        this.setState({search: e.currentTarget.value});
        if (e.currentTarget.value) {
            Object.values(this.props.users).forEach(user => {
                let fullname = user.firstname + user.lastname;
                if (fullname.toLowerCase().includes(e.currentTarget.value.toLowerCase())) {
                    resultsarr.push(user)
                }
            })
        }
        this.setState({results: resultsarr})
    }


    render() {
        console.log(this.props.location)
        return(
            <div className="search-component">

            <div className="paki">
            <input type="text" placeholder="Search FaceDiary" className="searchbar" onChange={this.search} value={this.state.search}/>
            <div className="results-search">
            {this.state.results.map(user => {
                const renderPostPhoto = (user.profilePhoto) ? <img className="post-pic-logo" src={`${user.profilePhoto}`} /> : <img src="https://powerusers.microsoft.com/t5/image/serverpage/image-id/98171iCC9A58CAF1C9B5B9/image-size/large/is-moderation-mode/true?v=v2&px=999" className="post-pic-logo" />
                return <Link to={`/users/${user.id}`} key={user.id}>
                    <div  className="searchresult-item">
                    {renderPostPhoto}
                <p className="search-links">
                    {user.firstname} {user.lastname}
                </p>
                </div>
                </Link>
            })}
       
            </div>
            </div>
            
            </div>
        )
    }
}

export default Search