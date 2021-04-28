export const sectionInfo = [
  {
    title: <> 😋 Что это за продукт?</>,
    text: (
      <>
        <h3 style={{ textAlign: 'center' }}> 🐥 Мотивация</h3>
        <h4>
          Это небольшое приложение - онлайн магазин, основная цель которого - показать текущий
          уровень понимания программирования и владения различными паттернами, структурами данных и
          умение строить масштабируемые приложения.
        </h4>
        <h3 style={{ textAlign: 'center' }}> 🤔 Масштабируемое приложение?</h3>
        <h4>
          {' '}
          Да, основным аспектом при работе с текущим приложением являлось построение такой кодовой
          базы, от которой текущий продукт можно достаточно легко масштабировать, поддерживать и
          развивать с минимальными затратами человекочасов.
        </h4>
      </>
    ),
  },
  {
    title: <> 🤓 Масштабируемость и поддерживаемость кодовой базы</>,
    text: (
      <>
        <h3 style={{ textAlign: 'center' }}> 🧐 А в чем масштабируемость?</h3>
        <h4>
          Основное мое архитектурное решение- строить приложение не на фреймворках, а на разбиении
          процесса на подзадачи - сущности, юзкейсы, роуты, и т.д., с последующей их инкапсуляцией,
          что дает независимость (условно) отрисовки(ui) от бизнес-логики приложения, роутов от их
          настройки, настройки от юзкейсов и т.д.
        </h4>
        <h3 style={{ textAlign: 'center' }}> 🤤 А зачем?</h3>
        <h4>
          Мне нравится не только писать код, но и писать его так, чтобы любой разработчик после меня
          мог легко вникнуть в воркфлоу, организованный мною ранее.
        </h4>
      </>
    ),
  },
  {
    title: <> ⌨️ Технологии и фреймворки</>,
    text: (
      <>
        <h3 style={{ textAlign: 'center' }}> ⚙️ Общие тулзы</h3>
        <h4>
          <strong>Monorepo manager</strong> - <i>Lerna</i>
        </h4>
        <h4>
          <strong>Packaging</strong> - <i>Docker + Docker Compose</i>
        </h4>
        <h3 style={{ textAlign: 'center' }}> 🎨 Фронтенд</h3>
        <h4>
          <strong>UI driver</strong> - <i>Lerna</i>
        </h4>
        <h4>
          <strong>UI components</strong> - <i>Antd</i>
        </h4>
        <h4>
          <strong>UI Animations</strong> - <i>Framer Motion</i>
        </h4>
        <h4>
          <strong>State management</strong> -{' '}
          <i>
            Mobx lite. The chosen approach for this current product was in separing Mobx from API
            requests. Every stick has two ends. And it probably could be better to implement Api
            into Mobx, instead of how it is done here. Handling api with react hooks is quite good
            approach in microfrontend pattern, so i decided to try it up and fully separed local
            store from remote fetching
          </i>
        </h4>
        <h4>
          <strong>SEO optimization</strong> - <i>Next js</i>
        </h4>
        <h3 style={{ textAlign: 'center' }}> 🧰 Бэкенд</h3>
        <h4>
          <strong>Node framework</strong> - <i>Express</i>
        </h4>
        <h4>
          <strong>Database</strong> - <i>PostgreSQL</i>
        </h4>
        <h4>
          <strong>ORM</strong> - <i>Sequelize</i>
        </h4>
        <h4>
          <strong>Authorization</strong> - <i>Bearer tokens + JWT</i>
        </h4>
      </>
    ),
  },
];
