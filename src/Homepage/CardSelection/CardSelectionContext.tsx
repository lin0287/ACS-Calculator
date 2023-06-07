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
  const [selectedCards, setSelectedCards] = useState<string[]>(
    ["Anvil_Attack_3","Finger_Four_3","Fixed_Target_1","Tin_Fish_3", "Torpedo_Run_1",
      "Barrel_Roll_3", "Feint_1", "Lone_Wolf_1", "Strike_From_Sun_1",
      "Bulwark_1", "Defensive_Bombing_3", "Jinking_1", "Thatch_Weave_3"
    ]
  );

  const handleCardClick = (id: string) => {
    if (selectedCards.includes(id)) {
      setSelectedCards(selectedCards.filter((cardId) => cardId !== id));
    } else {
      if (selectedCards.length >= 13) {
        console.error('Maximum number of cards reached. Cannot add more cards.');
        return;
      }
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
