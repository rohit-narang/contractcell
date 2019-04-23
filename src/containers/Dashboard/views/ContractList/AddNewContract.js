import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Form, Dropdown, Input} from 'semantic-ui-react'

class AddNewContract extends Component {
render(){
    return(
        <Form>
            <Form.Field>
                <label>Party Name</label>
                <Input label='M/s' placeholder='Party Name' />
            </Form.Field>
            <Form.Field>
                <label>File Number</label>
                <Input placeholder='Party Name'
                label={<Dropdown defaultValue='2018-19' />}
                labelPosition='right' />
            </Form.Field>
        </Form>
    );
}
}

export default connect(null, null)(AddNewContract);