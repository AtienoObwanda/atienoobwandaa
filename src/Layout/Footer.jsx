import React from "react";


function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <footer>
        <div className="flex">
            <div className="w-1/2">
            <h3 className="text-right text-dark dark:text-white mr-[3px]">Made by Millicent A.Obwanda | </h3>
            </div>
            <div className="w-1/2">
            <h3 className="text-dark dark:text-white"> Copyright © {year}</h3>
            </div>
        </div>
    </footer>
   
  );
}

export default Footer;