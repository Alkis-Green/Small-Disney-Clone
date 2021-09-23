import React from 'react';
import { Container } from './SearchBarElements';


const SearchBar = () => {
    return (
        <Container>
          <input type="text" placeholder="Search by title, character or genre" />  
        </Container>
    );
};

export default SearchBar;