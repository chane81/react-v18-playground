import { ChangeEvent, FC, useState, useTransition } from 'react';
import ListItem from './ListItem';

interface IProps {
  names: string[];
}

const FilterList: FC<IProps> = ({ names }) => {
  const [query, setQuery] = useState('');
  const [highlight, setHighlight] = useState('');

  const [isPending, startTransition] = useTransition();

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    console.log('val', val);

    setQuery(val);

    startTransition(() => {
      setHighlight(val);
    });
  };

  return (
    <div>
      <input onChange={changeHandler} value={query} type='text' />
      {names.map((name, i) => (
        <ListItem key={i} name={name} highlight={highlight} />
      ))}
    </div>
  );
};

export default FilterList;
