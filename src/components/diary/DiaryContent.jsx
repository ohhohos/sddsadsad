import React from 'react'

import { diary } from '../../constant/homeData'
import { DiaryButton, DiaryContentContainer } from './DiaryContent.styled'
import { Link } from 'react-router-dom'

const DiaryContent = () => {
  
  return (
    <DiaryContentContainer>
        <div className='diary-content'>
          <DiaryButton>
            {diary.map(( { to, name} ) =>(  
              <Link
                key={name}
                to={to}
                className="diary-content_button"
              >
                <span>{name}</span>
              </Link>
            ))}
            </DiaryButton>
          
          
        </div>
        <div>
        summary
        </div>
    </DiaryContentContainer>
  )
}

export default DiaryContent