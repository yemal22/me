// src/pages/Contact.jsx
import React from 'react';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';

function Contact() {
  return (
    <section className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-6xl w-full bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2 p-8">
            <h1 className="text-5xl font-extrabold text-gray-800 mb-6">Contactez-moi</h1>
            <p className="text-lg text-gray-700 mb-8">Je serais ravi d'échanger avec vous ! N'hésitez pas à me contacter via :</p>
            <ul className="list-none space-y-4">
              <li className="flex items-center">
                <FaEnvelope className="text-blue-500 mr-3" />
                <a href="mailto:yemalem03@gmail.com" className="text-blue-500 hover:text-blue-700 hover:underline">yemalem03@gmail.com</a>
              </li>
              <li className="flex items-center">
                <FaPhone className="text-blue-500 mr-3" />
                <a href="tel:+22995754157" className="text-blue-500 hover:text-blue-700 hover:underline">+229 95 75 41 57</a>
              </li>
              <li className="flex items-center">
                <FaLinkedin className="text-blue-500 mr-3" />
                <a href="https://linkedin.com/in/yemalin" className="text-blue-500 hover:text-blue-700 hover:underline" target="_blank" rel="noopener noreferrer">linkedin.com/in/yemalin</a>
              </li>
              <li className="flex items-center">
                <FaGithub className="text-blue-500 mr-3" />
                <a href="https://github.com/yemalin" className="text-blue-500 hover:text-blue-700 hover:underline" target="_blank" rel="noopener noreferrer">github.com/yemalin</a>
              </li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <img src="/assets/call-center.jpeg" alt="Call Center" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}


// function Contact() {
//   return (
//     <section className="min-h-screen bg-gray-100 flex items-center justify-center">
//       <div className="max-w-6xl w-full bg-white rounded-lg shadow-lg overflow-hidden">
//         <div className="md:flex">
//           <div className="md:w-1/2 p-8">
//             <h1 className="text-5xl font-extrabold text-gray-800 mb-6">Contactez-moi</h1>
//             <p className="text-lg text-gray-700 mb-8">Je serais ravi d'échanger avec vous ! N'hésitez pas à me contacter via :</p>
//             <ul className="list-none space-y-4">
//               <li className="flex items-center">
//                 <span className="material-icons text-blue-500 mr-3">email</span>
//                 <a href="mailto:yemalem03@gmail.com" className="text-blue-500 hover:text-blue-700 hover:underline">yemalem03@gmail.com</a>
//               </li>
//               <li className="flex items-center">
//                 <span className="material-icons text-blue-500 mr-3">phone</span>
//                 <a href="tel:+2290195754157" className="text-blue-500 hover:text-blue-700 hover:underline">+229 01 95 75 41 57</a>
//               </li>
//               <li className="flex items-center">
//                 <span className="material-icons text-blue-500 mr-3">linkedin</span>
//                 <a href="https://linkedin.com/in/morel-kpavode/" className="text-blue-500 hover:text-blue-700 hover:underline" target="_blank" rel="noopener noreferrer">linkedin.com/in/yemal22</a>
//               </li>
//               <li className="flex items-center">
//                 <span className="material-icons text-blue-500 mr-3">github</span>
//                 <a href="https://github.com/yemal22" className="text-blue-500 hover:text-blue-700 hover:underline" target="_blank" rel="noopener noreferrer">github.com/yemal22</a>
//               </li>
//             </ul>
//           </div>
//           <div className="md:w-1/2">
//             <img src="/assets/call-center.jpeg" alt="Call Center" className="w-full h-full object-cover" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

export default Contact;

// // src/pages/Contact.jsx
// import React from 'react';

// function Contact() {
//   return (
//     <section className="p-8">
//       <h1 className="text-3xl font-bold mb-4">Contactez-moi</h1>
//       <p>Je serais ravi d'échanger avec vous ! N'hésitez pas à me contacter via :</p>
//       <ul className="list-disc pl-5 mt-4">
//         <li>Email : <a href="mailto:yemalem03@gmail.com" className="text-blue-600 hover:underline">yemalem03@gmail.com</a></li>
//         <li>Téléphone : <a href="tel:+22995754157" className="text-blue-600 hover:underline">+229 95 75 41 57</a></li>
//         <li>LinkedIn : <a href="https://linkedin.com/in/yemalin" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">linkedin.com/in/yemalin</a></li>
//         <li>GitHub : <a href="https://github.com/yemalin" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">github.com/yemalin</a></li>
//       </ul>
//     </section>
//   );
// }

// export default Contact;


// import React from 'react';

// function Contact() {
//   return (
//     <section className="p-8 bg-gray-100 min-h-screen flex flex-col items-center justify-center">
//       <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
//         <h1 className="text-3xl font-bold mb-4 text-center text-gray-800">Contactez-moi</h1>
//         <p className="text-gray-700 text-center mb-6">Je serais ravi d'échanger avec vous ! N'hésitez pas à me contacter via :</p>
//         <ul className="list-disc pl-5 mt-4 space-y-3">
//           <li>Email : <a href="mailto:yemalem03@gmail.com" className="text-blue-600 hover:underline">yemalem03@gmail.com</a></li>
//           <li>Téléphone : <a href="tel:+22995754157" className="text-blue-600 hover:underline">+229 95 75 41 57</a></li>
//           <li>LinkedIn : <a href="https://linkedin.com/in/yemalin" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">linkedin.com/in/yemalin</a></li>
//           <li>GitHub : <a href="https://github.com/yemalin" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">github.com/yemalin</a></li>
//         </ul>
//       </div>
//     </section>
//   );
// }

// export default Contact;
