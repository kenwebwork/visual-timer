import { APP_NAME } from "../utils/constants";
import Title from "../layout/Title";

function AboutPage(){
  return (
    <>
    <Title pageName='About' />
    <h1>About</h1>
    <p>one </p>
    <h2>What's {APP_NAME}?</h2>
    <p><span className="font-bold">{APP_NAME}</span> is here to energize your focus! 🚀</p>
    <p>Our large, easy-to-read timer makes it super clear how much time you’ve spent focusing and how much you have left.</p>
    <p>Whether you're crushing your work tasks or enjoying a well-deserved break, this app has got your back!</p>
    <p>To help you stay sharp, we’ve chosen calming yet powerful <span className="italic">blue</span> as the main color theme.</p>
    <p>We’re rooting for you—let <span className="font-bold">{APP_NAME}</span> boost your productivity and keep you in the zone!</p>
    <h2>How to use?</h2>
    <p>If you're using a PC, mobile phone, or tablet, we recommend opening the timer in a sparate window for better visibility and ease of use.</p>
    <p>But here's a cool bonus: the time count is also displayed on this page's tab! You can quickly check the time without swiching screens.</p>
    <p>Handy. right? 😊</p>
    <h2>Recommends</h2>
    <p>description with images that is smart taste</p>
    <ul>
      <li>2 hours: 4 x 25 min work & 5 min break</li>
      <li>1.5 hours: 45 min work & 10 min break & 45 min work</li>
    </ul>
    </>
  );
};

export default AboutPage;