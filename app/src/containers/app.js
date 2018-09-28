import React from "react";
import {connect} from "react-redux";
import { Jumbotron, Container } from "reactstrap";

import Alerts from "./alerts";

class App extends React.Component {
    render() {
        const {alerts} = this.props;

        return (
            <div className="container">

                <div className="content">
                    <div>
                        <Alerts alerts={alerts}/>
                    </div>
                    <div className="text-center">
                        <Jumbotron fluid>
                            <Container fluid>
                                <h1 className="display-3">Welcome to the app-skeleton</h1>
                                <p className="lead">
                                    you can simply use this basic setup to start your react/redux
                                    project.
                                </p>
                            </Container>
                        </Jumbotron>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        alert: state.alert
    };
}

export default connect(mapStateToProps)(App);
