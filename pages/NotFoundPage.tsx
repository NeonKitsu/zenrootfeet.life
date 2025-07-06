import React from 'react';
import { Link } from 'react-router-dom';
import Meta from '../components/seo/Meta';

const NotFoundPage: React.FC = () => {
  return (
    <>
    <Meta title="404: Page Not Found | ZenRootFeet.life" description="Oops! It looks like you've wandered off the path. The page you're looking for doesn't exist. Let's get you back home." />
    <div className="flex flex-col items-center justify-center text-center py-20 px-4">
      <h1 className="text-8xl font-bold text-amber-800">404</h1>
      <h2 className="text-3xl font-semibold text-stone-800 mt-4">Oops! Page Not Found.</h2>
      <p className="text-stone-600 mt-2 max-w-sm">
        Looks like you've wandered off the path. The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="mt-8 px-8 py-3 bg-amber-800 text-white font-semibold rounded-lg shadow-md hover:bg-amber-700 transition-colors"
      >
        Go Back Home
      </Link>
    </div>
    </>
  );
};

export default NotFoundPage;