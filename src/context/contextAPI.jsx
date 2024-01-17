import React , {useState , useEffect , createContext} from "react";
import {apidata} from "../utils/api"

export const Context = createContext();

export const AppContext = (props) => {
   const [loading , setLoading] = useState(false);
   const [categories , setCategories] = useState("New");
   const [searchResults , setSearchResults] = useState([]);
   const [phoneMenu , setPhoneMenu] = useState(false);

   useEffect(() => {
      fetchedCategoriesData(categories);
   }, [categories]);

   const fetchedCategoriesData = (query) => {
    setLoading(true);
    apidata(`search/?q=${query}`).then(({ res }) => {
        console.log(res);
        // setSearchResults(res);
        setLoading(false);
    });
   };

   return (
    <Context.Provider 
    value={{
        loading , 
        setLoading,
        categories,
        setCategories,
        phoneMenu,
        setPhoneMenu,
        searchResults}} 
        >
        {props.children}
    </Context.Provider>
   );

};