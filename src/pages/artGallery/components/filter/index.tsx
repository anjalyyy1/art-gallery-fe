import { FilterItem, FilterWrapper } from './styles';

const filterOptions = [
  {
    label: 'On Sale',
    key: 'sale',
  },
  {
    label: 'All',
    key: null,
  },
];

type Props = {
  filterHandler: (filterBy: string | null) => void;
  activeTab: string | null;
};

const Filter: React.FunctionComponent<Props> = props => {
  const { filterHandler, activeTab } = props;

  return (
    <FilterWrapper>
      {filterOptions.map((eachOption, index) => (
        <FilterItem
          key={index}
          isActive={activeTab === eachOption.key}
          onClick={() => filterHandler(eachOption.key)}
        >
          {eachOption.label}
        </FilterItem>
      ))}
    </FilterWrapper>
  );
};

export default Filter;
