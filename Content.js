import React from 'react'

const Content = () => {
  return (
  <>
<div className='side-parent-container'>
  <div className='side-container'>
  <img src="https://img.icons8.com/ios-glyphs/30/null/user--v1.png" className='user_logo'/>
  <h2>Farzan Mirza</h2>
  <img src="https://img.icons8.com/material-sharp/24/null/alarm.png" className='notification_logo'/>
  <h2 style={{color: "#2196F3"}}>Notifications</h2>
  <img src="https://img.icons8.com/tiny-color/16/null/home.png"className='notify1'/><h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</h6>
  <img src="https://img.icons8.com/external-others-ghozy-muhtarom/32/null/external-thought-design-thinking-solid-line-others-ghozy-muhtarom.png" className='notify2'/><h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h6>
  <img src="https://img.icons8.com/material-outlined/24/null/gear--v1.png" className='notify3'/><h6>Lorem Ipsum is simply dummy text of the printing .</h6>
  <p style={{float:"right", marginRight: "10px"}}>See all</p>
  <ul>
  <li><img src="https://img.icons8.com/material-two-tone/24/null/home-page.png"className='Home_logo'/> Home</li>
  <li><img src="https://img.icons8.com/windows/32/null/user-menu-female.png"className='Production_logo'/>Production</li>
  <li><img src="https://img.icons8.com/material/24/null/business-report.png"className='Reports_logo'/>Reports</li>
  <li><img src="https://img.icons8.com/material/24/null/analyzing-skill.png"className='Planning_logo'/>Planning</li>
  <li><img src="https://img.icons8.com/material/24/null/rupee--v1.png"className='Finance_logo'/>Finances</li>
</ul>

  </div>
  

  <div className='mid-parent-container'>
  <div className='middle-container'>
  <div className='middle-container-heading'>
  <h3>Tasks</h3>
  <p style={{color: "#2196F3"}}> <b> Daily   Pending  Monthly </b></p>
  </div>
  <textarea id="w3review" name="w3review" rows="17" cols="75" className='textfld_one'/><br/>
  <textarea id="w3review" name="w3review" rows="11" cols="75" className='textfld_two'/>
  </div>
  </div>


  <div className='last-parent-container'>
  <div className='last-container'>
  <div className='last-container-heading'>
  <h3><b>Trends</b></h3>
  </div>
  <div className='last2-container-heading'>
  <h3><b>Efficiency</b></h3>
  </div>
  </div>
  </div>
  </div>  
  </>
  )
}

export default Content