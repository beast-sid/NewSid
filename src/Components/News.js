import React, { Component } from "react";
import NewsItem from "./NewsItem.js";
import Spinner from "./Spinner.js";
export default class News extends Component {

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            page: 0,
            loading: false,
            totalResults: 0
        };
        let s = this.props.category;
        document.title = `${s.toUpperCase()}-NewsSid`;
    }
    async updateNews() {
        this.props.setProgress(0);
        const url = `https://saurav.tech/NewsAPI/top-headlines/category/${this.props.category}/in.json`;
        this.setState({ loading: true });
        let data = await fetch(url);
        this.props.setProgress(30);
        let parsedData = await data.json();
        this.props.setProgress(50);
        console.log(parsedData);
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        });
        this.props.setProgress(100);
    }
    async componentDidMount() {
        this.setState({ page: 1 });
        this.updateNews();
    }
    handlePrevClick = async () => {
        this.setState({ page: this.state.page - 1 });
        this.updateNews();
    }
    handleNextClick = async () => {
        this.setState({ page: this.state.page + 1 });
        this.updateNews();
    }
    
    render() {
        return (
            <>

                <h1 className="text-center" style={{ margin: '2vw 0' }}>NewSid-Top {this.props.category} headlines</h1>
                {this.state.loading && <Spinner/>}           {/* this.state.loading=true then only we have to show the spinner*/}
                    <div className="container">
                        <div className="row">
                            {!this.state.loading && this.state.articles.map((element) => {
                                return (
                                    <div className="col-md-4" key={element.url}>
                                        <NewsItem
                                            title={element.title ? element.title.slice(0, 30) : ""}
                                            description={element.description ? element.description.slice(0, 45) : ""}
                                            imageUrl={element.urlToImage ? element.urlToImage : "https://t4.ftcdn.net/jpg/01/67/74/79/360_F_167747932_NE1da5cf9FM30QExtlFjbmk9ypItoJl2.jpg"}
                                            newsUrl={element.url}
                                            author={element.author}
                                            date={element.publishedAt}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                
                <div className="d-flex justify-content-center">
                        < button type="button" className="btn btn-success">Developed by Siddharth Saxena</button>  
                    </div>

            </>
        );
    }
}
