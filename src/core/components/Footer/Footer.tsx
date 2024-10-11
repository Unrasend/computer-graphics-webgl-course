import React from 'react';

const Footer: React.FC<{ className: string }> = ({ className }) => {
  return (
    <footer
      className={`
      mt-auto
      flex
      xs:flex-col
      items-center
      w-full
      px-4xl
      xs:px-md
      pb-[6rem]
      xs:pb-2xl
      pt-4xl
      xs:pt-2xl
      bg-bg-1
      justify-between
      border-bg-body
      border-t-2
      ${className}
    `}
    >
      <h2 className="block h6 xs:mb-md">
        <span className="text-f-1 text">© 2023 Copyright Unrasend. All rights reserved.</span>
      </h2>

      <div className="flex flex-col justify-end">
        <h2 className="h6">Vladyslav Luchkov, Software Engineer</h2>

        <ul className="flex justify-end text-right xs:flex-col xs:items-center xs:mt-md">
          <li className="mr-xs xs:mb-md"><a href="https://github.com/Unrasend">Github</a></li>
          <li className="mr-xs xs:mb-md"><a href="https://www.linkedin.com/in/unrasend/">LinkedIn</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
