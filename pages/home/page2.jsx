import React, { Component } from 'react';

class Page2 extends Component {
    render() {
        return (
            <div id="page-2" className="page-container">
                <div className="page-section-content">
                    <div className="page-section-title">Solution</div>
                    <ul className="ball-list">
                        <li className="ball-item">
                            <div className="ball-img">
                                <img src={'/static/ball-1.png'} alt="" />
                            </div>
                            <div className="ball-text">设计观</div>
                        </li>
                        <li className="ball-item">
                            <div className="ball-img">
                                <img src={'/static/ball-2.png'} alt="" />
                            </div>
                            <div className="ball-text">特点</div>
                        </li>
                        <li className="ball-item">
                            <div className="ball-img">
                                <img src={'/static/ball-3.png'} alt="" />
                            </div>
                            <div className="ball-text">自定义</div>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Page2;