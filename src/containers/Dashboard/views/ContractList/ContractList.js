import React, { Component } from 'react';
import { Input, Form, Select, Dropdown } from 'semantic-ui-react';

class ContractList extends Component {
    render() {
        const options = [
            { key: '2018-19', text: '2018-19', value: '2018-19' },
            { key: '2017-18', text: '2017-18', value: '2017-18' },
            { key: '2016-17', text: '2016-17', value: '2016-17' },
        ]
        const genderOptions = [
            { key: 'm', text: 'Male', value: 'male' },
            { key: 'f', text: 'Female', value: 'female' },
          ]
          
        return (
            <Form>
                <Form.Group widths='equal'>
                    <Form.Field
                        id='form-input-control-party name'
                        control={Input}
                        label='Party name'
                        placeholder='Party name'
                    />
                    <Form.Field
                        id='form-input-control-last-name'
                        control={Input}
                        label={<Dropdown defaultValue='2018-19' options={options} />}
                        placeholder='File No'
                    />
                    <Form.Field
                        control={Select}
                        options={genderOptions}
                        label={{ children: 'Category', htmlFor: 'form-select-control-category' }}
                        placeholder='Category'
                        search
                        searchInput={{ id: 'form-select-control-category' }}
                    />
                </Form.Group>
            </Form>
        );
    }
}

export default ContractList;