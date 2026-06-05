import './MenuItemSkeleton.css';

const MenuItemSkeleton = ({ count = 6 }) => {
  return (
    <>
      {[...Array(count)].map((_, index) => (
        <div key={index} className="menu-item-skeleton">
          <div className="menu-item-skeleton__image" />
          <div className="menu-item-skeleton__content">
            <div className="menu-item-skeleton__title" />
            <div className="menu-item-skeleton__desc" />
            <div className="menu-item-skeleton__desc menu-item-skeleton__desc--short" />
            <div className="menu-item-skeleton__footer">
              <div className="menu-item-skeleton__price" />
              <div className="menu-item-skeleton__tags">
                <div className="menu-item-skeleton__tag" />
                <div className="menu-item-skeleton__tag" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default MenuItemSkeleton;
