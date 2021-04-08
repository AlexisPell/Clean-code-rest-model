<h3 align="center">Middle sized fullstack common online-shop. Project is about code splitting and architecture patterns</h3>

---

<p align="center"> This is more about structures and code separing, than MobX-express, because of splitting the code to it's logical part-chunks. Each idea of each exact code tissue is separed from outside and has it's own defined work-flow
    <br> 
</p>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Deployment](#deployment)
- [Usage](#usage)
- [Built Using](#built_using)
- [Authors](#authors)
- [Acknowledgments](#acknowledgement)

## 🧐 About <a name = "about"></a>

Backend:
middlewares -> routes -> controllers -> use cases -> entities/db
code separed by higher level index file and organized in abstract factory method

Frontend:
Separed in few independent layers, that trying not to relay on frameworks and keeping it clear. 1. 'Next page'. Is in response for SSR/Dynamic fetching and defining document params. Gives away data to Custom Page Container receive получить 2. 'Custom page container'. Receives data from 'Next page', combines Components, customizing document, shares SSR data (if it exists) to components 3. Component layer. Receives SSR data from 'Custom page container'. Includes in itself a few entities: 'container', 'render-logic', 'business logic comunication/ use cases'
Component is separed to handle splitting up ui-render, frontend-logic and business-logic in different workflows 4. Mobx Store. Separed layer to handle local and business logic on Component layer, by passing it from outside, throw props. It either looks forward to make containers are more flexible and independent.

## 🏁 Getting Started <a name = "getting_started"></a>

yarn

yarn dev

## 🎈 Usage <a name="usage"></a>

Self-examination about Javascript world and web-development patterns

## 🚀 Deployment <a name = "deployment"></a>

For later

## ⛏️ Built Using <a name = "built_using"></a>

- [PostgreSQL] - Database
- [Sequelize] - ORM Model
- [Express] - Server Framework
- [React] - Web Framework
- [MobX] - Web State Manager
- [NextJs] - SEO optimization Framework
- [NodeJs] - Server Environment

## ✍️ Authors <a name = "authors"></a>

- [@AlexisPell]() - Idea & Initial work

## 🎉 Acknowledgements <a name = "acknowledgement"></a>

with love to Bob Martin
