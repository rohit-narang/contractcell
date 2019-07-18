import React from 'react';
import AddNewContract from '../../../containers/Dashboard/views/ContractList/AddNewContract';

const selectModal= {
    AddNewContract : AddNewContract
}
const Modals = ({modal,...props}) => {
        return React.createElement(selectModal[modal], props);
}

export default Modals;