import React, { Component } from 'react';
import './post-list-item.css'
class PostListItem extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         important: false,
    //         like: false
    //     }
    // }
    // onImportant = () => {
    //     this.setState(({ important }) => ({
    //         important: !important
    //     }))
    // }
    // onLike = () => {
    //     this.setState(({ like }) => ({
    //         like: !like
    //     }))
    // }
    render() {
        const { label, onDelete,  important, like, onToggleLiked, onToggleImportant } = this.props;
        // const { important, like } = this.state;
        let classNames = 'app-list-item d-flex justify-content-between';
        if (important) {
            classNames += ' important'
        }
        if (like) {
            classNames += ' like'
        }
        return (
            <li className={classNames}>
                <span 
                    onClick={onToggleLiked}
                    className='app-list-item-label'>{label}</span>
                <div className='d-flex justify-content-center align-items-center '>
                    <button
                        onClick={onToggleImportant}
                        className='btn-star btn-sm'>
                        <i className='fa fa-star'></i>
                    </button>
                    <button
                        onClick={onDelete}
                        className='btn-trash btn-sm'>
                        <i className='fa fa-trash-o'></i>
                    </button>
                    <i className='fa fa-heart'></i>
                </div>
            </li>
        );
    }
}

export default PostListItem;