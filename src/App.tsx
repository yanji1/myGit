import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import  './App.css'
import {NavLink, Route} from "react-router-dom";
import Lottery from "./components/Lottery";

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <NavLink to="/"/>
                <Route exact={true} path="/">
                    <Header/>
                    <Footer />
                </Route>
                <NavLink to="/lottery"/>
                <Route path="/lottery" component={Lottery}/>
            </div>
        );
    }
}

export default App;
