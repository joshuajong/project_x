import React from 'react';
import Category from '../components/Category';
import { FaPlane, FaPhone } from 'react-icons/fa';

function Blog() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-white text-slate-900 p-4">
      <div className="mb-16">
        <h1 className="text-2xl md:text-3xl lg:text-6xl">blog</h1>
      </div>
      <div className="flex space-x-12 md:space-x-16 lg:space-x-24">
        <Category icon={FaPlane} categoryName="travel" to="/travel" />
        <Category icon={FaPhone} categoryName="tech" to="/tech" />
        <Category icon={FaPlane} categoryName="thoughts" to="/thoughts" />
      </div>
    </div>
  );
}

export default Blog;