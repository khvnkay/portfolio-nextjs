"use client"

import React, { createContext, useContext, useState } from 'react'
import { links} from "@/lib/data"
import { SectionName } from '@/lib/types'


type Props = {
    children: React.ReactNode
}
type ActiveSectionContextType = {
    activeSection: SectionName,
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>,
    setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>,
    timeOfLastClick: number

}

export const ActiveSectionContext =  createContext<ActiveSectionContextType | null>(null)
const ActiveSectionContextProvider = ({children}:Props ) => {
    const [activeSection, setActiveSection] = useState<SectionName>("Home")
    const [timeOfLastClick, setTimeOfLastClick] = useState(0); // we need to keep track of this to disable the observer temporarily when user clicks on a link



  return(
  <ActiveSectionContext.Provider value={{activeSection,setActiveSection ,timeOfLastClick,setTimeOfLastClick }}> {children}

  </ActiveSectionContext.Provider>)
}

export default ActiveSectionContextProvider

export function useActiveSectionContext() {
    const context = useContext(ActiveSectionContext);
  
    if (context === null) {
      throw new Error(
        "useActiveSectionContext must be used within an ActiveSectionContextProvider"
      );
    }
  
    return context;
  }
export function timeOfLastClick() {
    const context = useContext(ActiveSectionContext);
  
    if (context === null) {
      throw new Error(
        "useActiveSectionContext must be used within an ActiveSectionContextProvider"
      );
    }
  
    return context;
  }
