import React, { Component } from 'react';
import headerLogo from './header-with-logo.png';
import ProductsList from './ProductsList';
import Product from './Product';
import './App.css';

class App extends Component {
    //default array of pre-set products
    state = {
        products: [
            {
            sku: 101,
            name: "Shirt",
            brand: "Acne Studios",
            description: "White Poplin Shirt",
            colour: "White",
            image: "https://imgur.com/i4TjJVh.jpeg",
            price: 248
            },
        
            {
            sku: 102,
            name: "Trousers",
            brand: "Comme des Garçons",
            description: "Black Wool Trousers",
            colour: "Black",
            image: "https://i.imgur.com/UWKeAlD.jpeg",
            price: 595
            },
        
            {
            sku: 103,
            name: "Derby Shoes",
            brand: "Common Projects",
            description: "Black Derby Shoes",
            colour: "Black Shine",
            image: "https://imgur.com/hppJsPI.jpeg",
            price: 798
            },
            
            {
            sku: 104,
            name: "Skull Ring",
            brand: "Alexander McQueen",
            description: "Sterling Silver Skull Ring",
            colour: "Gunmetal",
            image: "https://imgur.com/fX9hXXS.jpeg",
            price: 298
            }
        ],
        //product images taken from endclothing.com
    }

  //enter sku at bottom of page to delete item with that SKU
  removeIt(event){
      event.preventDefault();
      let temp = this.refs.dsku.value;
      console.log('Removing item with SKU ' + temp);
      let arr = this.state.products;
      for(let i = 0; i < arr.length; i++){
          if (arr[i].sku == temp){
              arr.splice(i,1);
          }
      }
      this.refs.dsku.value = '';
      this.setState({products: arr});
  }

  //user is prompted to enter an existing SKU to edit
  popup() {
      let sku = prompt("Enter SKU to edit:");
      this.popupMore(sku);
  }

  //user is prompted to enter the new information to add/modify to the selected SKU
  popupMore(sku){
      console.log(sku);
      let newName = prompt("Enter new product name: ");
      let newBrand = prompt("Enter new product brand: ");
      let newDescription = prompt("Enter new product description: ");
      let newColour = prompt("Enter new product colour: ");
      let newImage = prompt("Enter new product image URL: ");     
      let newPrice = prompt("Enter new product price: ");
      
      //removes the existing SKU'd item
      console.log('Editing item with SKU ' + sku);
      let arr = this.state.products;
      for(let i = 0; i < arr.length; i++){
          if (arr[i].sku == sku){
              arr.splice(i,1);
          }
      }
      
      //replaces the item with a new Product with the same SKU but updated information
      arr.unshift({
            sku: sku,
            name: newName,
            brand: newBrand,
            description: newDescription,
            colour: newColour,
            image: newImage,
            price: newPrice
        });      
      
      this.setState({products: arr});
      
  }

  //pass data from input fields to create new product component and add it to the products state array
  getData(event) {
        event.preventDefault();
        
        //testing input fields
        console.log(this.refs.sku.value);
        console.log(this.refs.name.value);
        console.log(this.refs.brand.value);
        console.log(this.refs.description.value);
        console.log(this.refs.colour.value);
        console.log(this.refs.image.value);
        console.log(this.refs.price.value);
        
        //pulling data from the form
        let sku = this.refs.sku.value;
        let name = this.refs.name.value;
        let brand = this.refs.brand.value;
        let desc = this.refs.description.value;
        let colour = this.refs.colour.value;
        let image = this.refs.image.value;
        let price = this.refs.price.value;

        const prods = this.state.products
        prods.unshift({
            sku: sku,
            name: name,
            brand: brand,
            description: desc,
            colour: colour,
            image: image,
            price: price
        });
        this.setState({products: prods});
        
        //resetting the form
        this.refs.sku.value = '';
        this.refs.name.value = '';
        this.refs.brand.value = '';
        this.refs.description.value = '';
        this.refs.colour.value = '';
        this.refs.image.value = '';
        this.refs.price.value = '';
    
    }
    
    render() {
        console.log(this.props.products);
        return (
            <div class="content">
                <img src={headerLogo} class="center" width="400px"/>
                <p class="instruction">Enter product information below to create a new item.</p>
                <div class="form">
                    <form onSubmit={this.getData.bind(this)}>
                        <input class="input" type="text" ref="sku" placeholder="SKU"/>
                        <input class="input" type="text" ref="name" placeholder="Name"/>
                        <input class="input" type="text" ref="brand" placeholder="Brand"/>
                        <input class="input" type="text" ref="description" placeholder="Description"/>
                        <br />
                        <input class="input" type="text" ref="colour" placeholder="Colour"/>
                        <input class="input" type="text" ref="image" placeholder="Image URL"/>
                        <input class="input" type="text" ref="price"  placeholder="Price in CAD"/>
                        <br /> <br/>
                        <button class="btn" type="submit"><strong>CREATE PRODUCT</strong></button>
                    </form>
                </div>
            
                <div id="allProducts">
                    <br/>
                    <h4 class="subtitle">ALL PRODUCTS</h4>
                    <hr align="center" width="100%"/>
                    <br/>
                    <ProductsList products = { this.state.products } />
                </div>
                
                <p class="instruction">Enter a SKU to remove that item from the list.</p>
                <div class="dform">
                    <form onSubmit={this.removeIt.bind(this)}>
                        <input class="dinput" type="text" ref="dsku" placeholder="SKU"/>
                        <button class="dbtn" type="submit"><strong>REMOVE</strong></button>
                    </form>
                    <br />
                    <button class="ebtn" onClick={this.popup.bind(this)}><strong>EDIT PRODUCT BY SKU</strong></button>
                </div>
                <div class="footer">
                    <p>2018 - Daniel Vigny-Pau</p>
                </div>
            </div>
        );
    }
}



export default App;