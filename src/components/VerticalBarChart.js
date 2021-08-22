import React, { Component } from "react";

function animation() {
    const vBars = document.querySelectorAll('.vertical-bars li');
    vBars.forEach(element => {
        const presentage = element.getAttribute('data-precentage');
        setInterval(function () {
            element.style.height = presentage;
        })
    });
}

class VerticalBarChart extends Component {
    state = {
        text: ''
    }

    componentDidMount = () => {
        animation();
    }

    handleRadioClick = (event) => {
        console.log(event);
    }
    render() {
        return (
            <div className="chart-box" style={{ margin: "0 20px" }}>
                <div className="chart-name">
                    <h3>Chart 2</h3>
                </div>
                <div className="chart-contain">
                    <ul className="vertical-bars">
                        <li className="bar1" data-precentage="70%"></li>
                        <li className="bar2" data-precentage="40%"></li>
                        <li className="bar1" data-precentage="85%"></li>
                        <li className="bar1" data-precentage="50%"></li>
                        <li className="bar1" data-precentage="75%"></li>
                        <li className="bar1" data-precentage="70%"></li>
                        <li className="bar1" data-precentage="40%"></li>
                        <li className="bar2" data-precentage="85%"></li>
                        <li className="bar1" data-precentage="50%"></li>
                        <li className="bar1" data-precentage="75%"></li>
                        <li className="bar2" data-precentage="50%"></li>
                        <li className="bar1" data-precentage="75%"></li>
                    </ul>
                    <form>
                        <ul className="number-text">
                            <li>
                                <span></span>
                                <label htmlFor="text1">Text 1</label>
                            </li>
                            <li>
                                <span></span>
                                <label htmlFor="text2">Text 2</label>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        )
    }
}

export default VerticalBarChart;