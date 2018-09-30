import React from "react";
import EditMessageForm from "./edit_message_form";
import MessageActions from "./message_actions";

export default class Message extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editFormHidden: true
        };
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (this.props.messages !== nextProps.messages && !this.state.editFormHidden) {
            this.toggleEditForm();
        }
    }

    toggleEditForm() {
        this.setState({editFormHidden: !this.state.editFormHidden});
    }

    render() {
        const {message, editMessage, deleteMessage} = this.props;
        const editFormHidden = this.state.editFormHidden;
        return (
            <React.Fragment>
                {
                    !editFormHidden &&
                    <EditMessageForm
                        message={message}
                        editMessage={editMessage}
                    />
                }
                {
                    editFormHidden &&
                    <div className={"message-text " + (editFormHidden ? "" : "hidden")}>{message.text}</div>
                }
                {
                    <MessageActions
                        message={message} deleteMessage={deleteMessage}
                        toggleEditForm={this.toggleEditForm.bind(this)}/>
                }
            </React.Fragment>

        );
    }
}