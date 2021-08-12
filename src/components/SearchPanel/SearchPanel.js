import React from 'react';
import './search-panel.css'
class SearchPanel extends React.Component {
    render() {
        return (
            <input
                className='form-control search-panel'
                type='text'
                placeholder='Поиск по записи'
            />
        )
    }
}

export default SearchPanel;