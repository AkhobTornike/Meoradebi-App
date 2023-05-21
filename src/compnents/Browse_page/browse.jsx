import React from 'react'

import './browse.css'

import {FaSearch} from 'react-icons/fa';
import { Link } from 'react-router-dom';

import Browsing from './browsingFunction';
import Header from '../Header/Header';

const Browse = () => {

  return (
            <>
                <Header/>
                <Browsing/>
            </>
  )
}

export default Browse