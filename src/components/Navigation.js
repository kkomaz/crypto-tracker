import React from 'react';
import { NavLink } from 'react-router-dom';

// https://www.youtube.com/watch?v=JPlVb3t6kx8

const Navigation = () => {
  return (
    <nav className="w-[40%] mt-16 flex justify-center align-middle border border-cyan rounded-lg">
      <NavLink
        to="/"
        end
        className={({ isActive }) => {
          return `
          w-full text-base text-center font-nunito m-2.5
          ${
            isActive
              ? 'bg-cyan text-gray-300'
              : 'bg-gray-200 text-gray-100hover:text-cyan active:bg-cyan active:text-gray-300'
          }
          border-0 cursor-pointer rounded capitalize font-semibold`;
        }}
      >
        Crypto
      </NavLink>
      <NavLink
        to="/trending"
        end
        className={({ isActive }) => {
          return `
          w-full text-base text-center font-nunito m-2.5
          ${
            isActive
              ? 'bg-cyan text-gray-300'
              : 'bg-gray-200 text-gray-100hover:text-cyan active:bg-cyan active:text-gray-300'
          }
          border-0 cursor-pointer rounded capitalize font-semibold`;
        }}
      >
        Trending
      </NavLink>
      <NavLink
        to="/saved"
        end
        className={({ isActive }) => {
          return `
          w-full text-base text-center font-nunito m-2.5
          ${
            isActive
              ? 'bg-cyan text-gray-300'
              : 'bg-gray-200 text-gray-100hover:text-cyan active:bg-cyan active:text-gray-300'
          }
          border-0 cursor-pointer rounded capitalize font-semibold`;
        }}
      >
        Saved
      </NavLink>
    </nav>
  );
};

export default Navigation;
