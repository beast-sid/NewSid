import './App.css';
import React, { Component } from 'react';
import Navbar from './Components/Navbar.js'
import News from './Components/News.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
  pageSize = 9;
  state={
    progress:0
  }
  setProgress=(progress)=>{
     this.setState({progress:progress});
  }
  render() {
    return (
      <>
        <div>
          <Router>
          <LoadingBar
              color='#f11946'
              progress={this.state.progress}
              height={4}
              // onLoaderFinished={() => setProgress(0)}
            />
            <Navbar />
            <Switch>
              <Route exact path="/general"><News setProgress={this.setProgress}  key="general" pageSize={this.pageSize} country="in" category="general" /></Route>
              <Route exact path="/entertainment"><News setProgress={this.setProgress}  key="entertainment" pageSize={this.pageSize} country="in" category="entertainment" /></Route>
              <Route exact path="/business"><News setProgress={this.setProgress}  key="business" pageSize={this.pageSize} country="in" category="business" /></Route>
              <Route exact path="/health"><News setProgress={this.setProgress}  key="health" pageSize={this.pageSize} country="in" category="health" /></Route>
              <Route exact path="/technology"><News setProgress={this.setProgress}  key="technology" pageSize={this.pageSize} country="in" category="technology" /></Route>
              <Route exact path="/sports"><News setProgress={this.setProgress}  key="sports" pageSize={this.pageSize} country="in" category="sports" /></Route>
              <Route exact path="/science"><News setProgress={this.setProgress}  key="science" pageSize={this.pageSize} country="in" category="science" /></Route>
            </Switch>
          </Router>
        </div>

      </>
    );
  }
}
 /*in News setProgress={this.setProgress}  component we are using key="general",key="health"  because if we dont put unique key in each News setProgress={this.setProgress}  component  then react will treat
all News setProgress={this.setProgress}  component as same and it will not remount News setProgress={this.setProgress}  component on moving from one category of News setProgress={this.setProgress}  to othe category of News setProgress={this.setProgress}  ,thats why we
are using unique for different News setProgress={this.setProgress}  component so that react will remount News setProgress={this.setProgress}  component on moving from 1 category of News setProgress={this.setProgress}  to other category 
of News setProgress={this.setProgress}  */


