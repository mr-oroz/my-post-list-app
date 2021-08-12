import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import PostAddForm from './components/PostAddForm/PostAddForm';
import PostList from './components/PostList/PostList';
import PostStatusFilter from './components/PostStatusFilter/PostStatusFilter';
import SearchPanel from './components/SearchPanel/SearchPanel';
let a = 'a'
a = 'b'
console.log(a)
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        { label: 'hello world', important: false, like: false, id: 1 },
        { label: 'hello ITCBootcamp', important: false, like: false, id: 2 },
        { label: 'hello Marat', important: false, like: false, id: 3 },
        { label: 'Privet Mir', important: false, like: false, id: 4 },
      ],
      filter: 'all',
      term: '',
    }
    this.maxId = 5
  }

  onDeleteItem = (label) => {
    this.setState(({ data }) => {
      const index = data.findIndex(value => value.label === label);
      const newArr = [...data.slice(0, index), ...data.slice(index + 1)];
      return {
        data: newArr
      }
    })
  }
  onToggleLiked = (id) => {
    this.setState(({ data }) => {
      const index = data.findIndex(elem => elem.id === id);
      const old = data[index];
      const newItem = { ...old, like: !old.like };
      const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
      return {
        data: newArr
      }
    })
  }

  onToggleImportant = (id) => {
    console.log(id)
    this.setState(({ data }) => {
      const index = data.findIndex(elem => elem.id === id);
      const old = data[index];
      const newItem = { ...old, important: !old.important };
      const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
      return {
        data: newArr
      }
    })
  }

  filterPost = (items, filter) => {
    if (filter === 'like') {
      return items.filter(elem => elem.like)
    } else {
      return items;
    }
  }

  onFilterSelect = (filter) => {
    this.setState({ filter })
  }

  onNewPostAdd = (body) => {
    const newItem = {
      label: body,
      important: false,
      like: false,
      id: this.maxId++
    }
    this.setState(({data}) => {
      const newArr = [...data, newItem]
      return {
        data: newArr
      }
    })
  }

  searchPost = (items, term) => {
    if(term.length === 0) {
      return items
    } 
    return items.filter(item => {
      return item.label.indexOf(term) > -1
    })
  }

  onSearchSelect = (term) => {
    this.setState({term})
  }

  render() {

    const { data, filter, term } = this.state;
    const allPost = data.length;
    const Liked = data.filter(elem => elem.like).length;
    const visiblePost = this.filterPost(this.searchPost(data, term), filter)
    return (
      <div className='app'>
        <Header
          allPost={allPost}
          Liked={Liked} />
        <div className='search-panel d-flex'>
          <SearchPanel onSearchSelect={this.onSearchSelect} />
          <PostStatusFilter
            filter={filter}
            onFilterSelect={this.onFilterSelect}
          />
        </div>
        <PostList
          onToggleImportant={this.onToggleImportant}
          onToggleLiked={this.onToggleLiked}
          onDelete={this.onDeleteItem}
          data={visiblePost} />
        <PostAddForm onNewPostAdd={this.onNewPostAdd} />
      </div>
    )
  }
}

export default App;
