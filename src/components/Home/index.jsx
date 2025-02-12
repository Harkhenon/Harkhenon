import Header from '@components/Parts/Header';
import Footer from '@components/Parts/Footer';

import './scss/Home.scss';
import WhoAmI from '@components/WhoAmI';
import Projects from '@components/Projects';
import Contact from '@components/Contact';


export default function Home()  {

    return (
      <>
        <Header />
          <main>
            <section id="content-left">
              <div id="header-portrait">
                <div id="portrait-frame-1"></div>
                <div id="portrait-frame-2"></div>
                <div id="portrait-frame-3"></div>
                <div id="portrait-frame-4">
                  <p id="identity">Thomas &quot;Harkhenon&quot; BALANS</p>
                </div>
              </div>
            </section>
            <section id="content-right">
              <div id="home">
                <p className="section-title">Introduction</p>
                <p id="hello-world-text">
                  Développeur autodidacte passionné par la création d&apos;outils.
                  Je créé des applications web et mobiles pour répondre à des besoins
                  personnels ou professionnels et je partage mes projets sur ce site
                  afin d&apos;en faire profiter au plus grand nombre.
                </p>
                {/* Hire me button here*/}
              </div>
              <WhoAmI />
              <Projects />
              <Contact />
            </section>
          </main>
        <Footer />
      </>
    )
}
