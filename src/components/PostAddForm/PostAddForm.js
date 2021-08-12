import React, { Component } from 'react';
import './post-add-form.css';

class PostAddForm extends Component {
    render() {
        const { onNewPostAdd } = this.props
        return (
            <div className='bottom-panel d-flex'>
                <input
                    className='form-control new-post-label'
                    placeholder='О чем вы думаете сейчас?'
                    type='text'
                />
                <button
                    onClick={()=>onNewPostAdd(' Marat')}
                    className='btn btn-outline-secondary'>
                    Добавить
                </button>
            </div>
        );
    }
}

export default PostAddForm;