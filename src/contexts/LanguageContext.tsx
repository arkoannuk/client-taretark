import React, { createContext, useState, useContext } from 'react';

// Define the context
interface LanguageContextType {
  selectedLabel: string;
  setSelectedLabel: React.Dispatch<React.SetStateAction<string>>;
}

const LanguageContext = createContext<LanguageContextType>({
  selectedLabel: '',
  setSelectedLabel: () => {},
});

// Custom hook to use the context
export function useLanguageContext() {
  return useContext(LanguageContext);
}



// Provider component to wrap your app with
export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Set the initial value here, for example 'En' for English
  const [selectedLabel, setSelectedLabel] = useState<string>('En');

  return (
    <LanguageContext.Provider value={{ selectedLabel, setSelectedLabel }}>
      {children}
    </LanguageContext.Provider>
  );
}
