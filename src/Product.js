import React from 'react';
import './Product.css';
import './App.css';


class Product extends React.Component {
    render() {
        const {
            sku,
            name,
            brand,
            description,
            colour,
            image,
            price,
        } = this.props;
        return(
            <div class="center">
                <table id="tbl">
                    <tr>
                        <td rowspan="4"><img src={image} width="100" alt="product image"/></td>
                        <td width="300px">SKU: <strong>{sku}</strong></td>
                        <td>MSRP: <strong>${price}</strong></td>
                    </tr>
                    <tr>
                        <td>BRAND: <strong>{brand}</strong></td>
                        <td>MODEL NAME: <strong>{name}</strong></td>
                    </tr>
                    <tr>
                        <td>COLOUR: <strong>{colour}</strong></td>
                    </tr>
                    <tr>
                        <td colspan="2">DESCRIPTION: <i>{description}</i></td>
                    </tr>
                </table>
                <hr align="center" width="100%"/>
                <br/>
            </div>
        )
    }
}

export default Product;

//sku, name, brand, description, colour, image, price