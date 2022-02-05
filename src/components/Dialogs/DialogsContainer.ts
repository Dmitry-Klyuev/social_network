import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogReducer";
import {ActionsType, RootStateType} from "../../redux/types";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state: RootStateType) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}
let mapDispatchToProps = (dispatch:(action: ActionsType) => void) => {
    return {
        onNewMassageChange: (body:string) => {
            dispatch(updateNewMessageBodyCreator(body))
        },
        onSendMessageClick: () => {
            dispatch(sendMessageCreator())
        },
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)