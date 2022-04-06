import { ChangeEvent, FC, useState, useTransition } from 'react';

interface ITextInputProps {
  onChange: (val: string) => void;
}

const TextInput: FC<ITextInputProps> = ({ onChange }) => {
  const [text, setText] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;

    setText(val);
    onChange(val);
  };

  return <input type='text' value={text} onChange={handleChange} />;
};

const Transition = () => {
  const [isPending, startTransition] = useTransition();
  const [size, setSize] = useState<number>(0);

  const handleChange = (val: string) => {
    startTransition(() => {
      setSize(val.length);
    });
  };

  return (
    <div>
      <h1>Text Length: {size}</h1>
      <TextInput onChange={handleChange} />
      <div>isPending: {isPending ? 'true' : 'false'}</div>
    </div>
  );
};

export default Transition;
