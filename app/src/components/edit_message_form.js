import React from "react";

export default class EditMessageForm extends React.Component {
    constructor() {
        super();
        this.state = {
            newMessage: ""
        };
    }

    componentDidMount() {
        this.setState({
            newMessage: this.props.message.text
        });
    }

    handleChange(e) {
        this.setState({newMessage: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        let message = {
            id: this.props.message.id,
            text: this.state.newMessage
        };
        this.props.editMessage(message);
    }

    render() {
        return (
            <form
                className={"edit-text-form " +this.props.hidden}
                onSubmit={this.handleSubmit.bind(this)}
                onBlur={this.handleSubmit.bind(this)}>
                <input
                    onChange={this.handleChange.bind(this)}
                    value={this.state.newMessage}
                    type="text"/>
            </form>
        );
    }
}
