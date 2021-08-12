import React, { Component } from 'react';
import PostListItem from '../PostListItem/PostListItem';
import './post-list.css'
class PostList extends Component {
    render() {
        const { data, onDelete, onToggleLiked, onToggleImportant } = this.props;
        const elements = data.map(item => {
            const { id, ...itemProps } = item;
            return (
                <PostListItem
                    onToggleImportant={() => onToggleImportant(id)}
                    onToggleLiked={() => onToggleLiked(id)}
                    onDelete={() => onDelete(item.label)}
                    key={id}
                    {...itemProps}
                    />
            )
        });

        return (
            <ul className='app-list list-group'>
                {elements}
            </ul>
        );
    }
}

export default PostList;