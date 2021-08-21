# Welcome to the Microfrontends Microfrontends PoC 👋
> This is a PoC (Proof of Concept) of how microservices can be done with simple frontends.
<p>
  <img src="https://img.shields.io/badge/yarn-%3E%3D1.17.3-blue.svg" />
  <img src="https://img.shields.io/badge/node-%3E%3D16.6.2-blue.svg" />
  <img src="https://img.shields.io/badge/webpack-%3E%3D5.50.0-blue.svg" />
  <img src="https://img.shields.io/badge/typescript-%3E%3D4.1.2-blue.svg" />
  <img src="https://img.shields.io/badge/react-%3E%3D17.0.2-blue.svg" />
</p>
<p>
  <a href="https://github.com/dtodo1paco/microfrontends#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/dtodo1paco/microfrontends/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/dtodo1paco/microfrontends/container/blob/master/container/LICENSE.md" target="_blank">
    <img alt="License: BSD 2-Clause" src="https://img.shields.io/badge/BSD2-BSD%202--clause-yellowgreen" />
  </a>
  <a href="https://twitter.com/dtodo1paco" target="_blank">
    <img alt="Twitter: dtodo1paco" src="https://img.shields.io/twitter/follow/dtodo1paco.svg?style=social" />
  </a>
  <a href="https://github.com/dtodo1paco" target="_blank">
    <img alt="Github: dtodo1paco" src="https://img.shields.io/github/followers/dtodo1paco?style=social" />
  </a>
</p>
<!-- TABLE OF CONTENTS -->
<details open="close">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#run">Run</a></li>
      </ul>
    </li>
    <li><a href="#comments">Some comments</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project
I've been reading about microfrontends for a while and I though it was time to give it a chance. 

Microfrontends is (in summary) applying the same principle applied for [microservices](https://microservices.io/), but in the front (UI). More info [here](https://single-spa.js.org/docs/microfrontends-concept/)

<img align="center" src="https://github.com/dtodo1paco/microfrontends/raw/main/screenshots/microfrontends.png">

## TL;TR; 
The idea is to build a frontend using components located in another frontend (without sharing any `node_module`). If it sounds interesting to you, keep reading.


### Built With
<p>
  <img src="https://img.shields.io/badge/yarn-%3E%3D1.17.3-blue.svg" /> to manage packages
</p><p>
  <img src="https://img.shields.io/badge/node-%3E%3D16.6.2-blue.svg" /> to run everything
</p><p>
  <img src="https://img.shields.io/badge/webpack-%3E%3D5.50.0-blue.svg" /> to link modules
</p><p>
  <img src="https://img.shields.io/badge/typescript-%3E%3D4.1.2-blue.svg" /> to type javascript and make better code (hopefully)
</p><p>
  <img src="https://img.shields.io/badge/react-%3E%3D17.0.2-blue.svg" /> as the UI library
</p>

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

You need to have a node engine installed in your system (see [how to install](https://nodejs.org/en/download/))


### Installation
This repository holds 3 independent projects, so in order to run them properly, you'll need 3 terminals in your localhost.

1. Clone the repo
  ```sh
  git clone https://github.com/dtodo1paco/microfrontends.git
  ```
2. Change to the new created directory
  ```
  cd microfrontends
  ```
3. Install & run provider projects (app-1 and app-2). **Each in one independent terminal.**
   
   3.1. Open a new terminal and run app-1 [here is how to](https://github.com/dtodo1paco/microfrontends/blob/main/app-1/README.md)
      ```
   $ serve -n dist -p 3001

   ┌───────────────────────────────────┐
   │                                   │
   │   Serving!                        │
   │                                   │
   │   Local:  http://localhost:3001   │
   │                                   │
   └───────────────────────────────────┘
   ```
   
   3.2. Open a new terminal and run app-2 [here is how to](https://github.com/dtodo1paco/microfrontends/blob/main/app-2/README.md)
   ```
   $ serve -n dist -p 3002

   ┌───────────────────────────────────┐
   │                                   │
   │   Serving!                        │
   │                                   │
   │   Local:  http://localhost:3002   │
   │                                   │
   └───────────────────────────────────┘
   ```

4. Now, you're ready to run the container. See [here](https://github.com/dtodo1paco/microfrontends/blob/main/container/README.md) how to do it.

<!-- extra comments -->
## Comments
Some interesting comments I've found during the development:
- Webpack is powerful
Since version 5.0 they have released some interesting plugins that makes our life much easier. Take a look at `webpack.config.js` of each project to learn how it works.
- Use environment
Almost all the tutorials and code examples I've found regarding microservices are managing production and development environments with different files (`webpack.config.prod.js`and `webpack.config.dev.js`, same for `index.html` and so on). I wanted to manage all in a single file using environment variables. It took me a bit more, but now it is really easy to manage.
- Encapsulation and decoupling
What I like the most about the idea of microservices is that you can keep your components independant but, at the same time, all your clients (modules using your components) will be updated simultaneously. This feature can have a huge impact in development speed, code quality and UI consistency.
- Separation of responsibilities: 
The idea behind this project is to keep things separated:
  - `container` is the responsible of using the shared components. That means that you can compose the UI you want based on your own library of components.
  - `app-1` exposes a simple component, but it's easy to imagine some libraries of generic components like `Buttons`, `Dialogs` and so on... the posibilities are infinite ! 
  - `app-2` uses its exposed component in a different way that the container (or any other consumer) may do. That means that we can have configurable components that can be adapted to the consumer. Again, a huge amount of possibilities.

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


<!-- LICENSE -->
## License

See `LICENSE` for more information.

<!-- CONTACT -->
## Contact

👤 **Paco Alías**

* Website: https://dtodo1paco.github.io/
* Twitter: [@dtodo1paco](https://twitter.com/dtodo1paco)
* Github: [@dtodo1paco](https://github.com/dtodo1paco)
* LinkedIn: [@dtodo1paco](https://linkedin.com/in/dtodo1paco)
