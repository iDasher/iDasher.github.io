import React, { useState } from 'react';
import { Box, Input, Button } from '@chakra-ui/react';

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    // Filter mod data based on search term
    const results = modsData.filter(mod =>
      mod.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div>
      <input type="text" value={searchTerm} onChange={handleSearch} placeholder="Search mods..." />
      <ul>
        {searchResults.map(mod => (
          <li key={mod.id}>
            <img src={mod.image} alt={mod.name} style={{ width: '100px', height: '100px' }} />
            <div>Name: {mod.name}</div>
            <div>Conflicts: {mod.conflicts.join(', ')}</div>
            <div>Traits: {mod.traits.join(', ')}</div>
            <div>Size: {mod.size}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Search