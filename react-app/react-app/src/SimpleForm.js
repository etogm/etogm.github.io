import React from "react"
import Greetings from "./Greetings.js"

class SimpleForm extends React.Component {
    state = {
        firstname: "",
    }

    onChangeName = event =>
        this.setState({
            firstname: event.target.value
        })

    render() {
        return (
            <div>
                <input name="firstname" onChange={this.onChangeName}/>
                <Greetings firstname={this.state.firstname}/>
            </div>
        );
    }
}

export default SimpleForm