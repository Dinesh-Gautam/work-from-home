"use client";
import React, { useEffect, useRef, useState } from 'react'

function FollowMouse() {
    const divRef   = useRef(null);
    const mousePosition = { x : 0 ,  y : 0,}
    const intervaleRef = useRef(null);
    useEffect(() => {
      const handleMouseMove = (event : MouseEvent) => {
        const { clientX, clientY } = event;
        const div = divRef.current;
  
        // Calculate the position of the cursor relative to the div
        if(div !== null) {
  
          const rect = div.getBoundingClientRect();
          const mouseX = clientX -(rect.width / 2); 
          const mouseY = clientY - (rect.height / 2)
    
          mousePosition.x = mouseX;
          mousePosition.y = mouseY;
          
          if(intervaleRef.current === null ) intervaleRef.current = setInterval(updateElementPosition , 50);
        }
      };
  
      function updateElementPosition() {
        const div = divRef.current;
        div.style.opacity = 1;
        div.style.transform = `translate(${mousePosition.x}px, ${mousePosition.y}px)`;
      }

    

      document.addEventListener('mousemove', handleMouseMove);
      
      return () => {
          document.removeEventListener('mousemove', handleMouseMove);
          console.log("clearing interval")
        clearInterval(intervaleRef.current);
      };
    }, []);
  
    return <div ref={divRef} className="follow-mouse"></div>;
  }

export default FollowMouse