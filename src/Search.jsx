import React, { useState } from 'react';
import { Input, Button, Flex, Box, Image, Text, Heading } from '@chakra-ui/react';
import modsData from './modsData';

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredMods, setFilteredMods] = useState(modsData);
  const [selectedMods, setSelectedMods] = useState([]);
  const [showModpack, setShowModpack] = useState(false);

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    // Filter mods based on search term
    const filtered = modsData.filter(mod =>
      mod.name.toLowerCase().includes(term)
    );
    setFilteredMods(filtered);
  };

  const filterByTrait = (trait) => {
    // Filter mods based on trait
    const filtered = modsData.filter(mod =>
      mod.traits.includes(trait)
    );
    setFilteredMods(filtered);
  };

  const resetFilters = () => {
    // Reset search term and show all mods
    setSearchTerm('');
    setFilteredMods(modsData);
  };

  const handleViewModpack = () => {
    setShowModpack(true);
  };

  const handleBackToSearch = () => {
    setShowModpack(false);
  };

  const handleAddToModpack = (mod) => {
    setSelectedMods([...selectedMods, mod]);
  };

  return (
    <Box>
      {showModpack ? (
        <>
          <Heading>Modpack Folder</Heading>
          <Flex flexWrap="wrap">
            {selectedMods.map(mod => (
              <Box key={mod.id} w="200px" p={4} borderWidth="1px" borderRadius="lg" m={2}>
                <Image src={mod.image} alt={mod.name} mb={2} boxSize="200px" />
                <Text color="black">{mod.name}</Text>
              </Box>
            ))}
          </Flex>
          <Button onClick={handleBackToSearch}>Back to Search</Button>
        </>
      ) : (
        <>
          <Input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search mods by name..."
            mb={4}
          />
          <Flex mb={4}>
            <Button onClick={resetFilters} mr={4}>Reset</Button>
            <Button onClick={() => filterByTrait('Bosses')} colorScheme="blue">Bosses</Button>
          </Flex>
          <Flex flexWrap="wrap">
            {filteredMods.map(mod => (
              <Box key={mod.id} w="200px" p={4} borderWidth="1px" borderRadius="lg" m={2}>
                <Image src={mod.image} alt={mod.name} mb={2} boxSize="200px" onClick={() => handleAddToModpack(mod)} cursor="pointer" />
                <Box p={2}>
                  <Heading size="md" color="black">{mod.name}</Heading>
                  <Text color="black">Conflicts: {mod.conflicts.join(', ')}</Text>
                  <Text color="black">Traits: {mod.traits.join(', ')}</Text>
                  <Text color="black">Size: {mod.size}</Text>
                </Box>
              </Box>
            ))}
          </Flex>
          <Button onClick={handleViewModpack}>View Modpack Folder</Button>
        </>
      )}
    </Box>
  );
}

export default Search;
