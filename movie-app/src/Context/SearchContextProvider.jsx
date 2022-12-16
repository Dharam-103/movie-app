import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
export const SearchContext=createContext();
function SearchContextProvider({children}) {
    const[movies,setMovies]=useState([]);
    const[loading,setLoading]=useState(false);
    const[input,setInput]=useState('');
  return (
    <div>
        <SearchContext.Provider value={{movies,setMovies,loading,setLoading,input,setInput}}>{children}</SearchContext.Provider>
    </div>
  )
}

export default SearchContextProvider;