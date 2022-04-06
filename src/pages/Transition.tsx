import * as faker from 'faker';
import FilterList from '../views/Transition/FilterList';

const Transition = () => {
  const fakeNames = Array.from(Array(10000), () => {
    return faker.name.findName();
  });

  return (
    <div>
      <FilterList names={fakeNames} />
    </div>
  );
};

export default Transition;
