import React from 'react'
import Title from '../layout/Title'
import { APP_NAME } from '../utils/constants'
import image from '../assets/images/howToUse.webp'
import { Link } from 'react-router-dom'

const AboutPage: React.FC = () => {
  return (
    <>
      <Title pageName='About' />
      <h1>About</h1>
      <h2>What's {APP_NAME}?</h2>
      <p><span className='font-bold'>{APP_NAME}</span> is here to energize your focus! 🚀</p>
      <p>Our large, easy-to-read timer makes it super clear how much time you’ve spent focusing and how much you have left.</p>
      <p>Whether you're crushing your work tasks or enjoying a well-deserved break, this app has got your back!</p>
      <p>We’re rooting for you—let <span className='font-bold'>{APP_NAME}</span> boost your productivity and keep you in the zone!</p>
      <h2>How to use?</h2>
      <p>If you're using a PC, mobile phone, or tablet, we recommend opening the timer in a sparate window for better visibility and ease of use.</p>
      <img src={image} alt="how to use" />
      <p>But here's a cool bonus: the time count is also displayed on this page's tab! You can quickly check the time without swiching screens.</p>
      <p>Handy. right? 😊</p>
      <p>If you want to know shortcuts, access <Link to='/howtouse'>How to use page</Link>.</p>
      <h2>Take a Break</h2>
      <p>When the timer hits 00:00, it's your cue to take a well-deserved break! Recharge your energy before diving into your next task.</p>
      <p>This approach is inspired by the famous <span className='font-bold'>Pomodoro Technique</span>! It's all about repeating simple cycles, like 30 minutes: 25 minutes of forcused work followed by a 5-minute break.</p>
      <p>But, we've got more options for you. Check out these flexible schedules:</p>
      <ul>
        <li><span className='font-bold'>15 minutes</span> → 10 minutes work + 5 minutes break</li>
        <li><span className='font-bold'>30 minutes</span> → 25 minutes work + 5 minutes break</li>
        <li><span className='font-bold'>2 hours</span> → 45 minutes work + 10 minutes break + 45 minutes + 30 minutes break</li>
      </ul>
      <p>Pick a schedule and set the timer—no overthinking needed!🔥</p>
      <p>Nobody can stay fully focused for long periods without pratice—it takes time to build that skill.</p>
      <p>Just do your best to focus for as long as you can, and with consistency, you'll eventually discover the perfect rhythm that works for you.</p>
    </>
  )
}

export default AboutPage