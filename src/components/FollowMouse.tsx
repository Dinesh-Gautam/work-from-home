"use client";
import React, { useEffect, useRef, useState } from 'react'

function FollowMouse() {
    const divRef   = useRef<HTMLDivElement | null>(null);
    const mousePosition = { x : 0 ,  y : 0, scale : 0,}
    const intervaleRef = useRef<number | null>(null);

    const  updateElementPosition: TimerHandler = () =>  {
        const div = divRef.current;
        if(div === null) return;
        div.style.opacity = "1";
        div.style.transform = `translate(${mousePosition.x}px, ${mousePosition.y}px) scale(${mousePosition.scale})`;
      }


    useEffect(() => {
      const handleMouseMove = (event : MouseEvent) => {
        const { clientX, clientY } = event;
        const div = divRef.current;
  
        // Calculate the position of the cursor relative to the div
        if(div !== null) {
          const mouseX = clientX -(div.offsetHeight / 2); 
          const mouseY = clientY - (div.offsetHeight / 2)
    
          mousePosition.x = mouseX;
          mousePosition.y = mouseY;
          const path  = event.composedPath() ;
          if( divRef.current  ) {
            if(path.some((target) => target !== null && ((target as HTMLAnchorElement).tagName === "A" || (target as HTMLHeadingElement).tagName === "H1"))) {
              mousePosition.scale = 2;
            }else {
              mousePosition.scale = 1;
            }
          
          }
          
          
          if(intervaleRef.current === null ) intervaleRef.current = window.setInterval(updateElementPosition , 50);
        }
      };
  
  
    

      document.addEventListener('mousemove', handleMouseMove);
      
      return () => {
          document.removeEventListener('mousemove', handleMouseMove);
          console.log("clearing interval")
          if(intervaleRef.current !== null) {
              window.clearInterval(intervaleRef.current);
          }
      };
    }, []);
  
    return <div ref={divRef} className="follow-mouse"></div>;
  }

export default FollowMouse