import React from 'react'

// import './browse.css'


import Browsing from './browsingFunction';
import Header from '../Header/Header';

const Browse = () => {

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  return (
            <>
                <Header onSearch={handleSearch}/>
                <Browsing/>
            </>
  )
}

export default Browse