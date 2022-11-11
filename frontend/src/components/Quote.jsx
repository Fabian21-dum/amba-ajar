import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Quote() {
  const [text, setText] = useState('');
  useEffect(() => {
    const data = async () => {
      try {
        const response = await axios.get('https://api.quotable.io/random?minLength=100&maxLength=140');
        setText(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    data();
  }, []);

  return (
    <>
      <div className='flex h-full flex-col justify-around'>
        <p className='m-1 text-lg font-bold'>MOTIVASI HARI INI</p>
        <blockquote className='m-1 font-thin italic'>&quot;{text.content}&quot;</blockquote>
        <p>- {text.author}</p>
      </div>
    </>
  );
}
