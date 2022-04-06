import { FC } from 'react';
import './ListItem.css';

interface IProps {
  name: string;
  highlight: string;
}

const ListItem: FC<IProps> = ({ name, highlight }) => {
  const index = name.toLowerCase().indexOf(highlight.toLowerCase());

  if (index === -1) {
    return <div>{name}</div>;
  }

  return (
    <div>
      {name.slice(0, index)}
      <span className='highlight'>
        {name.slice(index, index + highlight.length)}
      </span>
      {name.slice(index + highlight.length)}
    </div>
  );
};

export default ListItem;
