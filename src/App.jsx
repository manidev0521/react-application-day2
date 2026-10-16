// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import './App.css'



// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <section id="center">
//         <div className="hero">
//           <img src={heroImg} className="base" width="170" height="179" alt="" />
//           <img src={reactLogo} className="framework" alt="React logo" />
//           <img src={viteLogo} className="vite" alt="Vite logo" />
//         </div>
//         <div>
//           <h1>Get started</h1>
//           <p>
//             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
//           </p>
//         </div>
//         <button
//           type="button"
//           className="counter"
//           onClick={() => setCount((count) => count + 1)}
//         >
//           Count is {count}
//         </button>
//       </section>

//       <div className="ticks"></div>

//       <section id="next-steps">
//         <div id="docs">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#documentation-icon"></use>
//           </svg>
//           <h2>Documentation</h2>
//           <p>Your questions, answered</p>
//           <ul>
//             <li>
//               <a href="https://vite.dev/" target="_blank">
//                 <img className="logo" src={viteLogo} alt="" />
//                 Explore Vite
//               </a>
//             </li>
//             <li>
//               <a href="https://react.dev/" target="_blank">
//                 <img className="button-icon" src={reactLogo} alt="" />
//                 Learn more
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="social">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#social-icon"></use>
//           </svg>
//           <h2>Connect with us</h2>
//           <p>Join the Vite community</p>
//           <ul>
//             <li>
//               <a href="https://github.com/vitejs/vite" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#github-icon"></use>
//                 </svg>
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href="https://chat.vite.dev/" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#discord-icon"></use>
//                 </svg>
//                 Discord
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/vite_js" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#x-icon"></use>
//                 </svg>
//                 X.com
//               </a>
//             </li>
//             <li>
//               <a href="https://bsky.app/profile/vite.dev" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#bluesky-icon"></use>
//                 </svg>
//                 Bluesky
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <div className="ticks"></div>
//       <section id="spacer"></section>
//     </>
//   )
// }

// export default App
// import react from "react";
// import './App.css';
// import img from "./assets/photo.jpg";
// const App = () => {
//   return (
//     <div>
//       <button className="btn">Click Me</button>
//       <h1 className="title">Hello React</h1>
//       <img src={img} class="sample"/> 
//       <p>Welcome to your React app!</p>
//       <button onClick={() => alert("Button clicked!")}>Click Me</button>
//     </div>
//   );
// }
// export default App;
// import React, { useState, useEffect } from "react";
// import "./App.css";

// const App = () => {
//   const [counter, setCounter] = useState(0);
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           "https://jsonplaceholder.typicode.com/users"
//         );

//         const users = await response.json();
//         setData(users);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1>User Details</h1>

//       <h3>Counter: {counter}</h3>

//       <button onClick={() => setCounter(counter + 1)}>Increment</button>
// <button onClick={() => setCounter(counter - 1)}> Decrement </button>
     

//       <br />
//       <br />

//       <table border="1">
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Phone</th>
//             <th>City</th>
            
//           </tr>
//         </thead>

//         <tbody>
//           {data.map((user) => (
//             <tr key={user.id}>
//               <td>{user.id}</td>
//               <td>{user.name}</td>
//               <td>{user.email}</td>
//               <td>{user.phone}</td>
//               <td>{user.address.city}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default App;



// import { useState, useEffect } from "react";
// import "./App.css";

// const App = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");


//   useEffect(() => {
//     fetch("https://dummyjson.com/products/category/mens-shirts")
    
//       .then((response) => {
//         console.log(response.status,"response")
//         if (!response.ok) {
//           throw new Error("Failed to fetch products!");
//         }
//         return response.json();
        
//       })
      
//       .then((result) => {
//         setProducts(result.products);
//         setSuccess("Products loaded successfully!");
//       })
//       .catch((error) => {
//         console.log("Error:", error);
//         setError("Unable to load products. Please try again!");
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   }, []);

//   return (
//     <div className="container">
//       <h1>Fashion Clothing Store</h1>
//       <p className="subtitle">Discover Your Style</p>

//       {loading && (
//         <h2 className="loading">Loading clothes...</h2>
//       )}

//       {error && (
//         <div className="error">
//           <h2>Error!</h2>
//           <p>{error}</p>
//         </div>
//       )}

//       {success && !loading && !error && (
//         <>
//           <div className="success">
//             <h3>Success!</h3>
//             <p>{success}</p>
//           </div>

//           <div className="product-grid">
//             {products.map((item) => (
//               <div className="card" key={item.id}>
//                 <img
//                   src={item.thumbnail}
//                   alt={item.title}
//                 />

//                 <h2>{item.title}</h2>
//                 <p>{item.description}</p>
//                 <p>Category: {item.category}</p>
//                 <h3>Price: ${item.price}</h3>
//                 <p>Discount: {item.discountPercentage}%</p>
//                 <p>Rating: {item.rating}</p>

//                 <button>Add to Cart</button>
//               </div>
//             ))}
//           </div>
//         </>
//       )}
//     </div>
//   );
// };


// export default App;





// import { useState } from "react";
// import Title from "./Title.jsx";

// function App() {
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       <Title count={count} />
//       <button onClick={() => setCount(count + 1)}>Count is {count}</button>
//     </div>
//   );
// }

// export default App;



// import { useState } from "react";

// function App() {
//   const [name, setName] = useState("");
//   const [age, setAge] = useState("");
//   const [gender, setGender] = useState("");

//   return (
//     <div>
//       <h1>Enter Your Details</h1>

//       <h3>Enter Your Name</h3>
//       <input
//         type="text"
//         placeholder="Enter your name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <h2>Your Name: {name}</h2>

//       <h3>Enter Your Age</h3>
//       <input
//         type="number"
//         placeholder="Enter your age"
//         value={age}
//         onChange={(e) => setAge(e.target.value)}
//       />
//       <h2>Your Age: {age}</h2>

//       <h3>Enter Your Gender</h3>
//       <select
//         value={gender}
//         onChange={(e) => setGender(e.target.value)}
//       >
//         <option value="">Select Gender</option>
//         <option value="Male">Male</option>
//         <option value="Female">Female</option>
//         <option value="Other">Other</option>
//       </select>

//       <h2>Your Gender: {gender}</h2>
//     </div>
//   );
// }

// export default App;

 import { useState } from "react";

function App() {
  const [form, setForm] = useState({
    firstName: "",email: "",age: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const handleChange = (e) => {
  const { name, value } = e.target;
  setForm((prevForm) => ({
  ...prevForm,[name]: value
    }));
  };

  return (
    <div>
      <h1>Enter Your Information</h1>
      <input type="text" placeholder="First Name" name="firstName" value={form.firstName} onChange={handleChange} />
      <br /><br />

      <input type="email" placeholder="Email" name="email" value={form.email} onChange={handleChange} />
      <br /><br />

      <input type="number" placeholder="Age" name="age" value={form.age} onChange={handleChange} />
      <br /><br />

      <button onClick={() => setSubmitted(true)}>Submit</button>

      {submitted && (
        <div>
          <h2>Submitted Details</h2>
          <p>First Name: {form.firstName}</p>
          <p>Email: {form.email}</p>
          <p>Age: {form.age}</p>
        </div>
      )}
    </div>
  );
}

export default App;