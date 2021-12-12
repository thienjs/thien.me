import { useMdxComponentsContext } from '../context/MdxComponents';

const Directions: React.FC = () => {
  const { lang, directions } = useMdxComponentsContext();

  return (
    <>
      <h2>{lang === 'ja' ? '作り方' : 'Directions'}</h2>
      <ol>
        {directions.map((direction, index) => (
          <li key={index}>{direction}</li>
        ))}
      </ol>
    </>
  );
};

export default Directions;
