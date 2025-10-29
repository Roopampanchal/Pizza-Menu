import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';
import reportWebVitals from "./reportWebVitals";
import { useState } from "react";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  const style = { color: "red", fontSize: "40px", textTransform: "uppercase" };
  return (
    <header className="header">
      <h1 style={style} className="header">
        Fast React Pizza Co.
      </h1>
    </header>
  );
}
function Menu() {

  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      {/* <UserList /> */}
      <h2>Our Menu</h2>
      {numPizzas > 0 ?       
        (
        <>
            <p>Authentic italian cuisine. 6 creative dishes to choose from. All from our oven, All organic, All delicious.</p>
            <ul className="pizzas">
              {
                pizzas.map((pizza) => <Pizza pizzaObj = {pizza} key = {pizza.name}/>)
              }
            </ul>
        </>
        ) : <p>We're still working on the menu please come back later:</p>
      }

    </main>
  );
}


function Footer() {
  const hour = new Date().getHours();
  console.log(hour);
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
  // if(isOpen) alert("We are open!"); else
  //   alert("we are close!");
  return (
    <footer className="footer">
      {/* <footer>{new Date().toLocaleTimeString()}. We're currently open!</footer> */}
    
      {isOpen ? <Order closeHour={closeHour} openHour={openHour}/> : (<p>We're happy to welcome between {openHour}:00 to {closeHour}:00</p>)
      }
    </footer>
  );
  // return React.createElement('footer', null, "We're currently open!")
}


function Order({ closeHour, openHour }) {
  console.log(openHour);
  
  return <div className="order">
  <p> We're Open {openHour}:00 until {closeHour}:00 come visit or order online!</p>
    <button className="btn">Order Now</button>
  </div>
}

function Pizza({pizzaObj}) {
  // if(pizzaObj.soldOut) return null;
  return (
    <li className={`pizza ${pizzaObj.soldOut ? 'sold-out' : ''}`}>
        <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? 'SOLD OUT' : pizzaObj.price}</span>
      </div>
    </li>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const Loading = () => {
  return <>Loading...</>;
}



function ConditionalRender(){
  const isLoading  = true;
  if(isLoading){
  return <Loading/>
  } else {
    return <>Nothing</>
  }
}
ConditionalRender();




// function UserList() {
//  const style ={
//     color:'red',
//     fontSize : '20px'
//   }
//   const [users, setUsers] = useState(() => {
//     console.log('Hey Girls');
//     return 'mybutton';
//   });

//   const updateName = () => {
//     // const newUsers = [...users];
//     // newUsers[index].name = newName;
//     setUsers((prev) => prev + 'changedButton');
//   };
//   // updateName();
//   return (
//     <div>
//       <button onClick={updateName}>{users}</button>
//     </div>
//   );
// }

// function FocusInput() {
//   const inputRef = useRef(null); // store reference to the DOM element

//   const handleFocus = () => {
//     inputRef.current.focus(); // directly focus the input
    
//   };

//   return (
//     <div>
//       <input ref={inputRef} type="text" placeholder="Click the button to focus" />
//       <button onClick={handleFocus}>Focus Input</button>
//     </div>
//   );
// }


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
