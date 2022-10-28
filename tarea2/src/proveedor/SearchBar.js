 
  const SearchBar1=(props)=>{
  
    const {filterText} = props;
    const {inStockOnly} = props;
    const {inStockOnly1} = props;
    const {inStockOnly2} = props;
    const {handleFilterTextChange} = props;
    const {handleInStockChange} = props;
    const {handleInStockChange1} = props;
    const {handleInStockChange2} = props;
  
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
              solo ver proveedor activo
          </p>
          <p>
              <input
                  type="checkbox"
                  checked={inStockOnly1}
                  onChange={(e) => handleInStockChange1(e.target.checked)}
              />{" "}
              solo ver proveedor menudeo
          </p>
          <p>
              <input
                  type="checkbox"
                  checked={inStockOnly2}
                  onChange={(e) => handleInStockChange2(e.target.checked)}
              />{" "}
              solo ver proveedor mayoreo
          </p>
      </form>
      );
  }
  
export default SearchBar1;