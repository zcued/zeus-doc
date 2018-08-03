import React, { Component } from 'react'
import Link from 'next/link'

class Page1 extends Component {
    render() {
        return (
            <div id="page-1" className="page">
                <div className="page-section-content">
                    <Link href="/docs/articles/get-started">
                        <a className="btn-large btn-left">Start</a>
                    </Link>

                    <div className="zeus-potrait">
                        <img src={'/static/zeus.png'} alt="" />
                    </div>
                    <Link href="/docs/components/icon">
                        <a className="btn-large btn-right">Learn</a>
                    </Link>

                    <div className="content-footer">
                        <p>这里有句简短的描述，可中文可英文，也可中英文对照</p>
                        <p>Focus on the essential experience</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Page1;