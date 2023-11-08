
import {createContext} from 'react';

const MyContext = createContext();
const PropertiesProvider =({Children})=>{
    return<MyContext.Provider value={Children}>
    {Children}
   </MyContext.Provider>
};





export default PropertiesProvider;