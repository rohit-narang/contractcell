import React, { Fragment, Component } from 'react';
import { Menu, Sidebar, Icon, Accordion, Button } from 'semantic-ui-react';
import { contractSidebar } from '../../../constants/sidebars';
import map from 'lodash/map';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {showModal} from '../modal/modal.action';

class SidebarMenu extends Component {
    state={
        activeIndex:0
    }

    handleClick = (e,{index}) => {
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index
        this.setState({ activeIndex: newIndex })
      }
      render(){
        const { activeIndex } = this.state
        return (
            <Fragment>
                <Sidebar.Pushable>
                    <Sidebar as={Menu} animation='overlay' icon='labeled' inverted vertical visible>
                        {map(contractSidebar, ({ title, icon, items }, index) => {
                            return (<Menu.Item key={title}>
                                <Accordion inverted>
                                    <Accordion.Title
                                        index={index}
                                        active={activeIndex === index}
                                        onClick={this.handleClick}
                                    >
                                        <Icon name={icon} />
                                        {title}
                                    </Accordion.Title>
                                    <Accordion.Content active={activeIndex === index}>
                                        <Menu.Menu>
                                            {map(items, ({ name, type, route, modalName }) => {
                                                if (type === 'link') {
                                                    return (
                                                        <Menu.Item
                                                            key={name}
                                                            name={name}
                                                            as={Link} to={`${route}`}
                                                        />
                                                    );
                                                }
                                                else {
                                                    return (
                                                        <Menu.Item key={name}>
                                                            <Button
                                                                content={name}
                                                                onClick={() => {
                                                                    this.props.showModal(modalName, name);
                                                                }}
                                                                primary
                                                                size="mini"
                                                            />
                                                        </Menu.Item>
                                                    );
                                                }
                                            })}
                                        </Menu.Menu>
                                    </Accordion.Content>
                                </Accordion>
                            </Menu.Item>);
                        }
                        )
                        }
                    </Sidebar>
                </Sidebar.Pushable>
            </Fragment >
    
        );
      }
    
}

export default connect(
    null,
    {
      showModal
    }
  )(SidebarMenu);
