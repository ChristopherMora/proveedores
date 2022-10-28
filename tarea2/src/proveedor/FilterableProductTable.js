import React, { useState } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

const  FilterableProductTable1 = (props) => {
  const {product} = props;
  const [filterText,setOnFilterTextChange] = useState('');
  const [inStockOnly,setOnInStockChange] = useState(false);
  const [inStockOnly1,setOnInStockChange1] = useState(false);
  const [inStockOnly2,setOnInStockChange2] = useState(false);

      return (
        <div>
          <SearchBar filterText={filterText} inStockOnly1={inStockOnly1} inStockOnly={inStockOnly} handleFilterTextChange={setOnFilterTextChange} handleInStockChange = {setOnInStockChange} handleInStockChange1 = {setOnInStockChange1} handleInStockChange2 = {setOnInStockChange2}/>
          
          <ProductTable product={product} filterText={filterText} inStockOnly={inStockOnly} inStockOnly1={inStockOnly1} inStockOnly2={inStockOnly2} />
        </div>
      );
  }
  
  export default FilterableProductTable1;