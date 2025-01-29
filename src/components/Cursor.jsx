// import { useEffect, useState } from 'react';

// const Cursor = () => {
//   const [mousePositions, setMousePositions] = useState([]);
//   const [isMoving, setIsMoving] = useState(false);

//   useEffect(() => {
//     const updateMousePosition = (e) => {
//       setMousePositions((prevPositions) => [
//         { x: e.clientX, y: e.clientY },
//         ...prevPositions.slice(0, 10), // Keep only the last 10 positions
//       ]);
//     };

//     const handleMouseMove = (e) => {
//       setIsMoving(true);
//       requestAnimationFrame(() => {
//         updateMousePosition(e);
//         setIsMoving(false);
//       });
//     };

//     window.addEventListener('mousemove', handleMouseMove);

//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, []);

//   const cursorStyles = {
//     position: 'fixed',
//     width: '16px',
//     height: '16px',
//     borderRadius: '50%',
//     backgroundColor: 'rgba(25, 25, 25, 0.5)',
//     pointerEvents: 'none',
//     zIndex: 9999,
//   };

//   const duplicateCursorStyles = {
//     ...cursorStyles,
//     transform: `scale(${isMoving ? 2.0 : 1})`,
//     transition: 'transform 0.05s ease',
//     animation: `${isMoving ? 'pulse 0.5s infinite' : ''}`,
//   };

//   return (
//     <>
//       {mousePositions.map((position, index) => (
//         <div
//           className='cursor'
//           key={index}
//           style={{
//             ...duplicateCursorStyles,
//             transform: `translate(${position.x - 16}px, ${position.y - 16}px) scale(${1 + 0.02 * (mousePositions.length - index)
//               })`,
//             opacity: 1 - 0.1 * (mousePositions.length - index),
//           }}
//         />
//       ))}
//     </>
//   );
// };

// export default Cursor;


// import { useEffect, useState } from 'react';

// const Cursor = () => {
//   const [mousePositions, setMousePositions] = useState([]);
//   const [isMoving, setIsMoving] = useState(false);

//   useEffect(() => {
//     const updateMousePosition = (e) => {
//       setMousePositions((prevPositions) => [
//         { x: e.clientX, y: e.clientY },
//         ...prevPositions.slice(0, 10), // Keep only the last 10 positions
//       ]);
//     };

//     const handleMouseMove = (e) => {
//       setIsMoving(true);
//       requestAnimationFrame(() => {
//         updateMousePosition(e);
//         setIsMoving(false);
//       });
//     };

//     window.addEventListener('mousemove', handleMouseMove);

//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, []);

//   const cursorStyles = {
//     position: 'fixed',
//     width: 'auto',
//     height: 'auto',
//     fontSize: '24px',
//     fontFamily: 'Arial',
//     pointerEvents: 'none',
//     zIndex: 9999,
//   };

//   const duplicateCursorStyles = {
//     ...cursorStyles,
//     transform: `scale(${isMoving ? 2.0 : 1})`,
//     transition: 'transform 0.05s ease',
//     animation: `${isMoving ? 'pulse 0.5s infinite' : ''}`,
//   };

//   return (
//     <>
//       {mousePositions.map((position, index) => (
//         <div
//           className='cursor'
//           key={index}
//           style={{
//             ...duplicateCursorStyles,
//             left: position.x + 'px',
//             top: position.y + 'px',
//             color: `hsl(${(position.x + position.y) % 360}, 100%, 50%)`, // Random color based on position
//             animationDelay: `${index * 0.05}s`, // Delay each cursor for a staggered effect
//           }}
//         >
//           $
//         </div>
//       ))}
//     </>
//   );
// };

// export default Cursor;

// import React, { useEffect, useState } from 'react';

// const DropletCursor = () => {
//   const [droplets, setDroplets] = useState([]);
//   const [isMoving, setIsMoving] = useState(false);

//   useEffect(() => {
//     const createDroplet = (x, y) => {
//       return {
//         id: Date.now(),
//         x,
//         y,
//       };
//     };

//     const updateDroplets = (e) => {
//       const newDroplets = [...droplets, createDroplet(e.clientX, e.clientY)];
//       if (newDroplets.length > 10) {
//         newDroplets.shift();
//       }
//       setDroplets(newDroplets);
//     };

//     const handleMouseMove = (e) => {
//       setIsMoving(true);
//       requestAnimationFrame(() => {
//         updateDroplets(e);
//         setIsMoving(false);
//       });
//     };

//     window.addEventListener('mousemove', handleMouseMove);

//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, [droplets]);

//   const dropletStyles = {
//     position: 'fixed',
//     width: '20px',
//     height: '20px',
//     backgroundColor: 'rgba(0, 0, 255, 0.5)', // Blue droplet color
//     borderRadius: '50%',
//     pointerEvents: 'none',
//     zIndex: 9999,
//   };

//   const duplicateDropletStyles = {
//     ...dropletStyles,
//     transform: `scale(${isMoving ? 2.0 : 1})`,
//     transition: 'transform 0.2s ease',
//   };

//   return (
//     <>
//       {droplets.map((droplet) => (
//         <div
//           key={droplet.id}
//           style={{
//             ...duplicateDropletStyles,
//             left: droplet.x + 'px',
//             top: droplet.y + 'px',
//           }}
//         />
//       ))}
//     </>
//   );
// };

// export default DropletCursor;

// import React, { useEffect, useState } from 'react';

// const AnimatedCursor = () => {
//   const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
//   const [isMoving, setIsMoving] = useState(false);

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setCursorPosition({ x: e.clientX, y: e.clientY });
//       setIsMoving(true);

//       // Reset the moving state after a short delay (e.g., 500ms)
//       const timeout = setTimeout(() => {
//         setIsMoving(false);
//       }, 500);

//       return () => clearTimeout(timeout);
//     };

//     window.addEventListener('mousemove', handleMouseMove);

//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, []);

//   const cursorStyles = {
//     position: 'fixed',
//     left: cursorPosition.x + 'px',
//     top: cursorPosition.y + 'px',
//     zIndex: 9999,
//     transition: 'transform 0.3s ease',
//     transform: `scale(${isMoving ? 2 : 1})`, // Scale the cursor when moving
//   };

//   return (
//     <div className="custom-cursor" style={cursorStyles}>
//       {/* You can replace this with your custom cursor content */}
//       <div
//         style={{
//           width: '20px',
//           height: '20px',
//           backgroundColor: '#FF5733', // Cursor color
//           borderRadius: '50%',
//         }}
//       />
//     </div>
//   );
// };

// export default AnimatedCursor;

import React, { useEffect, useState } from 'react';

const AnimatedCursor = () => {
  const [cursorPositions, setCursorPositions] = useState([]);
  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    const createCursor = (x, y) => {
      return {
        id: Date.now(),
        x,
        y,
        color: `hsl(${(x + y) % 360}, 100%, 50%)`, // Random color based on position
      };
    };

    const updateCursorPositions = (e) => {
      const newCursors = [...cursorPositions, createCursor(e.clientX, e.clientY)];
      if (newCursors.length > 10) {
        newCursors.shift();
      }
      setCursorPositions(newCursors);
    };

    const handleMouseMove = (e) => {
      setIsMoving(true);
      requestAnimationFrame(() => {
        updateCursorPositions(e);
        setIsMoving(false);
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [cursorPositions]);

  const cursorStyles = {
    position: 'fixed',
    zIndex: 9999,
  };

  const duplicateCursorStyles = {
    width: '20px',
    height: '20px',
    backgroundColor: 'transparent',
    borderRadius: '50%',
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    transition: 'transform 0.3s ease',
    animation: `${isMoving ? 'pulse 0.5s infinite' : ''}`,
  };

  return (
    <>
      {cursorPositions.map((cursor) => (
        <div
          key={cursor.id}
          className="custom-cursor"
          style={{
            ...cursorStyles,
            left: cursor.x + 'px',
            top: cursor.y + 'px',
          }}
        >
          <div
            style={{
              ...duplicateCursorStyles,
              backgroundColor: cursor.color,
              transform: `scale(${isMoving ? 2 : 1})`,
            }}
          />
        </div>
      ))}
    </>
  );
};

export default AnimatedCursor;

// import React, { useEffect, useState } from 'react';

// const AnimatedCursors = () => {
//   const [cursors, setCursors] = useState([]);
//   const [isMoving, setIsMoving] = useState(false);

//   useEffect(() => {
//     const createCursor = (x, y) => {
//       return {
//         id: Date.now(),
//         x,
//         y,
//         color: `hsl(${(x + y) % 360}, 100%, 50%)`, // Random color based on position
//         shape: Math.random() > 0.5 ? 'circle' : 'square', // Random shape
//       };
//     };

//     const updateCursors = (e) => {
//       const newCursors = [...cursors, createCursor(e.clientX, e.clientY)];
//       if (newCursors.length > 10) {
//         newCursors.shift();
//       }
//       setCursors(newCursors);
//     };

//     const handleMouseMove = (e) => {
//       setIsMoving(true);
//       requestAnimationFrame(() => {
//         updateCursors(e);
//         setIsMoving(false);
//       });
//     };

//     window.addEventListener('mousemove', handleMouseMove);

//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, [cursors]);

//   const cursorStyles = {
//     position: 'fixed',
//     zIndex: 9999,
//   };

//   const duplicateCursorStyles = {
//     width: '20px',
//     height: '20px',
//     position: 'absolute',
//     transform: 'translate(-50%, -50%)',
//     transition: 'transform 0.3s ease',
//     animation: `${isMoving ? 'pulse 0.5s infinite' : ''}`,
//   };

//   return (
//     <>
//       {cursors.map((cursor) => (
//         <div
//           key={cursor.id}
//           className="custom-cursor"
//           style={{
//             ...cursorStyles,
//             left: cursor.x + 'px',
//             top: cursor.y + 'px',
//           }}
//         >
//           <div
//             style={{
//               ...duplicateCursorStyles,
//               backgroundColor: cursor.color,
//               borderRadius: cursor.shape === 'circle' ? '50%' : '0', // Apply shape style
//               transform: `scale(${isMoving ? 2 : 1})`,
//             }}
//           />
//         </div>
//       ))}
//     </>
//   );
// };

// export default AnimatedCursors;
