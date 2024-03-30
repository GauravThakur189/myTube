import React, { createContext, useState, useContext } from 'react';

// Creating a new context
const SearchContext = createContext();

// Custom hook to use the search context
export const useSearch = () => useContext(SearchContext);

// Provider component for the search context
export const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState('');
    console.log(search);
  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
};
