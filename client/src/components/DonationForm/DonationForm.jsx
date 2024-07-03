// copying this over from module 22, currently we don't have a stripe api key which we're going to need to put in a .env file, possibly going to need to change it from a cart to a donation page, I'll put it on the project board and get working on it this weekend if I can.

// import { useEffect } from 'react';
// import { loadStripe } from '@stripe/stripe-js';
// import { useLazyQuery } from '@apollo/client';
// import { QUERY_CHECKOUT } from '../../utils/queries';
// import { idbPromise } from '../../utils/helpers';
// import CartItem from '../CartItem';
// import Auth from '../../utils/auth';
// import { useStoreContext } from '../../utils/GlobalState';
// import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from '../../utils/actions';
// import './style.css';

// const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

// const Cart = () => {
//   const [state, dispatch] = useStoreContext();
//   const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

//   useEffect(() => {
//     if (data) {
//       stripePromise.then((res) => {
//         res.redirectToCheckout({ sessionId: data.checkout.session });
//       });
//     }
//   }, [data]);

//   useEffect(() => {
//     async function getCart() {
//       const cart = await idbPromise('cart', 'get');
//       dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...cart] });
//     }

//     if (!state.cart.length) {
//       getCart();
//     }
//   }, [state.cart.length, dispatch]);

//   function toggleCart() {
//     dispatch({ type: TOGGLE_CART });
//   }

//   function calculateTotal() {
//     let sum = 0;
//     state.cart.forEach((item) => {
//       sum += item.price * item.purchaseQuantity;
//     });
//     return sum.toFixed(2);
//   }

//   function submitCheckout() {
//     getCheckout({
//       variables: { 
//         products: [...state.cart],
//       },
//     });
//   }

//   if (!state.cartOpen) {
//     return (
//       <div className="cart-closed" onClick={toggleCart}>
//         <span role="img" aria-label="trash">
//           🛒
//         </span>
//       </div>
//     );
//   }

//   return (
//     <div className="cart">
//       <div className="close" onClick={toggleCart}>
//         [close]
//       </div>
//       <h2>Shopping Cart</h2>
//       {state.cart.length ? (
//         <div>
//           {state.cart.map((item) => (
//             <CartItem key={item._id} item={item} />
//           ))}

//           <div className="flex-row space-between">
//             <strong>Total: ${calculateTotal()}</strong>

//             {Auth.loggedIn() ? (
//               <button onClick={submitCheckout}>Checkout</button>
//             ) : (
//               <span>(log in to check out)</span>
//             )}
//           </div>
//         </div>
//       ) : (
//         <h3>
//           <span role="img" aria-label="shocked">
//             😱
//           </span>
//           You haven't added anything to your cart yet!
//         </h3>
//       )}
//     </div>
//   );
// };

// export default Cart;

// Below this is code, we can use from Copilot to help gets us started refracting the Cart code so we can make our donation page

// import React, { useState } from 'react';

// function DonationForm() {
//   const [donationAmount, setDonationAmount] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Process donation here (e.g., integrate with a payment gateway)
//     console.log(`Donating ${donationAmount}`);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Donation Amount:
//         <input
//           type="number"
//           value={donationAmount}
//           onChange={(e) => setDonationAmount(e.target.value)}
//           required
//         />
//       </label>
//       <button type="submit">Donate</button>
//     </form>
//   );
// }

// export default DonationForm;