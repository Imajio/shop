import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: [],
            currentItems: [],
            items: [
                {
                  "id": 1,
                  "title": "Grey Backpack",
                  "img": "backpack-grey.jpg",
                  "desc": "Perfect for day trips and short hikes.",
                  "category": "backpacks",
                  "price": "49.99"
                },
                {
                  "id": 2,
                  "title": "Red Tent",
                  "img": "tent-red.jpg",
                  "desc": "Spacious tent suitable for 2-3 people.",
                  "category": "tents",
                  "price": "59.99"
                },
                {
                  "id": 3,
                  "title": "Green Hiking Boots",
                  "img": "hikingboots-green.png",
                  "desc": "Durable boots for rough terrain.",
                  "category": "boots",
                  "price": "52.99"
                },
                {
                  "id": 4,
                  "title": "Yellow Camping Stove",
                  "img": "campingstove-yellow.jpg",
                  "desc": "Portable stove for easy cooking.",
                  "category": "things",
                  "price": "49.99"
                },
                {
                  "id": 5,
                  "title": "Black Travel Backpack",
                  "img": "backpack-black.webp",
                  "desc": "Large capacity for long trips.",
                  "category": "backpacks",
                  "price": "69.99"
                },
                {
                  "id": 6,
                  "title": "White Water Bottle",
                  "img": "waterbottle-white.webp",
                  "desc": "Insulated bottle keeps drinks cold.",
                  "category": "things",
                  "price": "24.99"
                },
                {
                  "id": 7,
                  "title": "Orange Camp Chair",
                  "img": "campchair-orange.jpg",
                  "desc": "Lightweight and foldable chair.",
                  "category": "things",
                  "price": "58.99"
                }
            ],
            showFullItem: false,
            fullItem: {}         
        }
        this.state.currentItems = this.state.items;
        this.deleteOrder = this.deleteOrder.bind(this);
        this.addToOrder = this.addToOrder.bind(this);
        this.chooseCategory = this.chooseCategory.bind(this);
        this.onShowItem = this.onShowItem.bind(this);
    }



    render() {
        return (
            <div className="wrapper">
                <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
                <Categories chooseCategory={this.chooseCategory}/>
                <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}/>
                {this.state.showFullItem && <ShowFullItem item={this.state.fullItem} onShowItem={this.onShowItem} onAdd={this.addToOrder} />}
                <Footer />
            </div>
        );
    }

    onShowItem(item) {
      this.setState({fullItem: item})
      this.setState({showFullItem: !this.state.showFullItem})
    }

    chooseCategory(category) {
      category === 'all' ? this.setState({currentItems: this.state.items}) : this.setState({currentItems: this.state.items.filter(el => el.category === category)});
    }

    deleteOrder(id) {
        this.setState({orders: this.state.orders.filter(el => el.id !== id)});
    }

    addToOrder(item) {
      let isInArray = false;
      this.state.orders.forEach(el => {
        if(el.id === item.id) {
          isInArray = true;
        }
      })
      if (!isInArray) {
        this.setState({orders: [...this.state.orders, item] });
      }
    }
}