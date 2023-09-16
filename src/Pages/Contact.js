import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import WhatsApp from '../Home/WhatsApp';

const Contact = () => {
  return (
    <>
      <Header />
      <div className="flex justify-center items-center min-h-screen bg-gray-200">
        <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-center text-blue-600 mb-6">Contact Us</h2>
          <form className="space-y-4">
            <div className="relative">
              <label htmlFor="name" className="block text-gray-700 font-semibold">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
                placeholder="Your Name"
              />
            </div>
            <div className="relative">
              <label htmlFor="email" className="block text-gray-700 font-semibold">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
                placeholder="Your Email"
              />
            </div>
            <div className="relative">
              <label htmlFor="message" className="block text-gray-700 font-semibold">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
                placeholder="Your Message"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none transform transition-transform hover:scale-105"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
      <WhatsApp/>
    </>
  );
};

export default Contact;











//   return (
//     <div className="contact_us_green">
//       <div className="responsive-container-block big-container">
//         <div className="responsive-container-block container">
//           {/* Left Section */}
//           <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-7 wk-ipadp-10 line" id="i69b-2">
//             <form className="form-box">
//               <div className="container-block form-wrapper">
//                 <div className="head-text-box">
//                   <p className="text-blk contactus-head">Contact us</p>
//                   <p className="text-blk contactus-subhead">
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
//                   </p>
//                 </div>
//                 <div className="responsive-container-block">
//                   <div className="responsive-cell-block wk-ipadp-6 wk-tab-12 wk-mobile-12 wk-desk-6" id="i10mt-6">
//                     <p className="text-blk input-title">FIRST NAME</p>
//                     <input className="input" id="ijowk-6" name="FirstName" />
//                   </div>
//                   <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
//                     <p className="text-blk input-title">LAST NAME</p>
//                     <input className="input" id="indfi-4" name="Last Name" />
//                   </div>
//                   <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
//                     <p className="text-blk input-title">EMAIL</p>
//                     <input className="input" id="ipmgh-6" name="Email" />
//                   </div>
//                   <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
//                     <p className="text-blk input-title">PHONE NUMBER</p>
//                     <input className="input" id="imgis-5" name="PhoneNumber" />
//                   </div>
//                   <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12" id="i634i-6">
//                     <p className="text-blk input-title">WHAT DO YOU HAVE IN MIND</p>
//                     <textarea className="textinput" id="i5vyy-6" placeholder="Please enter query..."></textarea>
//                   </div>
//                 </div>
//                 <div className="btn-wrapper">
//                   <button className="submit-btn">Submit</button>
//                 </div>
//               </div>
//             </form>
//           </div>

//           {/* Right Section */}
//           <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-5 wk-ipadp-10" id="ifgi">
//             <div className="container-box">
//               <div className="text-content">
//                 <p className="text-blk contactus-head">Contact us</p>
//                 <p className="text-blk contactus-subhead">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
//                 </p>
//               </div>
//               <div className="workik-contact-bigbox">
//                 <div className="workik-contact-box">
//                   <div className="phone text-box">
//                     <img className="contact-svg" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET21.jpg" alt="Phone" />
//                     <p className="contact-text">+1258 3258 5679</p>
//                   </div>
//                   <div className="address text-box">
//                     <img className="contact-svg" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET22.jpg" alt="Address" />
//                     <p className="contact-text">hello@workik.com</p>
//                   </div>
//                   <div className="mail text-box">
//                     <img className="contact-svg" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET23.jpg" alt="Mail" />
//                     <p className="contact-text">102 street, y cross 485656</p>
//                   </div>
//                 </div>
//                 <div className="social-media-links">
//                   <a href=""><img className="social-svg" id="is9ym" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-mail.svg" alt="Mail" /></a>
//                   <a href=""><img className="social-svg" id="i706n" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-twitter.svg" alt="Twitter" /></a>
//                   <a href=""><img className="social-svg" id="ib9ve" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-insta.svg" alt="Instagram" /></a>
//                   <a href=""><img className="social-svg" id="ie9fx" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-fb.svg" alt="Facebook" /></a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



