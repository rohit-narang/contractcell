import { SHOW_MODAL, HIDE_MODAL } from '../../../constants/actionType';

const Modal = (state={}, action) => {
    
    switch(action.type) {
        case SHOW_MODAL:
        const { selectedModal, modalTitle } = action;
            return {
                ...state,
                modalOpen: true,
                selectedModal,
                modalTitle
            }
        case HIDE_MODAL:
            return {
                ...state,
                modalOpen: false
            }
        default:
        return state;
    }
}
export default Modal;