import React from 'react'
import Title from '../layout/Title'
import image_KSpace from '../assets/images/KAndSpace.webp'
import image_JLArrow from '../assets/images/JLArrow.webp'
import image_separate from '../assets/images/howToUse.webp'

const HowToUsePage: React.FC = () => {
  return (
    <>
      <Title pageName='How to use' />
      <h1>How to use</h1>
      <h2>Tips</h2>
      <p>If you're using a PC or tablet, we recommend opening the timer in a sparate window for better visibility and ease of use.</p>
      <img src={image_separate} alt="" />
      <p>But here's a cool bonus: the time count is also displayed on this page's tab! You can quickly check the time without swiching screens.</p>
      <p>Handy. right? 😊</p>
      <h2>Shortcuts</h2>
      <h3>K or Space : start / pause</h3>
      <p>Starts or pauses the timer. Use this to quickly begin or take a break from your session.</p>
      <h3>M : focus the time menu</h3>
      <p>Focuses the time selection menu. Press again to remove the focus. Useful for changing the time using the keyboard.</p>
      <img src={image_KSpace} alt="keyboard" />
      <h3>R : reset time</h3>
      <p>Resets the timer to the originally selected time. Handy when you want to restart your session from the beginning.</p>
      <h3>L, J, ◀, ▶ : rewind and forward</h3>
      <p>Moves the timer forward or back by 5 or 10 seconds. </p>
      <ul>
        <li>▶ : to move forward 5 seconds</li>
        <li>◀ : to move back 5 seconds</li>
        <li>L : to move forward 10 seconds</li>
        <li>J : to move back 10 seconds</li>
      </ul>
      <img src={image_JLArrow} alt="keyboard" />
    </>
  )
}

export default HowToUsePage