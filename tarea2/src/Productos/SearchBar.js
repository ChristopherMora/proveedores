 
  const SearchBar=(props)=>{
  
    const {filterText} = props;
    const {inStockOnly} = props;
    const {handleFilterTextChange} = props;
    const {handleInStockChange} = props;
  
  
    return (
          <form>
          <input
              type="text"
              placeholder="Search..."
              value={filterText}
              onChange={(e) => handleFilterTextChange(e.target.value)}
          />
          <p>
              <input
                  type="checkbox"
                  checked={inStockOnly}
                  onChange={(e) => handleInStockChange(e.target.checked)}
              />{" "}
              Only show products in stock
          </p>
      </form>
      );
  }
  
export default SearchBar;