import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Article from "./components/Article"


class App extends Component {
    render() {
        return (
            //Basic HTML renders
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">What's News?</h1>
                </header>
                <div className="panel">
                    <div className="panel-heading">
                        <h2 className="panel-title">
                            All the news that's fit to comment on!
                        </h2>
                    </div>

                    <div className="panel-body" id="articleBox">

                        <Article/>

                    </div>


                </div>
            </div>
        );
    }
}

export default App;
