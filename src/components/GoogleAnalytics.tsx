"use client"

import Script from 'next/script';
import React from 'react'

function GoogleAnalytics() {
    
  return <>
  
  <Script src="https://www.googletagmanager.com/gtag/js?id=G-KYPH8ETBD3"  />
    <Script id="google-analytics">
        {` 
        window.dataLayer = window.dataLayer || [];
        function gtag() {
          dataLayer.push(arguments);
        }
         gtag("js", new Date());

         gtag("config", "G-KYPH8ETBD3")`}
    </Script>
  </>
}

export default GoogleAnalytics