import React from 'react';
import './app-header.css';
class Header extends React.Component {
    render() {
        const { allPost, Liked } = this.props;
        return (
            <div className='app-header d-flex'>
                <h1>Oroz Zhumabekov</h1>
                <h2>{allPost} записей из них понравилось {Liked}</h2>
            </div>
        )
    }
}

export default Header;