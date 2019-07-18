import React from 'react';
import {Menu} from 'semantic-ui-react';

const CustomMenu = () => {
    return(
        <Menu attached color='blue' inverted widths={3}>
        <Menu.Item name='home' />
        <Menu.Item
          name='messages'
        />
        <Menu.Item
          name='friends'
        />
      </Menu>
    );
}

export default CustomMenu;