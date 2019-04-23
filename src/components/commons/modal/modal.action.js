import { SHOW_MODAL, HIDE_MODAL } from '../../../constants/actionType';

export const showModal = (selectedModal, modalTitle) => dispatch => {
    dispatch({
        type: SHOW_MODAL,
        selectedModal,
        modalTitle
    });
};

export const hideModal = () => dispatch => {
    return (
        dispatch({
            type: HIDE_MODAL
        })
    );
}