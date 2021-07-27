interface ProductProps {
  product: {
    id: number;
    price: number;
    title: string;
  }
}

export function ProductItem({product}: ProductProps){
  return (
    <div>
      {product.title} - <strong>{ product.price}</strong>
    </div>
  )
}