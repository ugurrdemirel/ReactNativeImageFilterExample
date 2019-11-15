import React, { Component } from 'react';
import {Router, Scene} from 'react-native-router-flux';
import MainPage from '../page/MainPage';
import EditPage from '../page/EditPage';
export default class NavigationComponent extends Component {
    state = {  }
    render() {
        return (
            <Router>
                <Scene key="root">
                    <Scene key="Main" component={MainPage} hideNavBar={true} initial/>
                    <Scene key="Edit" component={EditPage} hideNavBar={false} navTransparent={true} navigationBarStyle={{backgroundColor:'#1565C0', blur:1}} title={"Edit Photo"} navBarButtonColor={"white"} titleStyle={{color:'white'}}/>
                </Scene>
            </Router>
        );
    }
}