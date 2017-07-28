import React from 'react';
import {Wrapper, Text} from './elements';
import FontAwesome from 'react-fontawesome';

function NavBarItem({className, text, current, icon, onClick}) {
  return (
    <Wrapper onClick={() => onClick()} className={className}>
      <Text current={current}>
        <FontAwesome  name={icon}/>
        {text}
      </Text>
    </Wrapper>
  )
}

export default NavBarItem;
