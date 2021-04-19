export function setFilter(
  currentBrand: number,
  setCurrentBrand: React.Dispatch<React.SetStateAction<number>>,
  setBrand: (brandId: number) => void,
  currentType: number,
  setCurrentType: React.Dispatch<React.SetStateAction<number>>,
  setType: (typeId: number) => void
) {
  return (type: 'brand' | 'type', id: number) => {
    if (type === 'brand') {
      if (currentBrand === id) {
        setCurrentBrand(null);
        setBrand(null);
      }
      if (currentBrand !== id) {
        setCurrentBrand(id);
        setBrand(id);
      }
    }
    if (type === 'type') {
      if (currentType === id) {
        setCurrentType(null);
        setType(null);
      }
      if (currentType !== id) {
        setCurrentType(id);
        setType(id);
      }
    }
  };
}
