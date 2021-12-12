import { useMdxComponentsContext } from '../context/MdxComponents';

const Ingredients: React.FC = () => {
  const { lang, ingredients } = useMdxComponentsContext();

  return (
    <>
      <h2>{lang === 'ja' ? '材料' : 'Ingredients'}</h2>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </>
  );
};

export default Ingredients;
