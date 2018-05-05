import React from 'react';
import urls from '../urls'

function RightPanel (){
  console.log(urls);
  return (
    <section className="leftImage">
      <div className="mySlides">{
        // eslint-disable-next-line
      }  <a href={urls[0]} data-pin-do="embedPin" data-pin-width="large" data-pin-terse="true" ></a>
      </div>

    </section>
  )
}

export default RightPanel
