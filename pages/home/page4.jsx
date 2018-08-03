import React, { Component } from 'react'

class Page4 extends Component {
    render() {
        return (
            <div id="page-4" className="page-container">
                <div className="page-section-content">
                    <div className="page-section-title">A design system made for React.js</div>

                    <div className="introduction">
                        <img className="intro-img intro-img-1" src={'/static/intro-1.png'} alt="" />
                        <img className="intro-img intro-img-2" src={'/static/intro-2.png'} alt="" />
                        <div className="intro-item">
                            <div className="intro-title">UI Component</div>
                            <div className="intro-content">
                                基于 Zeus Design 设计语言，我们提供了一套开箱即用的高质量 React 组件，用于开发和服务于企业级中前台产品。使用样式化组件构建，以保持样式独立，并减少在应用程序中编写自定义CSS的需求。基于可配置的设计系统，Rebass的道具API使构建一致，响应速度更快的网络应用变得更加简单和快捷。
                            </div>
                        </div>

                        <div className="intro-item">
                            <div className="intro-title"> 超级炫酷 </div>
                            <div className="intro-content">
                                Zeus 的企业级产品是一个庞大的体系。这类产品不仅量级巨大且功能复杂，而且变动和并发频繁，常常需要设计与开发能够快速的做出响应。同时这类产品中有存在很多类似的页面以及组件，可以通过抽象得到一些稳定且高复用性的内容。
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Page4;