import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: [],
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
                  "category": "footwear",
                  "price": "52.99"
                },
                {
                  "id": 4,
                  "title": "Yellow Camping Stove",
                  "img": "campingstove-yellow.jpg",
                  "desc": "Portable stove for easy cooking.",
                  "category": "camping gear",
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
                  "category": "accessories",
                  "price": "24.99"
                },
                {
                  "id": 7,
                  "title": "Orange Camp Chair",
                  "img": "campchair-orange.jpg",
                  "desc": "Lightweight and foldable chair.",
                  "category": "camping gear",
                  "price": "58.99"
                }
            ]              
        }
        this.deleteOrder = this.deleteOrder.bind(this);
        this.addToOrder = this.addToOrder.bind(this);
    }



    render() {
        return (
            <div className="wrapper">
                <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
                <Items items={this.state.items} onAdd={this.addToOrder}/>
                <Footer />
            </div>
        );
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