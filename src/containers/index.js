import React, { Component } from 'react';
import { Grid, Form, Segment, Input, Button, Dropdown } from 'semantic-ui-react';


class Home extends Component {
    render() {
        const options = [
            { key: '2018-19', text: '2018-19', value: '2018-19' },
            { key: '2017-18', text: '2017-18', value: '2017-18' },
            { key: '2016-17', text: '2016-17', value: '2016-17' },
          ]
        return (

            <Grid verticalAlign='middle' container
                centered
                textAlign="center"
                style={{ height: '100%' }}>
                <Grid.Column style={{ maxWidth: 350 }}>
                    
                        <Form>
                            <Form.Field>
                                <label>Party Name</label>
                                <input placeholder='Party Name' />
                            </Form.Field>
                            <Form.Field>
                                <label>File No.</label>
                                <Input
                                    label={<Dropdown defaultValue='2018-19' options={options} />}
                                    labelPosition='right'
                                    placeholder='Find file No.'
                                />
                            </Form.Field>
                            <Button type='Search'>Search</Button>
                        </Form>
                    
                </Grid.Column>
            </Grid>

        );
    }
}

export default Home;