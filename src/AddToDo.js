import React, {Component} from 'react';

class AddToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {val: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({val: event.target.value}) //whatever event that triggered this setState
    }
    handleSubmit(event) {
        event.preventDefault(); //prevents the page from updating when form is submitted (either on click or button press)
        this.props.addToDo(this.state.val)
        this.setState({val: ''})
    }

    render() {
        return <form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.val} onChange={this.handleChange}/>
            <input type="submit" value="Add" />
         </form>
    }
}
//form tags will take clicks and keyboard input HTML!
//setState could be called trigger re-render
export default AddToDo