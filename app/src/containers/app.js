import React from "react";
import {connect} from "react-redux";

import ChatHeader from "../components/chat_header";
import ChatRoom from "../components/chat_room";
import ChatForm from "../components/chat_form";
import {bindActionCreators} from "redux";
import {addMessage, deleteMessage, editMessage} from "../actions/messages";

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    sendMessage(message) {
        this.props.addMessage(message);
    }

    handleDelete(id) {
        this.props.deleteMessage(id);
    }

    handleEdit(message) {
        this.props.editMessage(message);
    }

    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({behavior: "smooth"});
    };

    componentDidMount() {
        this.scrollToBottom();
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }

    render() {
        const {messages} = this.props;
        return (
            <div>
                <ChatHeader messagesCount={this.props.messages.length}/>
                <ChatRoom
                    messages={messages}
                    deleteMessage={this.handleDelete.bind(this)}
                    editMessage={this.handleEdit.bind(this)}/>
                <div
                    style={{float: "left", clear: "both"}}
                    ref={(el) => {
                        this.messagesEnd = el;
                    }}>
                </div>
                <ChatForm sendMessage={this.sendMessage.bind(this)}/>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            addMessage,
            deleteMessage,
            editMessage
        },
        dispatch
    );
}

function mapStateToProps(state) {
    return {
        messages: state.messages
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);