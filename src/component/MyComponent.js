import React from "react";
class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''

        }
    }
    handleChange = (event, id) => {
        let copyState = []
        copyState = { ...this.state }
        copyState[id] = event.target.value
        this.setState({
            ...copyState
        })
    };



    render() {
        console.log('check state name', this.state.name)
        return (
            <>
                <h1> Heloo mother fucker : {this.state.name}</h1>
                <input onChange={(event) => { this.handleChange(event, 'name') }}></input>
            </>

        )
    }

};
export default MyComponent;
