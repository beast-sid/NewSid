import React, { Component } from "react";

export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl,author,date } = this.props;
        return (
            <div>
                <div className="card">
                    <img src={imageUrl} alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p> By {author?author:"Unknown"} on {new Date(date).toGMTString()}</p>     {/* we r making a date object of date and converting it*/}
                        <a
                           rel="noreferrer"
                            href={newsUrl}
                            target="_blank"
                            className="btn btn-sm btn-primary btn-dark"
                            // target="_blank" opens the url in new page
                        >
                            Read More
                        </a>
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default NewsItem;
