import Typed from 'typed.js';
import React from'react';

function App() {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['<i>Portfolio</i> website.',],
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <>
    <h1 className='text-7xl font-extrabold '>This is my <span ref={el} /></h1>


    </>
  );
}

export default App;
