import React, { Component } from 'react';

// Define a class component named FormClass
export default class FormClass extends Component {
    constructor(props) {
        super(props);
        // Initialize state with name and email fields
        this.state = {
            name: "",
            email: ""
        };
    }

    render() {
        return (
            <div>
                <form>
                    {/* Input field for entering name */}
                    <label>Name</label>
                    <input 
                        type="text" 
                        value={this.state.name} 
                        onChange={(e) => this.setState({ name: e.target.value })}
                    />

                    {/* Input field for entering email */}
                    <label>Email</label>
                    <input 
                        type="text" 
                        value={this.state.email} 
                        onChange={(e) => this.setState({ email: e.target.value })}
                    />

                    {/* Submit button */}
                    <button>Submit</button>
                </form>

                {/* Displaying current state values */}
                <p>Name: {this.state.name}</p>
                <p>Email: {this.state.email}</p>
            </div>
        );
    }
}
