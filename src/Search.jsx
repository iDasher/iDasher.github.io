import React, { useState } from 'react';
import { Input, Button, Flex, Box, Image, Text, Heading } from '@chakra-ui/react';
import modsData from './modsData';

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredMods, setFilteredMods] = useState(modsData);
  const [selectedMods, setSelectedMods] = useState([]);
  const [showModpack, setShowModpack] = useState(false);
  const [modpackSize, setModpackSize] = useState(5); // Default modpack size
  
  
  
  
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



  const generateModpack = () => {
    // Your modpack generation logic here
    const filteredModsCopy = [...filteredMods];
    const modpack = [];
    for (let i = 0; i < modpackSize; i++) {
      const randomIndex = Math.floor(Math.random() * filteredModsCopy.length);
      modpack.push(filteredModsCopy[randomIndex]);
      filteredModsCopy.splice(randomIndex, 1);
    }
    return modpack;
  };

  const handleGenerateModpack = () => {
    const generatedModpack = generateModpack();
    setSelectedMods(generatedModpack);
    setShowModpack(true);
  };

  const handleViewModpack = () => {
    setShowModpack(true);
  };

  const handleBackToSearch = () => {
    setShowModpack(false);
  };

  const handleAddToModpack = (mod) => {
    const index = selectedMods.findIndex(selectedMod => selectedMod.id === mod.id);
    if (index !== -1) {
      // Mod already selected, deselect it
      const updatedMods = [...selectedMods];
      updatedMods.splice(index, 1);
      setSelectedMods(updatedMods);
    } else {
      // Mod not selected, add it to the modpack folder
      const updatedMods = [...selectedMods, mod];
      // Automatically select requirements
      if (mod.requirements && mod.requirements.length > 0) {
        mod.requirements.forEach(req => {
          const reqMod = modsData.find(m => m.name === req);
          if (reqMod && !selectedMods.some(selMod => selMod.id === reqMod.id)) {
            updatedMods.push(reqMod);
          }
        });
      }
      setSelectedMods(updatedMods);
    }
  };

  const isModSelected = (mod) => {
    return selectedMods.some(selectedMod => selectedMod.id === mod.id);
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
            <Button onClick={() => filterByTrait('New Character')} colorScheme="blue">New Characters</Button>
            <Button onClick={() => filterByTrait('Total Conversion')} colorScheme="blue">Total Conversion</Button>
            <Button onClick={() => filterByTrait('Events')} colorScheme="blue">Events</Button>
          </Flex>
          <Flex flexWrap="wrap">
            {filteredMods.map(mod => (
              <Box key={mod.id} w="200px" p={4} borderWidth="1px" borderRadius="lg" m={2}>
                <Image src={mod.image} alt={mod.name} mb={2} boxSize="200px" onClick={() => handleAddToModpack(mod)} cursor="pointer" />
                <Box p={2}>
                  <Box
                    bg={isModSelected(mod) ? 'linear-gradient(to bottom, rgba(155,0,155,0.3) 50%, rgba(0,0,255,0) 100%)' : 'linear-gradient(to bottom, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0) 100%)'}
                    p={2}
                    borderRadius="md"
                  >
                    <Heading size="md" color="black">{mod.name}</Heading>
                    <Text color="black">Conflicts: {mod.conflicts.join(', ')}</Text>
                    <Text color="black">Traits: {mod.traits.join(', ')}</Text>
                    <Text color="black">Size: {mod.size}</Text>
                  </Box>
                </Box>
              </Box>
            ))}
          </Flex>
          <Button onClick={handleViewModpack} position="absolute" top="1rem" right="1rem">View Modpack Folder</Button>
        </>
      )}
    </Box>
  );

  
}

export default Search;
