import React from 'react';
import './search-panel.css'
class SearchPanel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            term: ''
        }
    }
    onUpdateSearch = (e) => {
        console.log(e.target.value)
        const term = e.target.value
        this.setState({term})
        this.props.onSearchSelect(term)
    }
    render() {
        return (
            <input
                onChange={this.onUpdateSearch }
                className='form-control search-panel'
                type='text'
                placeholder='Поиск по записи'
            />
        )
    }
}

export default SearchPanel;