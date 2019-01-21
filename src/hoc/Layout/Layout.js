import React from 'react';

//material design
import {Layout, Content} from 'react-mdl';

//hoc
import Header from '../Header/Header';
import Drawer from '../Drawer/Drawer';

const layout = (props) => (
    <div className="demo-big-content">
        <Layout>
            <Header/>
            <Drawer/>
            <Content>
                {props.children}
            </Content>
        </Layout>
    </div>
);

export default layout;