import React, { useState } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

const  FilterableProductTable = (props) => {
  const {product} = props;
  const [filterText,setOnFilterTextChange] = useState('');
  const [inStockOnly,setOnInStockChange] = useState(false);
  const [inStockOnly1,setOnInStockChange1] = useState(false);

      return (
        <div>
          <SearchBar filterText={filterText} inStockOnly1={inStockOnly1} inStockOnly={inStockOnly} handleFilterTextChange={setOnFilterTextChange} handleInStockChange = {setOnInStockChange} handleInStockChange1 = {setOnInStockChange1}/>
          
          <ProductTable product={product} filterText={filterText} inStockOnly={inStockOnly}/>
        </div>
      );
  }
  
  export default FilterableProductTable;