"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer
        className="wow fadeInUp relative z-10 bg-white pt-2 md:pt-6 lg:pt-10"
        data-wow-delay=".1s"
        style={{ fontFamily: 'Libre Franklin, Helios Extended, sans-serif' }}
      >
        <div className="container w-full flex items-center justify-center">
          <Link href="/" className="mb-8 inline-block">
            <Image
              src="/images/logo/logo.png"
              alt="logo"
              className="w-full"
              width={100}
              height={20}
            />
          </Link>
          <div 
            className="w-full"
            style={{marginLeft: "10px"}}
          >
            <h2 className="lg:text-xl md:text-lg sm:text-md font-bold text-blue mb-2">
              Contact Us
            </h2>
            <p className="mb-9 lg:text-base text-sm leading-relaxed text-black/80">beymun@aub.edu.lb</p>
            <div id='social-links' className="flex items-center">
              <a
                href="https://www.instagram.com/beymunconference?igsh=MXRjanZsYTR2ZjJhag=="
                aria-label="instagram"
                className="mr-6 text-blue duration-300 hover:text-blue/80"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  x="0px" 
                  y="0px" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 30 30"
                >
                  <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path>
                </svg>
              </a>
              <a
                href="https://x.com/Beymun_?t=tp_eHHAzod_j53AVWXCCKw&s=09"
                aria-label="twitter"
                className="mr-6 text-blue duration-300 hover:text-blue/80"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  x="0px" 
                  y="0px" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 50 50"
                >
                  <path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"></path>
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@beymun_?_t=8jRsA2oS0dG&_r=1"
                aria-label="tiktok"
                className="mr-6 text-blue duration-300 hover:text-blue/80"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  x="0px" 
                  y="0px" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 50 50"
                >
                  <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z"></path>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/beymun/"
                aria-label="linkedin"
                className="text-black duration-300 hover:text-blue"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  className="fill-current"
                >
                  <path d="M15.2196 0H1.99991C1.37516 0 0.875366 0.497491 0.875366 1.11936V14.3029C0.875366 14.8999 1.37516 15.4222 1.99991 15.4222H15.1696C15.7943 15.4222 16.2941 14.9247 16.2941 14.3029V1.09448C16.3441 0.497491 15.8443 0 15.2196 0ZM5.44852 13.1089H3.17444V5.7709H5.44852V13.1089ZM4.29899 4.75104C3.54929 4.75104 2.97452 4.15405 2.97452 3.43269C2.97452 2.71133 3.57428 2.11434 4.29899 2.11434C5.02369 2.11434 5.62345 2.71133 5.62345 3.43269C5.62345 4.15405 5.07367 4.75104 4.29899 4.75104ZM14.07 13.1089H11.796V9.55183C11.796 8.7061 11.771 7.58674 10.5964 7.58674C9.39693 7.58674 9.222 8.53198 9.222 9.47721V13.1089H6.94792V5.7709H9.17202V6.79076H9.19701C9.52188 6.19377 10.2466 5.59678 11.3711 5.59678C13.6952 5.59678 14.12 7.08925 14.12 9.12897V13.1089H14.07Z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <Link
              href='/terms-conditions'
              className="font-medium text-blue underline whitespace-nowrap text-sm lg:text-md"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Terms and Conditions
            </Link>
            <Link
              href='/privacy-policy'
              className="font-medium text-blue underline mt-3 text-sm lg:text-md"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent mt-5"></div>
          <div className="py-4 flex justify-center items-center">
            <div className="text-blue text-lg mr-2">
              &copy;
            </div>
            <p className="text-center text-base text-body-color">
              BEYMUN 2024 | All Rights Reserved
            </p>
          </div>
      </footer>
    </>
  );
};

export default Footer;
