// pages/page1.jsx
import React, { useState, useEffect } from 'react';
import { marvelHash, marvelApiKey } from '../utils/md5hash';

function Page2({ comics }) {
    return (
      <div>
        <h1>Marvel Comics</h1>
        <ul>
          {comics.map((comic) => (
            <li key={comic.id}>
              {comic.title} - {comic.description}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export async function getServerSideProps() {
    // Your Marvel API parameters
    const ts = 1;
    const apikey = marvelApiKey;
    const hash = marvelHash; // Typically md5(ts+privateKey+publicKey)
  
    const response = await fetch(
      `http://gateway.marvel.com/v1/public/comics?ts=${ts}&apikey=${apikey}&hash=${hash}`
    );
    const data = await response.json();
    console.log(`data: ${data}`);
    const comics = data.data.results;
  
    return {
      props: {
        comics,
      },
    };
  }

// function Page21() {
//   const [comics, setComics] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Your Marvel API parameters
//     const ts = 1;
//     const apikey = marvelApiKey;
//     const hash = marvelHash; // Typically md5(ts+privateKey+publicKey)

//     fetch(`http://gateway.marvel.com/v1/public/comics?ts=${ts}&apikey=${apikey}&hash=${hash}`)
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(`data: ${data.data.data}`)
//         setComics(data.data.results);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.log(`error ${error}`)
//         console.error("Error fetching the Marvel API:", error);
//         setLoading(false);
//       });

//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h1>Marvel Comics</h1>
//       <ul>
//         {comics.map((comic) => (
//           <li key={comic.id}>
//             {comic.title} - {comic.description}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

export default Page2;
