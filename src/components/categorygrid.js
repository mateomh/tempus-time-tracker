import CategoryStyles from '../assets/categorygrid.module.css';

const CategoryGrid = () => {
  const categories = ['Work', 'Commute', 'Entertainment', 'Learning', 'Sleep'];

  const handleClick = event => {
    const { id } = event.target;
    console.log(id);
  };

  return (
    <div className={CategoryStyles.Container}>
      {categories.map(category => (
        <button
          type="button"
          key={category}
          id={category}
          className={CategoryStyles.Item}
          onClick={handleClick}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryGrid;
