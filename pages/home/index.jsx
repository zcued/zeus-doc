import React, { Component } from 'react'
import Page1 from './page1'
import Page4 from './page4'
import Page2 from './page2'
import Page3 from './page3'
import Footer from '../../components/footer'
import '../../styles/index.less'
class Home extends Component {
    render() {
        return (
            <div id="home">
                <div className="home-main">
                    <Page1 />
                    <Page4 />
                    <Page2 />
                    <Page3 />
                </div>
                <Footer />
            </div>
        );
    }
}

export default Home;