import React from 'react';
import Atropos from 'atropos/react';
import './index.css'
import 'atropos/css'
import img1 from './assets/atropos-bg.svg'
import img2 from './assets/atropos-mountains.svg'
import img3 from './assets/atropos-forest-back.svg'
import img4 from './assets/atropos-forest-mid.svg'
import img5 from './assets/atropos-forest-front.svg'
import img6 from './assets/atropos-logo-en.svg'


const App = () => {
  return (
    <div className="container">
      <Atropos className="atropos-banner" highlight={false} onEnter={() => console.log('enter')}>
        <img className="atropos-banner-spacer" src={img1} alt="" />
        <img data-atropos-offset="-4.5" src={img1} alt="" />
        <img data-atropos-offset="-2.5" src={img2} alt="" />
        <img data-atropos-offset="0" src={img3} alt="" />
        <img data-atropos-offset="2" src={img4} alt="" />
        <img data-atropos-offset="4" src={img5} alt="" />
        <img data-atropos-offset="5" src={img6} alt="" />
      </Atropos>
    </div>
  );
};

export default App;