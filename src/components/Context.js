import React, { Component } from "react";
// import "./Image";

export const DataContext = React.createContext();

export class DataProvider extends Component {
  state = {
    // products: [
    //   {
    //     _id: "1",
    //     title: " 01",
    //     src: "Book.jpg",
    //     price: 23,
    //     colors: ["red", "black", "crimson", "teal"],
    //     count: 1,
    //   },
    //   {
    //     _id: "2",
    //     title: " 02",
    //     image: "Iphone.png",
    //     price: 19,
    //     colors: ["red", "black", "crimson", "teal"],
    //     count: 1,
    //   },
    //   {
    //     _id: "3",
    //     title: " 03",
    //     src: "https://www.upsieutoc.com/images/2020/06/27/img2.jpg",
    //     price: 50,
    //     colors: ["lightblue", "white", "crimson", "teal"],
    //     count: 1,
    //   },
    //   {
    //     _id: "4",
    //     title: " 04",
    //     src: "https://www.upsieutoc.com/images/2020/06/27/img4.jpg",
    //     price: 15,
    //     colors: ["orange", "black", "crimson", "teal"],
    //     count: 1,
    //   },
    //   {
    //     _id: "5",
    //     title: " 05",
    //     src: "https://www.upsieutoc.com/images/2020/06/27/img5.jpg",
    //     price: 10,
    //     colors: ["orange", "black", "crimson", "teal"],
    //     count: 1,
    //   },
    //   {
    //     _id: "6",
    //     title: " 06",
    //     src: "https://www.upsieutoc.com/images/2020/06/27/img6.jpg",
    //     colors: ["orange", "black", "crimson", "teal"],
    //     count: 1,
    //   },
    // ],
    products: [
      {
        _id: "1",
        name: "Cate",
        price: "999",
        image: " https://i.imgur.com/CzXTtJV.jpg",
        colors: ["orange", "black", "crimson", "teal"],
        count: 1,
      },
      {
        _id: "2",
        name: "Flower",
        price: "99",
        image:
          "https://farm9.staticflickr.com/8295/8007075227_dc958c1fe6_z_d.jpg",
        colors: ["orange", "black", "crimson", "teal"],
        count: 1,
      },
      {
        _id: "3",
        name: "Apple",
        price: "90",
        image:
          "https://farm8.staticflickr.com/7377/9359257263_81b080a039_z_d.jpg",
        colors: ["orange", "black", "crimson", "teal"],
        count: 1,
      },
      {
        _id: "4",
        name: " Boat",
        price: "990",
        image:
          "https://farm7.staticflickr.com/6089/6115759179_86316c08ff_z_d.jpg",
        colors: ["orange", "black", "crimson", "teal"],
        count: 1,
      },
      {
        _id: "5",
        name: "Mushroom",
        price: "90",
        image:
          "https://farm2.staticflickr.com/1449/24800673529_64272a66ec_z_d.jpg",
        colors: ["orange", "black", "crimson", "teal"],
        count: 1,
      },
      {
        _id: "6",
        name: "bicycle",
        price: "5000",
        image: " https://farm3.staticflickr.com/2378/2178054924_423324aac8.jpg",
        colors: ["orange", "black", "crimson", "teal"],
        count: 1,
      },
      {
        _id: "7",
        name: "Coffee",
        price: "600",
        image:
          "https://farm4.staticflickr.com/3752/9684880330_9b4698f7cb_z_d.jpg",
        colors: ["orange", "black", "crimson", "teal"],
        count: 1,
      },
      {
        _id: "8",
        name: "Bus",
        price: "99999",
        image: "https://farm4.staticflickr.com/3319/3211138044_9232086442.jpg",
        colors: ["orange", "black", "crimson", "teal"],
        count: 1,
      },
      {
        _id: "9",
        name: "bicycle",
        price: "9999",
        image: " https://farm3.staticflickr.com/2378/2178054924_423324aac8.jpg",
        colors: ["orange", "black", "crimson", "teal"],
        count: 1,
      },
      {
        _id: "10",
        name: "Lighthouse",
        price: "19999",
        image:
          "https://farm3.staticflickr.com/2220/1572613671_7311098b76_z_d.jpg",
        colors: ["orange", "black", "crimson", "teal"],
        count: 1,
      },
      {
        _id: "11",
        name: "Cello",
        price: "9",
        image:
          "https://farm2.staticflickr.com/1090/4595137268_0e3f2b9aa7_z_d.jpg",
        colors: ["orange", "black", "crimson", "teal"],
        count: 1,
      },
      {
        _id: "12",
        name: "Whale",
        price: "99999",
        image:
          "https://farm9.staticflickr.com/8505/8441256181_4e98d8bff5_z_d.jpg",
        colors: ["orange", "black", "crimson", "teal"],
        count: 1,
      },
    ],
    cart: [],
    total: 0,
  };

  addCart = (id) => {
    const { products, cart } = this.state;
    const check = cart.every((item) => {
      return item._id !== id;
    });
    if (check) {
      const data = products.filter((product) => {
        return product._id === id;
      });
      this.setState({ cart: [...cart, ...data] });
    } else {
      alert("The product has been added to cart.");
    }
  };

  reduction = (id) => {
    const { cart } = this.state;
    cart.forEach((item) => {
      if (item._id === id) {
        item.count === 1 ? (item.count = 1) : (item.count -= 1);
      }
    });
    this.setState({ cart: cart });
    this.getTotal();
  };

  increase = (id) => {
    const { cart } = this.state;
    cart.forEach((item) => {
      if (item._id === id) {
        item.count = +2;
      }
    });
    this.setState({ cart: cart });
    this.getTotal();
  };

  removeProduct = (id) => {
    if (window.confirm("Do you want to delete this product?")) {
      const { cart } = this.state;
      cart.forEach((item, index) => {
        if (item._id === id) {
          cart.splice(index, 1);
        }
      });
      this.setState({ cart: cart });
      this.getTotal();
    }
  };

  getTotal = () => {
    const { cart } = this.state;
    const res = cart.reduce((prev, item) => {
      return prev + item.price * item.count;
    }, 0);
    this.setState({ total: res });
  };

  componentDidUpdate() {
    localStorage.setItem("dataCart", JSON.stringify(this.state.cart));
    localStorage.setItem("dataTotal", JSON.stringify(this.state.total));
  }

  componentDidMount() {
    const dataCart = JSON.parse(localStorage.getItem("dataCart"));
    if (dataCart !== null) {
      this.setState({ cart: dataCart });
    }
    const dataTotal = JSON.parse(localStorage.getItem("dataTotal"));
    if (dataTotal !== null) {
      this.setState({ total: dataTotal });
    }
  }

  render() {
    const { products, cart, total } = this.state;
    const { addCart, reduction, increase, removeProduct, getTotal } = this;
    return (
      <DataContext.Provider
        value={{
          products,
          addCart,
          cart,
          reduction,
          increase,
          removeProduct,
          total,
          getTotal,
        }}
      >
        {this.props.children}
      </DataContext.Provider>
    );
  }
}

// promise
//arrowfunction
//closer
//dom
//virtual dom
//What are the different data types present in JavaScript?
// Ans- Primitive data types
// Non- Primitive data types
//hosting

//fitness track app
//calende
//every data we have to store the [Food , Amount, calories, protein] and store the data
//in all the date you will staore the data
