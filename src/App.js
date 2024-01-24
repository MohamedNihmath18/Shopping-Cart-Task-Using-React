 
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
 
import '../node_modules/font-awesome/css/font-awesome.min.css'
import Nav from './Nav';
import Header from './Header';
import Footer from './Footer';
import Card from './Card';


import { useState } from 'react';


    function App() {
    
      const [cartData, setCartData] = useState([]);
      const [btnText, setBtnText] = useState([]);
      // console.log(typeof btnText);
    
      let cardDetails = [
        {
          TopSale : true,
          cardImg : "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
          productName : "Fancy Product",
          starRating : 5,
          mrp : 499,
          offer : 20,
        },
        {
          TopSale : false,
          cardImg : "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
          productName : "Special Item",
          starRating : 3,
          mrp : 450,
          offer : 4,
        },
        {
          TopSale : false,
          cardImg : "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
          productName : "Sale Item",
          starRating : 4,
          mrp : 599,
          offer : 5,
        },
        {
          TopSale : true,
          cardImg :  "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
          productName : "Popular Item",
          starRating : 5,
          mrp : 2000,
          offer : 40,
        },
        {
          TopSale : true,
          cardImg :  "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
          productName : "Sale Item",
          starRating : 3,
          mrp : 650,
          offer : 25,
        },
        {
          TopSale : false,
          cardImg :  "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
          productName : "Fancy Product",
          starRating : 4,
          mrp : 350,
          offer : 27,
        },
        {
          TopSale : false,
          cardImg :  "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
          productName : "Special Item",
          starRating : 4,
          mrp : 2500,
          offer : 30,
        },
        {
          TopSale : true,
          cardImg :  "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
          productName : "Popular Item",
          starRating : 5,
          mrp : 4000,
          offer : 4,
        },
         
      ];
    
      for(let i=1;i <= cardDetails.length;i++){
        let obj = { id : i, txt : "Add to Cart"};
        btnText.push(obj);
      }
    
      cardDetails = cardDetails.map((ele, index) => {
        ele.id = index + 1;
        ele.btnTxt = btnText[index].txt;
        return ele;
      });
    
      // console.log(cardDetails);
    
      let press = (product) => {
        let foundButton  = btnText.find((ele)=> product.id === ele.id)
        let buttonIndex = btnText.findIndex((ele)=> product.id === ele.id)
        // console.log(btnElement);
    
        if (foundButton.txt === "Add to Cart") {
    
          setCartData([...cartData, product]);
    
          btnText[buttonIndex].txt = "Remove from Cart"
          setBtnText([...btnText]);
          /*
          setBtnText((prevBtnText) => {
            return prevBtnText.map((btn) => {
              if (btn.id === product.id) {
                // console.log({ ...btn, txt: "Remove from Cart" });
                return { ...btn, txt: "Remove from Cart" };
              } else {
                return btn;
              }
            });
          });
          */
        }else if(foundButton.txt === "Remove from Cart"){
          setCartData(cartData.filter(ele => ele.id !== product.id));
    
          btnText[buttonIndex].txt = "Add to Cart"
          setBtnText([...btnText]);
          /*
          setBtnText((prevBtnText) => {
            return prevBtnText.map((btn) => {
              if (btn.id === product.id) {
                return { ...btn, txt: "Add to Cart" };
              } else {
                return btn;
              }
            });
          });
          */
        }
        
      };
    
      return (
        <>
          <header>
            <Nav navDetails={cartData}/>
          </header>
          <main className='main-div'>
            <section>
              <Header/>
            </section>
            <section className='py-3'>
              <div className='container px-3 px-lg-4 mt-5'>
                <div className='row gx-3 gx-lg-4 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center'>
                  {
                    cardDetails.map((card,index)=>{
                      return <Card key={index++} props={card} press={press}/>
                    })
                  }
                </div>
              </div>
            </section>
          </main>
          <footer class="py-5 bg-dark">
            <Footer/>
          </footer>
        </>
      );
    }

export default App;
