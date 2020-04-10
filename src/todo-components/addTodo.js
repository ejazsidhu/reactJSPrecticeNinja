import React, { Component } from 'react';
class AddTodo extends Component {
    state = {
        content: ''
    }
    handleChange = (e) => {
        console.log( e.target.value)
        this.setState({
            content: e.target.value
        })

    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
        this.props.addTodo(this.state);
        this.setState({
            content:''
        })

    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="input-field col s6">
                            <i className="material-icons prefix">mode_edit</i>
                            <input id="content" type="text" className="validate" onChange={this.handleChange} value={this.state.content}/>
                            <label htmlFor="content">Add Todo</label>
                        </div>
                    </div>
                    {/* <a class="waves-effect waves-light btn" >button</a> */}
                </form>
            </div>
        );
    }
}

export default AddTodo;