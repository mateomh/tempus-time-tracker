import { useStore } from 'react-redux';
import CategoryStyles from '../assets/categorygrid.module.css';

const CategoryGrid = () => {
  const store = useStore();
  const { categories } = store.getState();

  const handleClick = event => {
    const { id } = event.target;
    console.log(id);
  };

  return (
    <div className={CategoryStyles.Container}>
      {categories.map(category => (
        <button
          type="button"
          key={category.id}
          id={category.id}
          className={CategoryStyles.Item}
          onClick={handleClick}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default CategoryGrid;
