
const capitalize = (str) => {
	if (str.length === 0) {
		return '';
	}
	return `${str[0].toUpperCase()}${str.slice(1)}`;
};

/* const capitalize = (text) => {
  if (text === '') {
    return '';
  }
  const firstSymbol = text[0].toUpperCase();
  const restSubstring = text.slice(1);
  return `${firstSymbol}${restSubstring}`;
}; */
export default capitalize;
