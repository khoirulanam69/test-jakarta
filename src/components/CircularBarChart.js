import { Component } from "react";

function animation() {
    const cBar = document.querySelector('.circle2');
    const presentage = cBar.getAttribute('data-precentage');
    const dashoffset = 440 - (440 * presentage) / 100;
    setInterval(function () {
        cBar.style.strokeDashoffset = dashoffset;
    })
}

class CircularBarChart extends Component {
    componentDidMount = () => {
        animation();
    }

    render() {
        return (
            <div className="chart-box">
                <div className="chart-name">
                    <h3>Chart 3</h3>
                </div>
                <div className="chart-contain">
                    <div className="circular-bar">
                        <div className="percent">
                            <svg>
                                <circle className="circle2" data-precentage="70" cx="70" cy="70" r="70"></circle>
                                <circle cx="70" cy="70" r="70"></circle>
                            </svg>
                            <div className="number">
                                <h2>70<span>%</span></h2>
                            </div>
                        </div>
                    </div>
                    <div className="circular-text">
                        <form>
                            <span></span>
                            <label htmlFor="text1">Text 1</label>
                            <p>210 Guest(s)</p>
                            <hr />
                            <span></span>
                            <label htmlFor="text2">Text 2</label>
                            <p>40 Guest(s)</p>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default CircularBarChart;