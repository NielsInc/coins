import React from 'react';
import './style/style.scss';

import {Layout, Menu, Breadcrumb, Icon} from 'antd';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import CoinDetailPage from "./pages/CoinDetailPage";
import SearchPage from "./pages/SearchPage";



const {Content, Footer, Sider} = Layout;

const {SubMenu} = Menu;

class App extends React.Component {
    state = {
        collapsed: false,
    };

    onCollapse = collapsed => {
        this.setState({collapsed});
    };

    render() {
        return (
            <Router>
                <Layout style={{minHeight: '100vh'}}>
                    <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                        <div className="logo">
                            <h1>Coins</h1>
                        </div>
                        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                            <Menu.Item key="1">
                                <Icon type="database"/>
                                <span>Collection</span>
                                <Link to="/collection"/>
                            </Menu.Item>

                            <Menu.Item key="2">
                                <Icon type="search"/>
                                <span>Search</span>
                                <Link to="/search"/>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Icon type="money-collect"/>
                                <span>Store</span>
                                <Link to="/store"/>
                            </Menu.Item>
                            <SubMenu
                                key="sub1"
                                title={
                                    <span>
                  <Icon type="user"/>
                  <span>User</span>
                </span>
                                }
                            >

                                <Menu.Item key="4">
                                    <Icon type="user"/>
                                    <span>Profile</span>
                                    <Link to="/profile"/>
                                </Menu.Item>
                                <Menu.Item key="5">
                                    <Icon type="logout"/>
                                    <span>Sign out</span>
                                    <Link to="/signout"/>
                                </Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout className="coin__layout">
                        <Content style={{margin: '0 16px'}}>
                            <Switch>
                                <Route exact path="/">
                                    <h1>Home</h1>
                                </Route>
                                <Route exact path="/collection">
                                    <h1>Collection</h1>
                                </Route>
                                <Route path="/coin/:id/:prettyUrl" component={CoinDetailPage}/>
                                <Route exact path="/search">
                                    <SearchPage/>
                                </Route>
                                <Route exact path="/store">
                                    <h1>Store</h1>
                                </Route>
                                <Route exact path="/profile">
                                    <h1>Profile</h1>
                                </Route>
                                <Route exact path="/signout">
                                    <h1>Sign out</h1>
                                </Route>
                            </Switch>
                        </Content>
                        <Footer style={{textAlign: 'center'}}>Coins &copy;2020 Niels Van Vliet</Footer>
                    </Layout>
                </Layout>
            </Router>
        );
    }
}

export default App;
