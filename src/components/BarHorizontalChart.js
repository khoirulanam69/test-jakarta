import React, { Component } from "react";

function animation() {
    const hBars = document.querySelectorAll('.horizontal-bars span');
    hBars.forEach(element => {
        const presentage = element.getAttribute('data-precentage');
        setInterval(function () {
            element.style.width = presentage;
        })
    });
}

class BarHorizontalChart extends Component {
    componentDidMount = () => {
        animation();
    }

    render() {
        return (
            <div className="chart-box">
                <div className="chart-name">
                    <h3>Chart 1</h3>
                </div>
                <div className="chart-contain">
                    <ul className="months">
                        <li><span>May</span></li>
                        <li><span>Apr</span></li>
                        <li><span>Mar</span></li>
                        <li><span>Feb</span></li>
                        <li><span>Jan</span></li>
                    </ul>
                    <ul className="horizontal-bars">
                        <li><span className="may" data-precentage="70%"></span></li>
                        <li><span className="apr" data-precentage="40%"></span></li>
                        <li><span className="mar" data-precentage="85%"></span></li>
                        <li><span className="feb" data-precentage="50%"></span></li>
                        <li><span className="jan" data-precentage="75%"></span></li>
                    </ul>
                    <ul className="days">
                        <li>01</li>
                        <li>02</li>
                        <li>03</li>
                        <li>04</li>
                        <li>05</li>
                        <li>06</li>
                        <li>07</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default BarHorizontalChart;