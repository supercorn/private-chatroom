import React from "react";

export default class MessageActions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            actionHidden: true
        };
    }

    toggleActions() {
        this.setState({actionHidden: !this.state.actionHidden});
    }

    render() {
        const {message, deleteMessage, toggleEditForm} = this.props;
        return (
            <div className="message-action">
                <span
                    className={"fa fa-pencil " + (this.state.actionHidden ? "hidden" : "")}
                    onClick={() => {
                        toggleEditForm();
                        this.toggleActions();
                    }}>
                </span>
                <span
                    className={"fa fa-trash " + (this.state.actionHidden ? "hidden" : "")}
                    onClick={() => {
                        deleteMessage(message.id);
                        this.toggleActions();
                    }}>
                </span>
                <span
                    className="fa fa-ellipsis-v"
                    onClick={() => {
                        this.toggleActions();
                    }}>
                </span>
            </div>
        );
    }
}