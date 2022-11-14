import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

export default function Quote() {
  const [text, setText] = useState('');
  useEffect(() => {
    const quote = Cookies.get('quote');
    if (!quote) {
      const data = async () => {
        try {
          const response = await axios.get('https://api.quotable.io/random?minLength=100&maxLength=140');
          setText(response.data);
          const quote = { author: response.data.author, content: response.data.content };
          Cookies.set('quote', JSON.stringify(quote), { expires: 1 });
        } catch (error) {
          console.log(error);
        }
      };
      data();
    } else {
      setText(JSON.parse(quote));
    }
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
