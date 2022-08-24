import React from "react";
import { Link } from "react-router-dom";

class LeftNav extends React.Component{
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className="sidebar">
                <Link to={`/users/${this.props.currentUser.id}`}>
                <div className="sidebar-item-on">
                    <div id="sidebar-logo-pic"><img src="https://powerusers.microsoft.com/t5/image/serverpage/image-id/98171iCC9A58CAF1C9B5B9/image-size/large/is-moderation-mode/true?v=v2&px=999" alt="" id="sidebar-logo-pic1" /></div>
                    <div id="sidebar-name-link"> {this.props.currentUser.firstname} {this.props.currentUser.lastname}</div>
                </div>
                </Link>
                {/* <div className="sidebar-item"><img src="https://cdn0.iconfinder.com/data/icons/social-basic-2/32/Social_Media_Basic_Social_facebook__digital__Friends_-512.png" alt="" className="sidebar-logo"/>Friends</div>
                <div className="sidebar-item"><img src="https://www.pngitem.com/pimgs/m/105-1052269_facebook-groups-facebook-groups-logo-png-transparent-png.png" alt="" className="sidebar-logo"/> Groups</div>
                <div className="sidebar-item"><img src="https://progsoft.net/images/facebook-marketplace-icon-e15fd54ee9505ec7556f8178cfd93d344ea9fad9.png" alt="" className="sidebar-logo" /> Marketplace</div>
                <div className="sidebar-item"><img src="https://cdn.iconscout.com/icon/free/png-256/facebook-watch-4560241-3789515.png" alt="" className="sidebar-logo" /> Watch</div>
                <div className="sidebar-item"><img src="https://cdn0.iconfinder.com/data/icons/facebook-feature-outline/32/facebook-18-512.png" alt="" className="sidebar-logo" /> Memories</div>
                <div className="sidebar-item"><img src="https://cdn.shopify.com/app-store/listing_images/8b74e59f367bfafc59f6a4580630f882/icon/CPqWiLf0lu8CEAE=.png" alt="" className="sidebar-logo"/> Saved</div>
                <div className="sidebar-item"><img src="https://www.socialmediaexaminer.com/wp-content/uploads/2014/07/kl-facebook-pages-app-logo.jpg" alt="" className="sidebar-logo" /> Pages</div>
                <div className="sidebar-item"><img src="data:image/jpeg;base64,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" alt="" className="sidebar-logo"/> News</div>
                <div className="sidebar-item"><img src="https://www.eyerys.com/sites/default/files/events-from-facebook-icon.jpg" alt="" className="sidebar-logo"/> Events</div>
         */}
            </div>
        )
    }
}

export default LeftNav;