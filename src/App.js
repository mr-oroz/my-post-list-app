import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import PostAddForm from './components/PostAddForm/PostAddForm';
import PostList from './components/PostList/PostList';
import PostStatusFilter from './components/PostStatusFilter/PostStatusFilter';
import SearchPanel from './components/SearchPanel/SearchPanel';
let a = 'a'
a= 'b'
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
    }
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
    console.log(body)
  }
  render() {

    const { data, filter } = this.state;
    const allPost =data.length;
    const Liked = data.filter(elem => elem.like).length;
    return (
      <div className='app'>
        <Header
          allPost={allPost}
          Liked={Liked} />
        <div className='search-panel d-flex'>
          <SearchPanel />
          <PostStatusFilter
            filter={filter}
            onFilterSelect={this.onFilterSelect}
          />
        </div>
        <PostList
          onToggleImportant={this.onToggleImportant}
          onToggleLiked={this.onToggleLiked}
          onDelete={this.onDeleteItem}
          data={data} />
        <PostAddForm onNewPostAdd={this.onNewPostAdd} />
      </div>
    )
  }
}

export default App;
