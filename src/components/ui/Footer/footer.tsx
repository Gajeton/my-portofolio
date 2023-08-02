import Link from "next/link";
import AnimateCard from "../../shared/animated-card";

export default function Footer() {
  return (
    <footer className="md:max-w-screen-lg md:mx-auto">
      <AnimateCard>
      <div className="py-4 md:py-6 ">
        <hr className="h-px mb-2 bg-black border-0"/>
        <div className="flex flex-row-reverse justify-center items-center mt-4">
          <ul className="flex space-x-4">
            <li className="ml-4">
              <Link
                href="https://github.com/Gajeton"
                aria-label="Github"
                className="flex justify-center items-center text-white bg-black hover:text-black hover:bg-white rounded-full transition duration-150 ease-in-out"

              >
                <svg
                  className="w-8 h-8 fill-current"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                </svg>
              </Link>
            </li>
            <li className="ml-4">
              <Link
                href="https://www.linkedin.com/in/antoine-familiar/"
                className="flex justify-center items-center text-white bg-black hover:text-black hover:bg-white rounded-full transition duration-150 ease-in-out"
                aria-label="Linkedin"
              >
                <svg
                  className="w-8 h-8 fill-current"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
                </svg>
              </Link>
            </li>
          </ul>
          <div className="flex space-x-2 text-sm resp:text-xs align-center text-white">
            <div>{` © ${new Date().getFullYear()}`}</div>
            <span>{` • `}</span>
            <span>  All Rights Reserved by Antoine Familiar</span>
          </div>
        </div>
      </div>
      </AnimateCard>
    </footer>
  );
}
