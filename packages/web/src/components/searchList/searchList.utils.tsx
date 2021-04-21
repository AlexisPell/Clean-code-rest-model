export function setFilter(
  currentBrand: number,
  setCurrentBrand: React.Dispatch<React.SetStateAction<number>>,
  findBrand: (brandId: number) => void,
  currentType: number,
  setCurrentType: React.Dispatch<React.SetStateAction<number>>,
  findType: (typeId: number) => void
) {
  return (type: 'brand' | 'type', id: number) => {
    if (type === 'brand') {
      if (currentBrand === id) {
        setCurrentBrand(null);
        findBrand(null);
      }
      if (currentBrand !== id) {
        setCurrentBrand(id);
        findBrand(id);
      }
    }
    if (type === 'type') {
      if (currentType === id) {
        setCurrentType(null);
        findType(null);
      }
      if (currentType !== id) {
        setCurrentType(id);
        findType(id);
      }
    }
  };
}
