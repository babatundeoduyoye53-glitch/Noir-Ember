import { useState, useMemo, useEffect } from 'react';
import { Search, Download, X, Filter } from 'lucide-react';
import { menuCategories, dietaryFilters, menuItems } from '../data/menuData';
import MenuItem from '../components/MenuItem';
import MenuItemModal from '../components/MenuItemModal';
import MenuItemSkeleton from '../components/MenuItemSkeleton';
import './Menu.css';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeDietary, setActiveDietary] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);
  const [filterDrawerOpen, setFilterDrawerOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate initial loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  // Filter menu items
  const filteredItems = useMemo(() => {
    return menuItems.filter(item => {
      // Category filter
      const categoryMatch = activeCategory === 'all' || item.category === activeCategory;
      
      // Dietary filter
      let dietaryMatch = true;
      if (activeDietary !== 'all') {
        if (activeDietary === 'chef-special') {
          dietaryMatch = item.chefSpecial;
        } else {
          dietaryMatch = item.dietary.includes(activeDietary);
        }
      }
      
      // Search filter
      const searchMatch = searchQuery === '' || 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      return categoryMatch && dietaryMatch && searchMatch;
    });
  }, [activeCategory, activeDietary, searchQuery]);

  // Group items by category for display
  const groupedItems = useMemo(() => {
    if (activeCategory !== 'all') {
      return { [activeCategory]: filteredItems };
    }
    
    const grouped = {};
    menuCategories.forEach(cat => {
      const items = filteredItems.filter(item => item.category === cat.id);
      if (items.length > 0) {
        grouped[cat.id] = items;
      }
    });
    return grouped;
  }, [filteredItems, activeCategory]);

  const handleDownloadMenu = () => {
    // In a real app, this would download a PDF
    alert('PDF menu download would start here. Connect to backend to generate PDF.');
  };

  const handleCategorySelect = (categoryId) => {
    setActiveCategory(categoryId);
    setFilterDrawerOpen(false); // Close drawer after selection
  };

  const handleDietarySelect = (dietaryId) => {
    setActiveDietary(dietaryId);
    setFilterDrawerOpen(false); // Close drawer after selection
  };

  return (
    <div className="menu-page" id="full-menu">
      {/* Mobile Filter Drawer Overlay */}
      {filterDrawerOpen && (
        <div 
          className="filter-drawer-overlay" 
          onClick={() => setFilterDrawerOpen(false)}
        />
      )}

      {/* Mobile Filter Drawer */}
      <aside className={`filter-drawer ${filterDrawerOpen ? 'filter-drawer--open' : ''}`}>
        <div className="filter-drawer__header">
          <h3 className="filter-drawer__title">
            <Filter size={20} />
            Filters
          </h3>
          <button 
            className="filter-drawer__close"
            onClick={() => setFilterDrawerOpen(false)}
            aria-label="Close filters"
          >
            <X size={24} />
          </button>
        </div>

        <div className="filter-drawer__content">
          {/* Categories */}
          <div className="filter-drawer__section">
            <h4 className="filter-drawer__section-title">Categories</h4>
            <div className="filter-drawer__options">
              <button
                className={`filter-drawer__option ${activeCategory === 'all' ? 'filter-drawer__option--active' : ''}`}
                onClick={() => handleCategorySelect('all')}
              >
                <span className="filter-drawer__option-icon">🍽️</span>
                <span className="filter-drawer__option-name">All Dishes</span>
              </button>
              {menuCategories.map(category => (
                <button
                  key={category.id}
                  className={`filter-drawer__option ${activeCategory === category.id ? 'filter-drawer__option--active' : ''}`}
                  onClick={() => handleCategorySelect(category.id)}
                >
                  <span className="filter-drawer__option-icon">{category.icon}</span>
                  <span className="filter-drawer__option-name">{category.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Dietary Preferences */}
          <div className="filter-drawer__section">
            <h4 className="filter-drawer__section-title">Dietary Preferences</h4>
            <div className="filter-drawer__options">
              {dietaryFilters.map(filter => (
                <button
                  key={filter.id}
                  className={`filter-drawer__option ${activeDietary === filter.id ? 'filter-drawer__option--active' : ''}`}
                  onClick={() => handleDietarySelect(filter.id)}
                >
                  <span className="filter-drawer__option-icon">{filter.icon}</span>
                  <span className="filter-drawer__option-name">{filter.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Download Menu */}
          <div className="filter-drawer__section">
            <button className="filter-drawer__download" onClick={handleDownloadMenu}>
              <Download size={18} />
              Download Full Menu
            </button>
          </div>
        </div>
      </aside>
      {/* Hero Header */}
      <div className="menu-hero">
        <div className="container">
          <span className="section-eyebrow">Our Culinary Selection</span>
          <h1 className="menu-hero__title">Complete Menu</h1>
          <p className="menu-hero__subtitle">
            Each dish is crafted with passion, precision, and the finest seasonal ingredients.
          </p>
        </div>
      </div>

      <div className="container">
        {/* Filters Section */}
        <div className="menu-filters">
          {/* Category Tabs */}
          <div className="menu-filters__section">
            <h3 className="menu-filters__title">Categories</h3>
            
            {/* Mobile Dropdown */}
            <select 
              className="menu-filters__mobile-select"
              value={activeCategory}
              onChange={(e) => setActiveCategory(e.target.value)}
              aria-label="Select category"
            >
              <option value="all">🍽️ All Dishes</option>
              {menuCategories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.icon} {category.name}
                </option>
              ))}
            </select>

            {/* Desktop Buttons */}
            <div className="category-tabs">
              <button
                className={`category-tab ${activeCategory === 'all' ? 'category-tab--active' : ''}`}
                onClick={() => setActiveCategory('all')}
              >
                <span className="category-tab__icon">🍽️</span>
                <span className="category-tab__name">All Dishes</span>
              </button>
              {menuCategories.map(category => (
                <button
                  key={category.id}
                  className={`category-tab ${activeCategory === category.id ? 'category-tab--active' : ''}`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  <span className="category-tab__icon">{category.icon}</span>
                  <span className="category-tab__name">{category.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Dietary Filters */}
          <div className="menu-filters__section">
            <h3 className="menu-filters__title">Dietary Preferences</h3>
            
            {/* Mobile Dropdown */}
            <select 
              className="menu-filters__mobile-select"
              value={activeDietary}
              onChange={(e) => setActiveDietary(e.target.value)}
              aria-label="Select dietary preference"
            >
              {dietaryFilters.map(filter => (
                <option key={filter.id} value={filter.id}>
                  {filter.icon} {filter.name}
                </option>
              ))}
            </select>

            {/* Desktop Buttons */}
            <div className="dietary-filters">
              {dietaryFilters.map(filter => (
                <button
                  key={filter.id}
                  className={`dietary-filter ${activeDietary === filter.id ? 'dietary-filter--active' : ''}`}
                  onClick={() => setActiveDietary(filter.id)}
                >
                  <span className="dietary-filter__icon">{filter.icon}</span>
                  <span className="dietary-filter__name">{filter.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Search & Actions */}
          <div className="menu-actions">
            <div className="menu-search">
              <Search size={18} className="menu-search__icon" />
              <input
                type="text"
                placeholder="Search dishes..."
                className="menu-search__input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button
                  className="menu-search__clear"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                >
                  <X size={16} />
                </button>
              )}
            </div>
            <button className="btn-ghost" onClick={handleDownloadMenu}>
              <Download size={16} />
              Download Menu
            </button>
          </div>
        </div>

        {/* Results Count */}
        <div className="menu-results">
          <p className="menu-results__text">
            {filteredItems.length} {filteredItems.length === 1 ? 'dish' : 'dishes'} found
          </p>
        </div>

        {/* Menu Items Grid */}
        {Object.keys(groupedItems).length > 0 ? (
          Object.entries(groupedItems).map(([categoryId, items], index) => {
            const category = menuCategories.find(cat => cat.id === categoryId);
            return (
              <div key={categoryId} className="menu-section">
                {activeCategory === 'all' && (
                  <div className="menu-section__header">
                    <h2 className="menu-section__title">
                      <span className="menu-section__icon">{category?.icon}</span>
                      {category?.name}
                    </h2>
                    {/* Show filter button only on first section and on mobile */}
                    {index === 0 && (
                      <button 
                        className="menu-section__filter-btn"
                        onClick={() => setFilterDrawerOpen(true)}
                        aria-label="Open filters"
                      >
                        <Filter size={20} />
                      </button>
                    )}
                    <div className="gold-divider" />
                  </div>
                )}
                
                <div className="menu-grid">
                  {isLoading ? (
                    <MenuItemSkeleton count={6} />
                  ) : (
                    items.map(item => (
                      <MenuItem
                        key={item.id}
                        item={item}
                        onClick={() => setSelectedItem(item)}
                      />
                    ))
                  )}
                </div>
              </div>
            );
          })
        ) : (
          <div className="menu-empty">
            <span className="menu-empty__icon">🔍</span>
            <h3 className="menu-empty__title">No Dishes Found</h3>
            <p className="menu-empty__text">
              {searchQuery 
                ? `No results for "${searchQuery}"`
                : 'No dishes match your selected filters'}
            </p>
            <p className="menu-empty__suggestion">
              Try searching for "truffle", "seafood", or "dessert"
            </p>
            <div className="menu-empty__actions">
              <button
                className="btn-gold"
                onClick={() => {
                  setActiveCategory('all');
                  setActiveDietary('all');
                  setSearchQuery('');
                }}
              >
                Clear All Filters
              </button>
              {searchQuery && (
                <button
                  className="btn-ghost"
                  onClick={() => setSearchQuery('')}
                >
                  Clear Search
                </button>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Menu Item Detail Modal */}
      {selectedItem && (
        <MenuItemModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </div>
  );
};

export default Menu;
