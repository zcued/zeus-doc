import React from 'react'
import Link from 'next/link'
import { Provider } from 'zeus'
import Router from 'next/router'
import NProgress from 'nprogress'

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
    return <ul className="nav">
        {
            configs.map((config, index) => {
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
    </ul>
}
getRoutesFrom(routeConfig)

function Layout(Doc) {
    return class Page extends React.Component {

        static getInitialProps(cxt) {
            const route = cxt.req ? cxt.req.url : ''
            return { route }
        }

        componentDidMount() {
            Router.onRouteChangeStart = () => {
                NProgress.start()
            }
            Router.onRouteChangeComplete = () => {
                NProgress.done()
            }
            Router.onRouteChangeError = () => NProgress.done()
        }

        render() {
            let { route } = this.props
            if (!route) {
                route = location.pathname
            }
            return (
                <Provider>
                    <div className="main doc-main">
                        <div className="main-sidebar">
                            <Logo />
                            {mapRoutes(routeConfig, route)}
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