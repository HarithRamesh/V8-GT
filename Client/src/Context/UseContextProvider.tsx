import React, { Dispatch, SetStateAction, useState } from 'react'
 interface contextType {
     user: string,
     setUser: Dispatch<SetStateAction<string>> 
 }
 export const context = React.createContext<contextType|null>(null)
const UseContextProvider = ({ children } : any) => {
    const [user, setUser] = useState<string>("")
  return (
      <context.Provider value={{ user, setUser }}>
          {children}
        </context.Provider>
  )
}

export default UseContextProvider;
