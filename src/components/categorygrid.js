import CategoryStyles from '../assets/categorygrid.module.css';

const CategoryGrid = () => {
  const categories = ['Work', 'Commute', 'Entertainment', 'Learning', 'Sleep'];
  return (
    <div className={CategoryStyles.Container}>
      {categories.map(category => (
        <div
          key={category}
          className={CategoryStyles.Item}
        >
          {category}
        </div>
      ))}
    </div>
  );
};

export default CategoryGrid;
