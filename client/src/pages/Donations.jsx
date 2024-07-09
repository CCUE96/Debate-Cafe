// leaving commented out for now, not sure if this is the proper code, but got it from copilot and need to import in main.jsx, will work on this over the weekend
// import { useState} from 'react'
// import DonationForm from '../components/DonationForm/DonationForm';

export default function Donations() {
   return (
    <>
    {/* <DonationForm /> */}
    </>
   )
}
// import React, { useState } from 'react';

// function DonationForm() {
//   const [donationAmount, setDonationAmount] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Process donation here (e.g., integrate with a payment gateway)
//     console.log(`Donating ${donationAmount}`);
//   };

//   return (
//     <div>
//       <h1>Donate to Our Cause</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Donation Amount:
//           <input
//             type="number"
//             value={donationAmount}
//             onChange={(e) => setDonationAmount(e.target.value)}
//             required
//           />
//         </label>
//         <button type="submit">Donate</button>
//       </form>
//     </div>
//   );
// }

// export default DonationForm;
