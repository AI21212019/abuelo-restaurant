import React, { useEffect, useState } from 'react';
import AboutItem from './AboutItem';
// import axios from 'axios';

const AboutUs = () => {
  const [aboutData, setAboutData] = useState([]);

  //fetching about us data
  useEffect(() => {
    fetch('/aboutus.json')
      .then(res => res.json())
      .then(data => setAboutData(data));
  }, []);
  //   useEffect(() => {
  //     (async () => {
  //       const data = await fetch('/aboutus.json');
  //       setAboutData(data);
  //     })();
  //   }, []);

  return (
    <div className="w-screen mx-auto my-12 px-6">
      <h1 className="text-4xl poppins pb-4">Why you choose us</h1>
      <p className="text-gray-500 text-sm poppins w-2/4">
        We satisfied your appetite.
      </p>

      {/* about us cards  */}
      <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8">
        {aboutData.map(item => (
          <AboutItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
