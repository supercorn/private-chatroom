import React from "react";

export default class ChatForm extends React.Component {
    constructor() {
        super();
        this.state = {
            message: ""
        };
    }

    handleChange(e) {
        this.setState({message: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.sendMessage(this.state.message);
        this.setState({message: ""});
    }

    render() {
        return (
            <form
                onSubmit={this.handleSubmit.bind(this)}
                className="chat-form">
                <input
                    onChange={this.handleChange.bind(this)}
                    value={this.state.message}
                    placeholder="Type something and hit ENTER"
                    type="text"/>
            </form>
        );
    }
}
