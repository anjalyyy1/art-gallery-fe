const filterOptions = [
  {
    label: 'sold',
  },
  {
    label: 'All',
  },
];

const Filter = () => {
  return (
    <>
      {filterOptions.map(eachOption => (
        <button>{eachOption.label}</button>
      ))}
    </>
  );
};

export default Filter;
