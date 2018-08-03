import React from 'react'
import Link from 'next/link'
import { Provider } from 'zeus'
import routeConfig from './router'

import Logo from '../../components/logo'
import Footer from '../../components/footer'
import '../../styles/index.less'

let routes = []
function getRoutesFrom(configs) {
    configs.forEach(config => {
        if (config.options) {
            getRoutesFrom(config.options)
        } else {
            routes.push(config)
        }
    })
}

function mapRoutes(configs, route) {
    return configs.map((config, index) => {
        if (config.options) {
            return <li key={index} className="nav-menu">
                <div className="option-tag">{config.name}</div>
                <ul>
                    {mapRoutes(config.options, route)}
                </ul>
            </li>
        }
        else {
            return <li key={index} className="nav-menu">
                <Link href={config.route}>
                    <a className={route === config.route ? 'active' : ''}>{config.name}</a>
                </Link>
            </li>
        }
    })
}
getRoutesFrom(routeConfig)

function Layout(Doc) {
    return class Page extends React.Component {
        static getInitialProps(cxt) {
            const route = cxt.req ? cxt.req.url : ''
            return { route }
        }
        render() {
            let { route } = this.props
            if(!route){
                route = location.pathname
            }
            return (
                <Provider>
                    <div className="main doc-main">
                        <div className="main-sidebar">
                            <Logo />
                            <ul className="nav">
                                {mapRoutes(routeConfig, route)}
                            </ul>
                        </div>
                        <div className="main-content">
                            <div className="doc-container">
                                <Doc />
                            </div>
                            <Footer />
                        </div>
                    </div>
                </Provider>
            )
        }
    }
}

export default Layout