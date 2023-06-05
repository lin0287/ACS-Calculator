import React, { useState, createContext, useContext, useEffect } from 'react';

interface CardSelectionContextType {
  selectedCards: string[];
  handleCardClick: (id: string) => void;
}

const CardSelectionContext = createContext<CardSelectionContextType>({
  selectedCards: [],
  handleCardClick: () => {}
});

export const CardSelectionProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [selectedCards, setSelectedCards] = useState<string[]>([]);

  const handleCardClick = (id: string) => {
    if (selectedCards.includes(id)) {
      setSelectedCards(selectedCards.filter((cardId) => cardId !== id));
    } else {
      setSelectedCards([...selectedCards, id]);
    }
  };

  useEffect(() => {
    console.log('Selected Cards:', selectedCards); // Log the updated state immediately
  }, [selectedCards]);

  return (
    <CardSelectionContext.Provider value={{ selectedCards, handleCardClick }}>
      {children}
    </CardSelectionContext.Provider>
  );
};

export const useCardSelection = (): CardSelectionContextType =>
  useContext(CardSelectionContext);
