// Footer.js
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-black text-white p-4">
            <div className="container mx-auto text-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Company Information */}
                    <div>
                        <h2 className="text-xl font-bold mb-2 underline">EYES</h2>
                        <br/>
                        <p>Dr. RajKumar Road</p>
                        <p>Bangalore, Karnataka 560021</p>
                        <p>Phone: +91 999999999</p>
                    </div>

                    {/* Navigation Links */}
                    <div>
                        <h2 className="text-xl font-bold mb-2 underline">Navigation</h2>
                        <ul>
                            <li>
                                <a href="/" className="text-white hover:text-blue-300 block  lg:text-white p-1 px-3  ">Home</a>
                            </li>
                            <li>
                                <a href="/about" className="text-white hover:text-blue-300 block  lg:text-white p-1 px-3  ">About</a>
                            </li>
                            <li>
                                <a href="/services" className="text-white hover:text-blue-300 block  lg:text-white p-1 px-3  ">Services</a>
                            </li>

                            <li>
                                <a href="/contact" className="text-white hover:text-blue-300 block  lg:text-white p-1 px-3  ">Contact</a>
                            </li>
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h2 className="text-xl font-bold mb-2 underline" >Legal</h2>
                        <ul>
                            <li>
                                <Link
                                    to="/termsCondition" className="text-white hover:text-blue-300 block  lg:text-white p-2 px-6  "
                                >Terms and Conditions</Link>
                            </li>
                            <li>
                                <Link
                                    to="/privacy-policy" className="text-white hover:text-blue-300 block  lg:text-white p-2 px-6  ">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link
                                    to="/service-policy " className="text-white hover:text-blue-300 block  lg:text-white p-2 px-6  ">  Service Policy</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                {/* <p className="mt-4">&copy; {new Date().getFullYear()} Company Name</p> */}
            </div>
            <hr className="my-8 border-white border-gray-700" />
            <div className="flex items-center justify-center space-x-4">
                <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {/* Facebook */}
                    <svg
                        className="h-6 w-6 fill-current text-white hover:text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    >
                        <path d="M22 12.009c0-5.524-4.476-10-10-10s-10 4.476-10 10c0 4.937 3.61 9.007 8.317 9.816v-7.005h-2.497v-2.941h2.497v-2.198c0-2.467 1.464-3.827 3.721-3.827 1.071 0 1.988.079 2.254.114v2.588h-1.545c-1.212 0-1.449.576-1.449 1.423v1.862h2.896l-.379 2.941h-2.517v7.056c4.707-.809 8.308-4.879 8.308-9.816z" />
                    </svg>
                </a>
                <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {/* Instagram */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-instagram"
                        viewBox="0 0 16 16"
                    >
                        <path
                            fill="#fff"
                            d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                        ></path>
                    </svg>
                </a>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                    {/* Twitter */}
                    <svg
                        className="h-6 w-6 fill-current text-white hover:text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    >
                        <path d="M23.954 4.569c-.885.388-1.835.65-2.833.771 1.014-.609 1.794-1.575 2.164-2.725-.951.564-2.005.974-3.127 1.194-.895-.957-2.17-1.555-3.578-1.555-2.706 0-4.904 2.198-4.904 4.904 0 .384.043.758.126 1.116-4.082-.205-7.7-2.164-10.122-5.138-.422.717-.665 1.552-.665 2.445 0 1.693.863 3.188 2.172 4.066-.8-.025-1.556-.245-2.217-.611v.062c0 2.364 1.681 4.33 3.913 4.78-.41.111-.84.172-1.283.172-.313 0-.616-.031-.917-.09.631 1.958 2.445 3.381 4.598 3.422-1.685 1.322-3.807 2.11-6.104 2.11-.397 0-.79-.023-1.178-.069 2.185 1.398 4.768 2.21 7.554 2.21 9.054 0 14.007-7.498 14.007-14.007 0-.213-.005-.426-.015-.638.959-.696 1.798-1.566 2.46-2.557l-.047-.02z" />
                    </svg>
                </a>
            </div>
            <br/>
            
           {/* Decorative Element */}
<div className="mt-spacing-7 pb-spacing-7 bg-inverse" aria-hidden="true">
    <div style={{ marginTop: "-23px" }}>
        <div className="bg-primary" style={{ marginTop: "0px", height: "23px" }}></div>
        <div className="bg-white" style={{ height: "2px" }}></div> 
        <div className="bg-primary" style={{ marginTop: "1px", height: "22px" }}></div>
        <div className="bg-white" style={{ height: "4px" }}></div> 
        <div className="bg-primary" style={{ marginTop: "2px", height: "21px" }}></div>
        <div className="bg-white" style={{ height: "6px" }}></div> 
        <div className="bg-primary" style={{ marginTop: "3px", height: "20px" }}></div>
        <div className="bg-white" style={{ height: "8px" }}></div> 
        <div className="bg-primary" style={{ marginTop: "4px", height: "19px" }}></div>
        <div className="bg-white" style={{ height: "10px" }}></div> 
        <div className="bg-primary" style={{ marginTop: "5px", height: "18px" }}></div>
        <div className="bg-white" style={{ height: "12px" }}></div> 
        <div className="bg-primary" style={{ marginTop: "6px", height: "17px" }}></div>
        <div className="bg-white" style={{ height: "14px" }}></div> 
        <div className="bg-primary" style={{ marginTop: "7px", height: "16px" }}></div>
        <div className="bg-white" style={{ height: "16px" }}></div> 
        <div className="bg-primary" style={{ marginTop: "8px", height: "15px" }}></div>
        <div className="bg-white" style={{ height: "18px" }}></div> 
        <div className="bg-primary" style={{ marginTop: "9px", height: "14px" }}></div>
        <div className="bg-white" style={{ height: "20px" }}></div> 
        <div className="bg-primary" style={{ marginTop: "10px", height: "13px" }}></div>
        <div className="bg-white" style={{ height: "22px" }}></div> 
        <div className="bg-primary" style={{ marginTop: "11px", height: "12px" }}></div>
        <div className="bg-white" style={{ height: "24px" }}></div> 
        <div className="bg-primary" style={{ marginTop: "12px", height: "11px" }}></div>
        <div className="bg-white" style={{ height: "26px" }}></div> 
        <div className="bg-primary" style={{ marginTop: "13px", height: "10px" }}></div>
        <div className="bg-white" style={{ height: "28px" }}></div> 
        <div className="bg-primary" style={{ marginTop: "12px", height: "9px" }}></div>
        <div className="bg-white" style={{ height: "30px" }}></div> 
        <div className="bg-primary" style={{ marginTop: "11px", height: "8px" }}></div>
        <div className="bg-white" style={{ height: "32px" }}></div> 
        <div className="bg-primary" style={{ marginTop: "12px", height: "7px" }}></div>
        <div className="bg-white" style={{ height: "34px" }}></div> 
        <div className="bg-primary" style={{ marginTop: "11px", height: "6px" }}></div>
        <div className="bg-white" style={{ height: "36px" }}></div> 
        <div className="bg-primary" style={{ marginTop: "10px", height: "5px" }}></div>
        <div className="bg-white" style={{ height: "38px" }}></div> 
        <div className="bg-primary" style={{ marginTop: "9px", height: "4px" }}></div>
        <div className="bg-white" style={{ height: "40px" }}></div> 
        <div className="bg-primary" style={{ marginTop: "8px", height: "3px" }}></div>
        <div className="bg-white" style={{ height: "42px" }}></div> 
        <div className="bg-primary" style={{ marginTop: "7px", height: "2px" }}></div>
        <div className="bg-white" style={{ height: "44px" }}></div> 
        <div className="bg-primary" style={{ marginTop: "6px", height: "1px" }}></div>
        <div className="bg-white" style={{ height: "46px" }}></div> 
        <div className="bg-primary" style={{ marginTop: "0px", height: "0px" }}></div>
    </div>
</div>

        </footer>
    );
};

export default Footer;


// <div class="bg-primary" style="margin-top: 0px; height: 23px;"></div>


// <div class="bg-primary" style="margin-top: 1px; height: 22px;"></div>



// <div class="mt-spacing-7 pt-spacing-7 w-full bg-primary text-primary"><div class="container"><div class="cols-container"><div class="xs:w-6-cols md:w-8-cols md:mb-48 lg:w-4-cols lg:mb-0"><a href="/" class="relative z-10 inline-block focus:outline-0 before:absolute before:-top-8 before:-bottom-8 before:-left-12 before:-right-12 before:-z-10 before:hidden before:border-4 before:border-primary before:content-[''] focus:before:block" aria-label="OpenAI"><svg data-v-cbc994d7="" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1180 320" class="a-icon--logo-text flex h-32 max-w-[126px]" data-new="" aria-hidden="true" style="width: 118px; height: 32px;"><g data-v-cbc994d7="" fill="currentColor"><path d="m367.44 153.84c0 52.32 33.6 88.8 80.16 88.8s80.16-36.48 80.16-88.8-33.6-88.8-80.16-88.8-80.16 36.48-80.16 88.8zm129.6 0c0 37.44-20.4 61.68-49.44 61.68s-49.44-24.24-49.44-61.68 20.4-61.68 49.44-61.68 49.44 24.24 49.44 61.68z"></path><path d="m614.27 242.64c35.28 0 55.44-29.76 55.44-65.52s-20.16-65.52-55.44-65.52c-16.32 0-28.32 6.48-36.24 15.84v-13.44h-28.8v169.2h28.8v-56.4c7.92 9.36 19.92 15.84 36.24 15.84zm-36.96-69.12c0-23.76 13.44-36.72 31.2-36.72 20.88 0 32.16 16.32 32.16 40.32s-11.28 40.32-32.16 40.32c-17.76 0-31.2-13.2-31.2-36.48z"></path><path d="m747.65 242.64c25.2 0 45.12-13.2 54-35.28l-24.72-9.36c-3.84 12.96-15.12 20.16-29.28 20.16-18.48 0-31.44-13.2-33.6-34.8h88.32v-9.6c0-34.56-19.44-62.16-55.92-62.16s-60 28.56-60 65.52c0 38.88 25.2 65.52 61.2 65.52zm-1.44-106.8c18.24 0 26.88 12 27.12 25.92h-57.84c4.32-17.04 15.84-25.92 30.72-25.92z"></path><path d="m823.98 240h28.8v-73.92c0-18 13.2-27.6 26.16-27.6 15.84 0 22.08 11.28 22.08 26.88v74.64h28.8v-83.04c0-27.12-15.84-45.36-42.24-45.36-16.32 0-27.6 7.44-34.8 15.84v-13.44h-28.8z"></path><path d="m1014.17 67.68-65.28 172.32h30.48l14.64-39.36h74.4l14.88 39.36h30.96l-65.28-172.32zm16.8 34.08 27.36 72h-54.24z"></path><path d="m1163.69 68.18h-30.72v172.32h30.72z"></path><path d="m297.06 130.97c7.26-21.79 4.76-45.66-6.85-65.48-17.46-30.4-52.56-46.04-86.84-38.68-15.25-17.18-37.16-26.95-60.13-26.81-35.04-.08-66.13 22.48-76.91 55.82-22.51 4.61-41.94 18.7-53.31 38.67-17.59 30.32-13.58 68.54 9.92 94.54-7.26 21.79-4.76 45.66 6.85 65.48 17.46 30.4 52.56 46.04 86.84 38.68 15.24 17.18 37.16 26.95 60.13 26.8 35.06.09 66.16-22.49 76.94-55.86 22.51-4.61 41.94-18.7 53.31-38.67 17.57-30.32 13.55-68.51-9.94-94.51zm-120.28 168.11c-14.03.02-27.62-4.89-38.39-13.88.49-.26 1.34-.73 1.89-1.07l63.72-36.8c3.26-1.85 5.26-5.32 5.24-9.07v-89.83l26.93 15.55c.29.14.48.42.52.74v74.39c-.04 33.08-26.83 59.9-59.91 59.97zm-128.84-55.03c-7.03-12.14-9.56-26.37-7.15-40.18.47.28 1.3.79 1.89 1.13l63.72 36.8c3.23 1.89 7.23 1.89 10.47 0l77.79-44.92v31.1c.02.32-.13.63-.38.83l-64.41 37.19c-28.69 16.52-65.33 6.7-81.92-21.95zm-16.77-139.09c7-12.16 18.05-21.46 31.21-26.29 0 .55-.03 1.52-.03 2.2v73.61c-.02 3.74 1.98 7.21 5.23 9.06l77.79 44.91-26.93 15.55c-.27.18-.61.21-.91.08l-64.42-37.22c-28.63-16.58-38.45-53.21-21.95-81.89zm221.26 51.49-77.79-44.92 26.93-15.54c.27-.18.61-.21.91-.08l64.42 37.19c28.68 16.57 38.51 53.26 21.94 81.94-7.01 12.14-18.05 21.44-31.2 26.28v-75.81c.03-3.74-1.96-7.2-5.2-9.06zm26.8-40.34c-.47-.29-1.3-.79-1.89-1.13l-63.72-36.8c-3.23-1.89-7.23-1.89-10.47 0l-77.79 44.92v-31.1c-.02-.32.13-.63.38-.83l64.41-37.16c28.69-16.55 65.37-6.7 81.91 22 6.99 12.12 9.52 26.31 7.15 40.1zm-168.51 55.43-26.94-15.55c-.29-.14-.48-.42-.52-.74v-74.39c.02-33.12 26.89-59.96 60.01-59.94 14.01 0 27.57 4.92 38.34 13.88-.49.26-1.33.73-1.89 1.07l-63.72 36.8c-3.26 1.85-5.26 5.31-5.24 9.06l-.04 89.79zm14.63-31.54 34.65-20.01 34.65 20v40.01l-34.65 20-34.65-20z"></path></g></svg></a></div><div class="xs:w-3-cols xs:mt-40 md:w-2-cols md:mt-0"><h4 id="footerList0" class="f-ui-2">Research</h4><ul aria-labelledby="footerList0"><li class="mt-1"><a href="/research/overview" class="ui-link group inline-block relative ui-link--inherit" aria-label="Overview"><span class="flex items-center"><!----><span class="f-ui-1 underline-transparent underline-thickness-1 underline-offset-4 group-hover:underline group-hover:underline-inherit">Overview</span><!----></span></a></li><li class="mt-1"><a href="/research" class="ui-link group inline-block relative ui-link--inherit" aria-label="Index"><span class="flex items-center"><!----><span class="f-ui-1 underline-transparent underline-thickness-1 underline-offset-4 group-hover:underline group-hover:underline-inherit">Index</span><!----></span></a></li><li class="mt-1"><a href="/gpt-4" class="ui-link group inline-block relative ui-link--inherit" aria-label="GPT-4"><span class="flex items-center"><!----><span class="f-ui-1 underline-transparent underline-thickness-1 underline-offset-4 group-hover:underline group-hover:underline-inherit">GPT-4</span><!----></span></a></li><li class="mt-1"><a href="/dall-e-2" class="ui-link group inline-block relative ui-link--inherit" aria-label="DALL·E 2"><span class="flex items-center"><!----><span class="f-ui-1 underline-transparent underline-thickness-1 underline-offset-4 group-hover:underline group-hover:underline-inherit">DALL·E 2</span><!----></span></a></li></ul></div><div class="xs:w-3-cols xs:mt-40 md:w-2-cols md:mt-0"><h4 id="footerList1" class="f-ui-2">API</h4><ul aria-labelledby="footerList1"><li class="mt-1"><a href="/product" class="ui-link group inline-block relative ui-link--inherit" aria-label="Overview"><span class="flex items-center"><!----><span class="f-ui-1 underline-transparent underline-thickness-1 underline-offset-4 group-hover:underline group-hover:underline-inherit">Overview</span><!----></span></a></li><li class="mt-1"><a aria-current="page" href="/enterprise-privacy" class="router-link-active router-link-exact-active ui-link group inline-block relative ui-link--inherit" aria-label="Data privacy"><span class="flex items-center"><!----><span class="f-ui-1 underline-transparent underline-thickness-1 underline-offset-4 group-hover:underline group-hover:underline-inherit">Data privacy</span><!----></span></a></li><li class="mt-1"><a href="/pricing" class="ui-link group inline-block relative ui-link--inherit" aria-label="Pricing"><span class="flex items-center"><!----><span class="f-ui-1 underline-transparent underline-thickness-1 underline-offset-4 group-hover:underline group-hover:underline-inherit">Pricing</span><!----></span></a></li><li class="mt-1"><a href="https://platform.openai.com/docs/introduction" rel="noopener" target="_blank" aria-label="Docs" class="ui-link group inline-block relative ui-link--inherit"><span class="flex items-center"><!----><span class="f-ui-1 underline-transparent underline-thickness-1 underline-offset-4 group-hover:underline group-hover:underline-inherit">Docs</span><svg data-v-cbc994d7="" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="a-icon--arrow-north-east400 a-icon--text a-icon--no-align top-[0.05em] relative f-ui-1 ml-2 -mr-4" data-new="" aria-hidden="true" style="width: 1em; height: 1em;"><polygon data-v-cbc994d7="" fill="currentColor" points="5 4.31 5 5.69 9.33 5.69 2.51 12.51 3.49 13.49 10.31 6.67 10.31 11 11.69 11 11.69 4.31 5 4.31"></polygon></svg></span></a></li></ul></div><div class="xs:w-3-cols xs:mt-40 md:w-2-cols md:mt-0"><h4 id="footerList2" class="f-ui-2">ChatGPT</h4><ul aria-labelledby="footerList2"><li class="mt-1"><a href="/chatgpt" class="ui-link group inline-block relative ui-link--inherit" aria-label="Overview"><span class="flex items-center"><!----><span class="f-ui-1 underline-transparent underline-thickness-1 underline-offset-4 group-hover:underline group-hover:underline-inherit">Overview</span><!----></span></a></li><li class="mt-1"><a href="/enterprise" class="ui-link group inline-block relative ui-link--inherit" aria-label="Enterprise"><span class="flex items-center"><!----><span class="f-ui-1 underline-transparent underline-thickness-1 underline-offset-4 group-hover:underline group-hover:underline-inherit">Enterprise</span><!----></span></a></li><li class="mt-1"><a href="https://chat.openai.com/auth/login" rel="noopener" target="_blank" aria-label="Try ChatGPT" class="ui-link group inline-block relative ui-link--inherit"><span class="flex items-center"><!----><span class="f-ui-1 underline-transparent underline-thickness-1 underline-offset-4 group-hover:underline group-hover:underline-inherit">Try ChatGPT</span><svg data-v-cbc994d7="" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="a-icon--arrow-north-east400 a-icon--text a-icon--no-align top-[0.05em] relative f-ui-1 ml-2 -mr-4" data-new="" aria-hidden="true" style="width: 1em; height: 1em;"><polygon data-v-cbc994d7="" fill="currentColor" points="5 4.31 5 5.69 9.33 5.69 2.51 12.51 3.49 13.49 10.31 6.67 10.31 11 11.69 11 11.69 4.31 5 4.31"></polygon></svg></span></a></li></ul></div><div class="xs:w-3-cols xs:mt-40 md:w-2-cols md:mt-0"><h4 id="footerList3" class="f-ui-2">Company</h4><ul aria-labelledby="footerList3"><li class="mt-1"><a href="/about" class="ui-link group inline-block relative ui-link--inherit" aria-label="About"><span class="flex items-center"><!----><span class="f-ui-1 underline-transparent underline-thickness-1 underline-offset-4 group-hover:underline group-hover:underline-inherit">About</span><!----></span></a></li><li class="mt-1"><a href="/blog" class="ui-link group inline-block relative ui-link--inherit" aria-label="Blog"><span class="flex items-center"><!----><span class="f-ui-1 underline-transparent underline-thickness-1 underline-offset-4 group-hover:underline group-hover:underline-inherit">Blog</span><!----></span></a></li><li class="mt-1"><a href="/careers" class="ui-link group inline-block relative ui-link--inherit" aria-label="Careers"><span class="flex items-center"><!----><span class="f-ui-1 underline-transparent underline-thickness-1 underline-offset-4 group-hover:underline group-hover:underline-inherit">Careers</span><!----></span></a></li><li class="mt-1"><a href="/charter" class="ui-link group inline-block relative ui-link--inherit" aria-label="Charter"><span class="flex items-center"><!----><span class="f-ui-1 underline-transparent underline-thickness-1 underline-offset-4 group-hover:underline group-hover:underline-inherit">Charter</span><!----></span></a></li><li class="mt-1"><a href="/security" class="ui-link group inline-block relative ui-link--inherit" aria-label="Security"><span class="flex items-center"><!----><span class="f-ui-1 underline-transparent underline-thickness-1 underline-offset-4 group-hover:underline group-hover:underline-inherit">Security</span><!----></span></a></li><li class="mt-1"><a href="/customer-stories" class="ui-link group inline-block relative ui-link--inherit" aria-label="Customer stories"><span class="flex items-center"><!----><span class="f-ui-1 underline-transparent underline-thickness-1 underline-offset-4 group-hover:underline group-hover:underline-inherit">Customer stories</span><!----></span></a></li><li class="mt-1"><a href="/safety" class="ui-link group inline-block relative ui-link--inherit" aria-label="Safety"><span class="flex items-center"><!----><span class="f-ui-1 underline-transparent underline-thickness-1 underline-offset-4 group-hover:underline group-hover:underline-inherit">Safety</span><!----></span></a></li></ul></div></div><div class="mt-spacing-9 border-t border-primary pt-8"><div class="cols-container"><div class="xs:w-3-cols md:w-2-cols lg:w-4-cols flex flex-col items-start md:min-h-92 lg:min-h-100"><span class="f-subhead-2">OpenAI © 2015&hairsp;–&hairsp;2023</span><a href="/policies" class="ui-link group inline-block relative ui-link--inherit xs:mt-3 md:mt-1 block" aria-label="Terms &amp; policies"><span class="flex items-center"><!----><span class="f-ui-1 underline-transparent underline-thickness-1 underline-offset-4 group-hover:underline group-hover:underline-inherit">Terms &amp; policies</span><!----></span></a><a href="/policies/privacy-policy" class="ui-link group inline-block relative ui-link--inherit xs:mt-3 md:mt-1 block" aria-label="Privacy policy"><span class="flex items-center"><!----><span class="f-ui-1 underline-transparent underline-thickness-1 underline-offset-4 group-hover:underline group-hover:underline-inherit">Privacy policy</span><!----></span></a><a href="/brand" class="ui-link group inline-block relative ui-link--inherit xs:mt-3 md:mt-1 block" aria-label="Brand guidelines"><span class="flex items-center"><!----><span class="f-ui-1 underline-transparent underline-thickness-1 underline-offset-4 group-hover:underline group-hover:underline-inherit">Brand guidelines</span><!----></span></a></div><div class="xs:w-3-cols md:w-6-cols lg:w-8-cols"><h4 id="footerSocialHeading" class="f-subhead-2 md:hidden">Social</h4><ul aria-labelledby="footerSocialHeading" class="md:flex md:flex-row md:flex-wrap"><li class="xs:mt-1 md:mt-0 md:mr-16 lg:mr-24 lg:mb-24"><a class="ui-link group relative inline-block ui-link--inherit" href="https://twitter.com/OpenAI" target="_blank"><span class="flex items-center"><span class="f-ui-1 underline-transparent underline-thickness-1 underline-offset-4 group-hover:underline group-hover:underline-inherit">Twitter</span></span></a></li><li class="xs:mt-1 md:mt-0 md:mr-16 lg:mr-24 lg:mb-24"><a class="ui-link group relative inline-block ui-link--inherit" href="https://youtube.com/OpenAI" target="_blank"><span class="flex items-center"><span class="f-ui-1 underline-transparent underline-thickness-1 underline-offset-4 group-hover:underline group-hover:underline-inherit">YouTube</span></span></a></li><li class="xs:mt-1 md:mt-0 md:mr-16 lg:mr-24 lg:mb-24"><a class="ui-link group relative inline-block ui-link--inherit" href="https://github.com/openai" target="_blank"><span class="flex items-center"><span class="f-ui-1 underline-transparent underline-thickness-1 underline-offset-4 group-hover:underline group-hover:underline-inherit">GitHub</span></span></a></li><li class="xs:mt-1 md:mt-0 md:mr-16 lg:mr-24 lg:mb-24"><a class="ui-link group relative inline-block ui-link--inherit" href="https://soundcloud.com/openai_audio" target="_blank"><span class="flex items-center"><span class="f-ui-1 underline-transparent underline-thickness-1 underline-offset-4 group-hover:underline group-hover:underline-inherit">SoundCloud</span></span></a></li><li class="xs:mt-1 md:mt-0 md:mr-16 lg:mr-24 lg:mb-24"><a class="ui-link group relative inline-block ui-link--inherit" href="https://www.linkedin.com/company/openai" target="_blank"><span class="flex items-center"><span class="f-ui-1 underline-transparent underline-thickness-1 underline-offset-4 group-hover:underline group-hover:underline-inherit">LinkedIn</span></span></a></li></ul></div></div><div class="cols-container mt-24 md:mt-0 md:-translate-y-full md:transform"><div class="xs:w-3-cols md:ml-2-cols md:w-6-cols lg:ml-4-cols lg:w-8-cols"><button aria-label="Back to top" class="ui-link group inline-block relative ui-link--inherit"><span class="flex items-center"><!----><span class="f-ui-1 underline-transparent underline-thickness-1 underline-offset-4 group-hover:underline group-hover:underline-inherit">Back to top</span><svg data-v-cbc994d7="" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="a-icon--arrow-up400 a-icon--text a-icon--no-align top-[0.05em] relative f-ui-1 ml-2 -mr-4" data-new="" aria-hidden="true" style="width: 1em; height: 1em;"><polygon data-v-cbc994d7="" fill="currentColor" points="12.73 7.25 8 2.52 3.27 7.25 4.25 8.23 7.31 5.17 7.31 14 8.69 14 8.69 5.17 11.75 8.23 12.73 7.25"></polygon></svg></span></button></div></div></div></div><div class="mt-spacing-7 pb-spacing-7 bg-inverse" aria-hidden="true"><div style="margin-top: -23px;"><div class="bg-primary" style="margin-top: 0px; height: 23px;"></div><div class="bg-primary" style="margin-top: 1px; height: 22px;"></div><div class="bg-primary" style="margin-top: 2px; height: 21px;"></div><div class="bg-primary" style="margin-top: 3px; height: 20px;"></div><div class="bg-primary" style="margin-top: 4px; height: 19px;"></div><div class="bg-primary" style="margin-top: 5px; height: 18px;"></div><div class="bg-primary" style="margin-top: 6px; height: 17px;"></div><div class="bg-primary" style="margin-top: 7px; height: 16px;"></div><div class="bg-primary" style="margin-top: 8px; height: 15px;"></div><div class="bg-primary" style="margin-top: 9px; height: 14px;"></div><div class="bg-primary" style="margin-top: 10px; height: 13px;"></div><div class="bg-primary" style="margin-top: 11px; height: 12px;"></div><div class="bg-primary" style="margin-top: 12px; height: 11px;"></div><div class="bg-primary" style="margin-top: 13px; height: 10px;"></div><div class="bg-primary" style="margin-top: 14px; height: 9px;"></div><div class="bg-primary" style="margin-top: 15px; height: 8px;"></div><div class="bg-primary" style="margin-top: 16px; height: 7px;"></div><div class="bg-primary" style="margin-top: 17px; height: 6px;"></div><div class="bg-primary" style="margin-top: 18px; height: 5px;"></div><div class="bg-primary" style="margin-top: 19px; height: 4px;"></div><div class="bg-primary" style="margin-top: 20px; height: 3px;"></div><div class="bg-primary" style="margin-top: 21px; height: 2px;"></div><div class="bg-primary" style="margin-top: 22px; height: 1px;"></div><div class="bg-primary" style="margin-top: 23px; height: 0px;"></div></div></div></div>