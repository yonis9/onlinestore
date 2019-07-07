import React, { Component } from 'react';
import './Shop.css';
import ProductCard from '../ProductCard/ProductCard';
import Footer from '../Footer/Footer';
import ScrollToTop from '../ScrollToTop/ScrollToTop';


class Shop extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [],
            activeCategory: this.props.location.state ? this.props.location.state.category : 'All',
            searchField: ''
        }
        
        
    }

  
    componentDidMount() {
        fetch(`https://murmuring-crag-50531.herokuapp.com/shop/${this.state.activeCategory}`)
        .then(response => response.json())
        .then(data => {
            this.setState({products: data})})
    }

    
    onSearchChange = (event) => {
        this.setState({searchField: event.target.value})
    }


    onCatClick = (event) => {
        
        if(event.target.value !== this.state.activeCategory){
        }
        this.setState({activeCategory: event.target.value})
        this.onCatChange(event.target.value)
        
    }

    onCatChange = (category) => {
        fetch(`https://murmuring-crag-50531.herokuapp.com/shop/${category}`)
        .then(response => response.json())
        .then(data => {
            this.setState({products: data})})
    }

    render() {
     
        const { products, searchField } = this.state;
        const filteredProducts = products.filter(product => {
            return product.name.toLowerCase().includes(searchField.toLowerCase())
        });
    return (
        <div>
            <ScrollToTop />
            {!products.length ? <div className='load-container'>
                <div id='mobile-marign-load' className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                </div>
            :
       <div className='shop-container'>
          <ul>
              <li className='shop-category'><button id='0' onClick={this.onCatClick} style={this.state.activeCategory ==='All' ? {fontWeight: 'bold'}: null} value='All' >All </button></li>
              <span className='separation'> | </span>
              <li className='shop-category'><button id='1'  onClick={this.onCatClick} value='Beard Oil' style={this.state.activeCategory ==='Beard Oil' ? {fontWeight: 'bold'}: null}>Beard Oil </button></li>
              <span className='separation'> | </span>
              <li className='shop-category'><button id='2' style={this.state.activeCategory ==='Beard Balm' ? {fontWeight: 'bold'}: null} onClick={this.onCatClick} value='Beard Balm'>Beard Balm </button></li>
              <span className='separation'> | </span>
              <li className='shop-category'><button id='3' onClick={this.onCatClick} value='Beard Wash & Softener'style={this.state.activeCategory ==='Beard Wash & Softener' ? {fontWeight: 'bold'}: null}>Beard Wash & Softener </button></li>
              <span className='separation'> | </span>
              <li className='shop-category'><button id='4' onClick={this.onCatClick} value='Grooming Tools' style={this.state.activeCategory ==='Grooming Tools' ? {fontWeight: 'bold'}: null}>Grooming Tools </button></li>
          </ul>
          <input type='search' placeholder='Search Products' onChange={this.onSearchChange} />
            <div className='products'>
            {filteredProducts.map(product => {
                return <ProductCard key={product._id}
                                    name={product.name}
                                    imagePath={product.imagePath} 
                                    price={product.price}
                                    description={product.description} 
                                    id={product._id} 
                                    onAddToCart={this.props.onAddToCart}/>
            })}
             </div>
        </div>
        }
        <Footer />
        </div>

    )
    }
}

export default Shop;