import React from 'react';

const Breadcrumb = () => {
  return (
    <div className="text-xs sm:text-sm  font-medium">
      Home /{' '}
      <span className="text-gray-800 dark:text-blue-400 font-semibold">
        Dashboard
      </span>
    </div>
  );
};

export default Breadcrumb;
