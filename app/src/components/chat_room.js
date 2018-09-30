import React from "react";
import Message from "./message";

export default class ChatRoom extends React.Component {
    render() {
        const {messages} = this.props;
        return (
            <ul className="messages-list">
                {messages.map((message, index) => {
                    return (
                        <li key={index} className="message">
                            <div className="message-sender">me</div>
                            <div className="row message-wrapper">
                                <Message
                                    messages={messages}
                                    message={message}
                                    editMessage={this.props.editMessage}
                                    deleteMessage={this.props.deleteMessage}/>
                            </div>
                        </li>
                    );
                })}
            </ul>
        );
    }
}