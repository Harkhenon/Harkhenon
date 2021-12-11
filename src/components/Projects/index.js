import React from 'react'
import { Progress } from 'semantic-ui-react';

const Projects = () => {
  return (
    <section id="projects">
      <p className='section-title'>Projects</p>
      <div id="projects-container">
        <h2>Homeserver</h2>
        <p>
          Homeserver is a server tool for manage your installation.
          It can configure and monitor many applications like Apache, Bind, Postfix,
          NodeJs and many tools you need to build your own webserver.
          It can monitor and display server informations like RAM, Processor load,
          or number of processes.
          Back system is in PHP, daemon is in Python, panel is on React.
        </p>
        <p>
          <em>
            Currently in development
            <Progress percent={40} inverted size='small' color='orange' active/>
          </em>
        </p>
        <a href="https://github.com/harkhenon/homeserver" target="_blank">
          Github repository
        </a>

        <h2>Homepanel</h2>
        <p>
          Homepanel is a tool binded to Homeserver for managing website hosting.
          It is litterally a webpanel it can create/delete php/static HTML/NodeJS
          webhost. It can also manage E-mail accounts and domain names and their zones.
        </p>
        <p>
          <em>
            Currently in development
            <Progress percent={10} inverted size="small" color='orange' active/>
          </em>
        </p>
        <a href="https://github.com/harkhenon/homeserver-homepanel" target="_blank">
          Github repository
        </a>

        <h2>HomeBank</h2>
        <p>
          Homebank is a comptablity tool for home.
          Want to calculate your bank accounts, per types, per month/year and
          manage account mooves? It can do it easily!
        </p>
        <p>
          <em>
            Currently in development
            <Progress percent={80} inverted size="small" color='orange' active/>
          </em>
        </p>
        <a href="https://github.com/harkhenon/homeserver-homebank" target="_blank">
            Github repository
        </a>

        <h2>HomeShop</h2>
        <p>
          HomeShop is a simple tool for doing your market list easily and access
          it from your phone. List item check/delete/create/update is real time
          updated on both phone and server, so if your life companion is home,
          he/she will be able to update list or see phone updates fom shop.
        </p>
        <p>
          <em>
            Currently in development
            <Progress percent={10} inverted size="small" color='orange' active/>
          </em>
        </p>
        <a href="https://github.com/harkhenon/homeserver-homeshop" target="_blank">
            Github repository
        </a>

        <h2>QuizzTG</h2>
        <p>
          QuizzTG is a quizz-like game for help postmens/postwomens to easily learn
          their "General Sort" (General sort is the ability to know links between
          street names and postman tour number).
        </p>
        <p>
          <em>
            Currently in development
            <Progress percent={95} inverted size="small" color='orange' active/>
          </em>
        </p>
        <a href="https://github.com/harkhenon/quizzTG" target="_blank">
            Github repository
        </a>
      </div>
    </section>
  )
}

export default Projects;
