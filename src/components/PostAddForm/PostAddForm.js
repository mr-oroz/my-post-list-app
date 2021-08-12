import React, { Component } from 'react';
import './post-add-form.css';

class PostAddForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: ''
        }
    }
    onValueChange =(e) => {
        this.setState({
            text: e.target.value
        })
    }
    onValueSubmit =(e) => {
        e.preventDefault()
        this.props.onNewPostAdd(this.state.text)
        this.setState({
            text: ''
        })
    }
    
    render() {
        return (
            <form 
                onSubmit={this.onValueSubmit}
                className='bottom-panel d-flex'>
                <input
                    onChange={this.onValueChange}
                    className='form-control new-post-label'
                    placeholder='О чем вы думаете сейчас?'
                    type='text'
                    value={this.state.text}
                />
                <button
                    type='submit'
                    className='btn btn-outline-secondary'>
                    Добавить
                </button>
            </form>
        );
    }
}

export default PostAddForm;