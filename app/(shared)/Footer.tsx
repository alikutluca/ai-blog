import React from "react";

function Footer() {
  return (
    <footer className="bg-wh-900 text-wh-50 py-10 px-10 ">
      <div className="justify-between mx-auto gap-16 sm:flex">
        {/* FIRST COLUMN */}
        <div className="mt-16 basis-1/2 sm:mt-0">
          <h4 className="font-bold"> BLOG OF THE FUTURE</h4>
          <p className="my-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. In nemo
            perspiciatis quo, hic, perferendis consectetur facere culpa corrupti
            libero doloribus voluptatibus! Alias sint facilis officiis maiores
            repellat aliquid nesciunt quas!
          </p>
          <p>Blog of the futuere all rights are not reserved ofcourse</p>
        </div>
        {/* SECOND COLUMN */}
        <div className="mt-16 basis-1/4 sm:mt-0">
          <h4 className="font-bold"> Links</h4>
          <p className="my-5">Lorem, ipsum dolor sit amet</p>
          <p className="my-5">consectetur adipisicing elit. In n</p>
          <p>emo perspiciatis quo, hic, perferendis </p>
        </div>
        {/* THIRD COLUMN */}
        <div className="mt-16 basis-1/4 sm:mt-0">
          <h4 className="font-bold"> Contact Us</h4>
          <p className="my-5">
            Lorem, ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur,
            adipisicing elit
          </p>
          <p>999 112 155 952 </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
