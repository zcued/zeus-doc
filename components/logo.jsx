import React, { Component } from 'react'
import Link from 'next/link'

class Logo extends Component {
    render() {
        return (
            <div className="logo">
                <Link href="/">
                    <a><img src={'../../static/logo.svg'} alt="" /></a>
                </Link>
            </div>
        );
    }
}

export default Logo;