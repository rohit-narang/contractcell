import React, { Component } from 'react';
import { Grid, Form, Input, Dropdown, Button, Checkbox, Divider } from 'semantic-ui-react';

class Contract extends Component {
  state= {
    name: '',
    RL:false,
    BRC:false,
    BE:false,
    year:'',
    presentStatus:''
  }
  partyNameHandler=(event)=>{
    event.preventDefault();
    this.setState({name:event.target.value});
  }
  
  render() {
    const { value } = this.state;
    const options = [
      { key: '2018-19', text: '2018-19', value: '2018-19' },
      { key: '2017-18', text: '2017-18', value: '2017-18' },
      { key: '2016-17', text: '2016-17', value: '2016-17' },
    ]
    const status = [
      { key: 'Import Not Complete', text: 'Import Not Complete', value: 'Import Not Complete' },
      { key: 'PSV pending', text: 'PSV pending', value: 'PSV pending' },
      { key: 'Pending Scrutiny', text: 'Pending Scrutiny', value: 'Pending Scrutiny' },
      { key: 'SCN Issued', text: 'SCN Issued', value: 'SCN Issued' },
      { key: 'DM Issued', text: 'DM Issued', value: 'DM Issued' }
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
              <Input label='M/s' placeholder='Party Name' onChange={this.partyNameHandler} />
            </Form.Field>
            <Form.Field>
              <label>File No.</label>
              <Input
                label={<Dropdown defaultValue='2018-19' options={options} onChange={(e) => {this.setState({year: e.target.value}); console.log(e)}} />}
                labelPosition='right'
                placeholder='Find file No.'
              />
            </Form.Field>
            <Form.Field>
              <label>Documents</label>
              <Checkbox label={{ children: 'RL verified' }} onChange={(e) => {this.setState({RL: !this.state.RL})}} />
              <Divider horizontal></Divider>
              <Checkbox name='BRC' label={{ children: 'BRC Submitted' }} onChange={(e) => {this.setState({BRC: !this.state.BRC})}}/>
              <Divider horizontal></Divider>
              <Checkbox label={{ children: 'BE Submitted' }} onChange={(e) => {this.setState({BE: !this.state.BE})}}/>
            </Form.Field>
            <Form.Field>
              <label>Status</label>
              <Dropdown defaultValue='Import Not Complete' options={status} selection value={value} onChange={(e,{value}) => {this.setState({presentStatus:value});}}/>
            </Form.Field>
            <Button type='Submit'>Submit</Button>
          </Form>

        </Grid.Column>
      </Grid>
    );
  }
}

export default Contract;
