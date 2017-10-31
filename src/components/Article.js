import React from "react";
import Comment from "./Comment";


let articles = [];

class Article extends React.Component {

    render() {

        return (
            articles.map(function (article) {
                let href1 = "collapse" + article.id;
                return (

                    <div key={article.id} className="panel article">
                        <div className="panel-heading">
                            <h2 className="panel-title">{article.title}</h2>
                        </div>
                        <div className="panel-body">
                            {/*link to full article*/}
                            <a className="btn btn-default" href={article.url}>Full Article</a>

                            <div className="panel-group">
                                {/*Collapsible panel containing comments*/}
                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <h4 className="panel-title">
                                            <a data-toggle="collapse" href={href1}>Comments:</a>
                                        </h4>
                                    </div>
                                    <div id={href1} className="panel-collapse collapse">
                                        <div className="panel-body">
                                            <Comment/>
                                            <div className="panel">
                                                <div className="panel-heading">
                                                    <h5 className="panel-title">New Comment:</h5>
                                                </div>
                                                <div className="panel-body">
                                                    <form className="newComment">

                                                        <div className="row">
                                                            <div className="col">
                                                                <input className="form-control" type="text"
                                                                       placeholder="Comment Title...">
                                                                    {/*Comment Title Input*/}
                                                                </input>
                                                            </div>
                                                            <div className="col">
                                                                <input className="form-control" type="text"
                                                                       placeholder="Author Name...">
                                                                    {/*Author Name Input*/}
                                                                </input>
                                                            </div>
                                                        </div>

                                                        <input className="form-control" type="text"
                                                               placeholder="Comment body...">
                                                            {/*Comment Input*/}
                                                        </input>

                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })
        )
    }
}

export default Article;