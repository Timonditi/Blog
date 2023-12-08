// import React, { useEffect } from 'react';
// import '../index.css';

// export default function Login() {
//   useEffect(() => {
//     const passwordField = document.getElementById("password");

//     const handleMouseMove = (event) => {
//       if (!document.querySelector("#password:is(:focus)") && !document.querySelector("#password:is(:user-invalid)")) {
//         const eyes = document.getElementsByClassName('eye');

//         for (let eye of eyes) {
//           const x = eye.getBoundingClientRect().left + 10;
//           const y = eye.getBoundingClientRect().top + 10;
//           const rad = Math.atan2(event.pageX - x, event.pageY - y);
//           const rot = (rad * (180 / Math.PI) * -1) + 180;

//           eye.style.transform = `rotate(${rot}deg)`;
//         }
//       }
//     };

//     const handleFocusPassword = () => {
//       document.getElementById('face').style.transform = 'translateX(30px)';
//       const eyes = document.getElementsByClassName('eye');

//       for (let eye of eyes) {
//         eye.style.transform = `rotate(100deg)`;
//       }
//     };

//     const handleFocusOutPassword = () => {
//       document.getElementById('face').style.transform = 'translateX(0)';
//       if (passwordField.checkValidity()) {
//         document.getElementById('ball').classList.toggle('sad');
//       } else {
//         document.getElementById('ball').classList.toggle('sad');
//         const eyes = document.getElementsByClassName('eye');

//         for (let eye of eyes) {
//           eye.style.transform = `rotate(215deg)`;
//         }
//       }
//     };

//     document.addEventListener("mousemove", handleMouseMove);
//     passwordField.addEventListener('focus', handleFocusPassword);
//     passwordField.addEventListener('focusout', handleFocusOutPassword);

//     return () => {
//       document.removeEventListener("mousemove", handleMouseMove);
//       passwordField.removeEventListener('focus', handleFocusPassword);
//       passwordField.removeEventListener('focusout', handleFocusOutPassword);
//     };
//   }, []);

//   return (
//     <div>
//       <section className="form">
//         <div className="logo">
//           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
//             {/* SVG Path */}
//           </svg>
//         </div>
//         <h1 className="form__title">Log in to your Account</h1>
//         <p className="form__description">Welcome back! Please, enter your information</p>

//         <form>
//           <label className="form-control__label">Email</label>
//           <input type="email" className="form-control" />

//           <label className="form-control__label">Password</label>
//           <div className="password-field">
//             <input type="password" className="form-control" minLength={4} id="password" />
//             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
//               {/* SVG Path */}
//             </svg>
//           </div>
//           <div className="password__settings">
//             <label className="password__settings__remember">
//               <input type="checkbox" />
//               <span className="custom__checkbox">
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
//                   {/* SVG Path */}
//                 </svg>
//               </span>
//               Remember me
//             </label>

//             <a href="#">Forgot Password?</a>
//           </div>

//           <button type="submit" className="form__submit" id="submit">Log In</button>
//         </form>

//         <p className="form__footer">
//           Don't have an account?<br /> <a href="#">Create an account</a>
//         </p>
//       </section>

//       <section className="form__animation">
//         <div id="ball">
//           <div className="ball">
//             <div id="face">
//               <div className="ball__eyes">
//                 <div className="eye_wrap"><span className="eye"></span></div>
//                 <div className="eye_wrap"><span className="eye"></span></div>
//               </div>
//               <div className="ball__mouth"></div>
//             </div>
//           </div>
//         </div>
//         <div className="ball__shadow"></div>
//       </section>
//     </div>
//   );
// }
import React from 'react'

export default function Login() {
  return (
    <div className='flex justify-centre'>
      <form className="max-w-sm mx-auto">
    <div className="mb-5">
      <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
      <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@gmail.com" required/>
    </div>
    <div className="mb-5">
      <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
      <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
    </div>
    <div className="flex items-start mb-5">
      <div className="flex items-center h-5">
        <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required/>
      </div>
    </div>
    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
  </form>

  <section class="form__animation">
            <div id="ball">
                <div class="ball">
                    <div id="face">
                        <div class="ball__eyes">
                            <div class="eye_wrap"><span class="eye"></span></div>
                            <div class="eye_wrap"><span class="eye"></span></div>
                        </div>
                        <div class="ball__mouth"></div>
                    </div>
                </div>
              </div>
              <div class="ball__shadow"></div>
        </section>
    </div>
  )
}

