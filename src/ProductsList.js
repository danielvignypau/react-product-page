import React from 'react';
import Product from './Product';

class ProductsList extends React.Component{
    render() {
        const prods = this.props.products.map( p => {
            return <Product
                sku = {p.sku}
                name = {p.name}
                brand = {p.brand}
                description = {p.description}
                colour = {p.colour}
                image = {p.image}
                price = {p.price}
            />
        });
        return(
            <div>
                {prods}
            </div>
        )
    }
}

export default ProductsList;