import React from "react";

export default class ChatHeader extends React.Component {

    render() {
        const {messagesCount} = this.props;
        return (<p className="header">Me&Myself #{messagesCount}</p>);
    }
}