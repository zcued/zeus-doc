import React, { Component } from 'react';
import Link from 'next/link'

class Page3 extends Component {
    render() {
        return (
            <div id="page-3" className="page-container">
                <div className="page-section-content">
                    <div className="page-section-title">A design system made for React.js</div>
                    <div className="tech-statement">
                        <img src={'/static/react.svg'} alt="" />
                        <img className="sign" src={'/static/plus.svg'} alt="" />
                        <img src={'/static/bitmap.svg'} alt="" />
                        <img className="sign" src={'/static/equal.svg'} alt="" />
                        <img src={'/static/logo.svg'} alt="" />
                    </div>
                    <p className="tech-description">Zeus Design 提供了将概念从概念应用到实际应用所需的所有指导，组件和设计资源。我们使用React和Sketch来帮助您完成旅程。</p>
                    <Link href="/docs/articles/get-started">
                        <a className="btn-large btn-left">详细说明</a>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Page3;