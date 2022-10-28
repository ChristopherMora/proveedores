const ProductRow1 = (props)=>{
  const {product} = props;
    const name = product.stocked ?
      product.name :
      <span style={{color: 'red'}}>
        {product.name}
      </span>;

      return (
            <tr>
              <td>{name}</td>
              <td>{product.status}</td>
           </tr>  
      );
    }

export default ProductRow1;
  