import React, { Component, Fragment } from 'react';
import { Grid } from 'semantic-ui-react';
import CustomMenu from '../../components/commons/menu/menu';
import SidebarMenu from '../../components/commons/sidebar/sidebar';
import { Sidebar } from 'semantic-ui-react';
import {DashboardRoutes} from '../dashboardRoutes';

class Dashboard extends Component {
    render() {
        return (
            <Fragment>
                <CustomMenu />
                <div className="mainView">

                    <style>{`
      body > div,
      body > div > div,
      body > div > div > div.mainView {
        height: 100%;
      }
    `}</style>
                    <Grid style={{ height: '100%' }}>
                        <Grid.Row>
                            <Grid.Column width={3}>
                                <SidebarMenu />
                            </Grid.Column>
                                <Sidebar.Pusher>
                                    <DashboardRoutes />
                                </Sidebar.Pusher>
                        </Grid.Row>
                    </Grid>
                </div>
            </Fragment>
        );
    }
}

export default Dashboard;