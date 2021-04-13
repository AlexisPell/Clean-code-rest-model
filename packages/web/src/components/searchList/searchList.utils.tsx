import React, { useState } from 'react';

interface ICurrentTypeAndBrand {
  chosenType: number | null;
  chosenBrand: number | null;
}

export const searchListUtils = () => {
  const [] = useState({
    chosenType: null,
    chosenBrand: null,
  });
};
