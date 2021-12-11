import React from 'react';

import php from 'src/styles/images/php.png';
import htmlcssjavasript from 'src/styles/images/html-css-javascript.png';
import linux from 'src/styles/images/linux.png';
import python from 'src/styles/images/python.png';
import react from 'src/styles/images/react.png';

const WhoAmI = () => {
  return (
    <section id="whoami">
      <p className="section-title">
        Who am I?
      </p>
      <div id="whoami-text">
        <p>I'm a passionnate developer who wants to create many useful tools.</p>
        <p>
          My name is Thomas BALANS and I'm born in 1990,
          June the 13st and I am proud to present you my projects!
        </p>
        <p>
          Here are my skills:
        </p>
        <img src={php} alt="php" title='Php' />
        <img
          src={htmlcssjavasript}
          alt="html-css-javascript"
          title='HTML5 CSS3 Javascript'
        />
        <img
          src={linux}
          alt="ubuntu"
          title="Ubuntu, Centos, Debian, Raspi, Shell"
        />
        <img src={python} alt="python" title="Python" />
        <img src={react} alr="react" title="React"/>
      </div>
    </section>
  )
}

export default WhoAmI;
