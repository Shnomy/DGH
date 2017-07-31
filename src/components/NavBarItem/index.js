import React from 'react';
import {Wrapper, Text, NavBarText} from './elements';
import FontAwesome from 'react-fontawesome';

function NavBarItem({className, text, current, icon, onClick}) {
  return (
    <Wrapper onClick={() => onClick()} className={className}>
      <Text current={current}>
        <FontAwesome  name={icon}/>
        <NavBarText className={"text"}>{text}</NavBarText>
      </Text>
    </Wrapper>
  )
}

export default NavBarItem;
