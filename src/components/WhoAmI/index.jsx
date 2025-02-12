import php from '@assets/images/php.png';
import htmlcssjavasript from '@assets/images/html-css-javascript.png';
import linux from '@assets/images/linux.png';
import python from '@assets/images/python.png';
import react from '@assets/images/react.png';

const WhoAmI = () => {
  return (
    <section id="whoami">
      <p className="section-title">
        Who am I?
      </p>
      <div id="whoami-text">
        <p>Développeur et Gamer à mes heures perdues, j&apos;adore créer des outils simples mais puissants.</p>
        <p>
          Passionné par l&apos;informatique et les nouvelles technologies, la programmation a commencé en 2008 et depuis, elle ne s&apos;est jamais arrêtée. De nombreux projets personnels et professionnels ont été réalisés.
        </p>
        <p>
          Préférence pour les langages de programmation orientés web et les systèmes Linux.
          <br /><br />
          Je m&apos;intéresse aussi à l&apos;IoT et à la robotique/domotique simple.
          <br /><br />
          En ce qui concerne les systèmes Linux, mon orientation va sur les serveurs web (Apache, Bind9, PHP-FPM, MySQL, etc.) et leur automatisation.
        </p>
        <p>
          Voici mes modestes compétences :
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
        <img src={react} alt="react" title="React"/>
      </div>
    </section>
  )
}

export default WhoAmI;
