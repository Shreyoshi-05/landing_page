import Blog from "./component/pages/Blog";
import Client from "./component/pages/Client";
import Hero from "./component/pages/Hero";
import Lfooter from "./component/pages/Lfooter";
import Nav from "./component/pages/Nav";
import Sfooter from "./component/pages/Sfooter";
import Testimonial from "./component/pages/Testimonial";
import Ffooter from './component/pages/Ffooter'

const App = () => {
  return (
    <>
      <Nav />
      <Hero />
      <Client />
      <Ffooter />
      <Testimonial />
      <Sfooter />
      <Blog />
      <Lfooter />
    </>
  );
};

export default App;
