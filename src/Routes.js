import MainPage from './Pages/Main/Main';
import StoryPage from './Pages/Story/Story';

const routes = {
    main: { path: '/main', component: MainPage },
    story: { path: '/main/:title', component: StoryPage },
};

export { routes };
