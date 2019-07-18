import React, { Component } from 'react';
import { Modal, Button } from 'semantic-ui-react';
import Modals from './modals';
import { connect } from 'react-redux';
import {hideModal, showModal} from './modal.action';
import { modalOpen, isModalLoading, modalTitle, selectedModal } from '../../../selectors/selectors';

class ModalCommon extends Component {
    state = { 
        fields: {}
     }

    handleOpen = () => this.setState({ modalOpen: true })

    handleClose = () => this.props.hideModal();

    static getDerivedStateFromProps(props, state) {
        if (props.modal !== state.modal) {
          return { modal: props.modal, fields: {} };
        }
        return null;
      }
    

    render() {
        const { modalOpen, modal, title, isModelLoading } = this.props;
        return (
            <Modal
                open={modalOpen}
                closeOnEscape={true}
                style={{ height: 'auto' }}
                onClose={this.handleClose}
                closeOnDimmerClick={true}
                size='small'
            >
                <Modal.Header>{title}</Modal.Header>
                <Modal.Content>
                    <Modals
                        modal={modal}
                        fields={this.state.fields}
                        onInputChange={this.onInputChange}
                    />
                </Modal.Content>
                <Modal.Actions>
                    <Button color='red' onClick={this.handleClose} negative>
                        Cancel
                    </Button>
                    <Button onClick={() => this.onDoneClick(this.props.isModelLoading)} loading={isModelLoading} positive>
                        Done
                    </Button>
                </Modal.Actions>
            </Modal>
        );
    }
}


export default connect(state => ({
    modalOpen: modalOpen(state),
    modal: selectedModal(state),
    isModalLoading: isModalLoading(state),
    title: modalTitle(state)
  }),{
      showModal,
      hideModal
  })(ModalCommon);