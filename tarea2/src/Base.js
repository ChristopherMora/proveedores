import FilterableProductTable from "./Productos/FilterableProductTable";
import ProductCategoryRow from "./Productos/ProductCategoryRow";
import ProductRow from "./Productos/ProductRow";
import { useState } from "react";
import FormularioAlta from "./Productos/FormulariosAlta";

import FilterableProductTable1 from "./proveedor/FilterableProductTable";
import ProductCategoryRow1 from "./proveedor/ProductCategoryRow";
import ProductRow1 from "./proveedor/ProductRow"

const Base = () =>{
    const PRODUCTS = [
        {id:1,category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
        {id:2,category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
        {id:3,category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
        {id:4,category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
        {id:5,category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
        {id:6,category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
      ];

    const usuario = PRODUCTS;
    const[listaUsuarios, setListaUsuario] = useState(usuario);
      
    const addUsuario = (objetoUsuario) =>{
        objetoUsuario.id  = listaUsuarios.length + 1
        setListaUsuario([...listaUsuarios, objetoUsuario])     
    }


      const PROVIDERS = [
        {category: 'Tenis', price: '$49.99',status: 'proveedor activo',name: 'Liverpool',stocked: 1},
        {category: 'Tenis', price: '$9.99',status: 'proveedor activo', name: 'Coppel',stocked: 1},
        {category: 'Tenis', price: '$29.99',status: 'proveedor mayoreo',name: 'Sears',stocked: 2},
        {category: 'Balones', price: '$99.99',status: 'proveedor menudeo',name: 'Del sol',stocked: 3},
        {category: 'Balones', price: '$399.99',status: 'proveedor mayoreo',name: '3 hermanos',stocked: 2},
        {category: 'Balones', price: '$199.99',status: 'proveedor activo',name: 'Pumas',stocked: 1}
      ];
      return(
        <div className="container">
        <section className="flex-row">
          <div className="flex-large">
          <FormularioAlta addUsuario={addUsuario} />
          <FilterableProductTable product={PRODUCTS} />
          <ProductRow listaUsuarios={listaUsuarios} product={PRODUCTS} />
          <ProductCategoryRow product={PRODUCTS} />
          </div>
        
        <div className="flex-large">
          <FilterableProductTable1 product={PROVIDERS} />
          <ProductRow1 listaUsuarios={listaUsuarios} product={PROVIDERS} />
          <ProductCategoryRow1 product={PROVIDERS} />
        </div>
        </section>
          
        </div>



      )

}


export default Base;