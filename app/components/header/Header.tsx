"use client"
import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/Gi';
import { AiOutlineCloseCircle } from 'react-icons/Ai';


export default function () {
  const [toggle, setToggle] = useState(false);

  return (
    <section className="text-white">
      <div className="flex justify-between bg-black ">
        <h1 className="font-signature m-7 ">Bilal Farooque</h1>
        <ul className="m-7 md:flex hidden">
          <li className="font-signature mx-5 text-sm hover:scale-125 ">Home</li>
          <li className="font-signature mx-5 text-sm hover:scale-125 ">
            About
          </li>
          <li className="font-signature mx-5 text-sm hover:scale-125 ">
            Portfolio
          </li>
          <li className="font-signature mx-5 text-sm hover:scale-125 ">
            Projects
          </li>
        </ul>
        <div
          className=" p-5 md:hidden "
          onClick={() => {
            setToggle(!toggle)
            console.log(toggle)
          }}
        >
           {toggle? <GiHamburgerMenu size={20} /> :<AiOutlineCloseCircle />}
           {/* agar toggle true hai toh cross nhi toh hamburg */}

        </div>
      </div>
    </section>
  )
}
