import React, { Component } from "react";

// cookies
import Cookies from 'universal-cookie';

// offline detector
import { Offline } from "react-detect-offline";

// components
import BarHorizontalChart from "../components/BarHorizontalChart";
import CircularBarChart from "../components/CircularBarChart";
import Table from "../components/Table";
import VerticalBarChart from "../components/VerticalBarChart";

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

// img
import offline from "../assets/img/offline.png"

class HomePage extends Component {

    setCookie = () => {
        const cookies = new Cookies();
        cookies.set('cookie1', 'Hallo World', { path: '/', maxAge: '1000' });
    }

    handleCookie = () => {
        document.querySelector('.cookie').style.display = "none";
        this.setCookie();
    }

    handleClose = () => {
        document.querySelector('.offline-wrapper').style.display = "none";
    }

    render() {
        return (
            <div className="container">
                <div className="title">
                    <h1>Chart and Table Visualization</h1>
                </div>

                <div className="chart-wrapper">
                    <BarHorizontalChart />
                    <VerticalBarChart />
                    <CircularBarChart />
                </div>

                <div className="check-list">
                    <Table />
                </div>
                <Offline>
                    <div className="offline-wrapper">
                        <div className="offline">
                            <FontAwesomeIcon icon={faTimes} style={{ position: "absolute", top: "15px", right: "30px", color: "#BDBDBD" }} onClick={this.handleClose} />
                            <img src={offline} alt="img-offline"></img>
                            <h2>No Internet Connection</h2>
                            <p>Seems like you're not connected to the internet!</p>
                            <p>Check your connection and refresh the page</p>
                        </div>
                    </div>
                </Offline>
                <div className="cookie"><FontAwesomeIcon icon={faExclamationCircle} /><span>This Website uses cookies</span> <a href="#" onClick={this.handleCookie}>OK</a></div>
            </div>
        )
    }
}

export default HomePage;