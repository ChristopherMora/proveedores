import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';
import FilterableProductTable from "./FilterableProductTable";
const ProductTable1 = (props) =>{
  const {filterText} = props;
  const {inStockOnly} = props;
  const {inStockOnly1} = props;
  const {inStockOnly2} = props;
  const {product} = props;
    const rows = [];
    let lastCategory = null;

    product.forEach((product) => {
      if (product.name.indexOf(filterText) === -1) {
        return;
      }
      if (inStockOnly && product.status !=="proveedor activo") {
        return;
      }

      if (inStockOnly1 && product.status !=="proveedor menudeo") {
        return;
      }
      if (inStockOnly2 && product.status !=="proveedor mayoreo") {
        return;
      }
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category} />
        );
      }
      rows.push(
        <ProductRow
          product={product}
          key={product.name}
        />
      );
      lastCategory = product.category;
    });

    return (
          <table>
        <thead>
          <tr>
            <th>Marca</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>

    );
  }

export default ProductTable1;