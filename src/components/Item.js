import React from 'react';
import styled from 'styled-components';


const StyledItem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  text-align: center;
  width: 25%;
  padding: 10px 0;
`;

const StyledSpan = styled.span`
  margin-top: 5px;
`;

function File({ item, openNotepad }) {
  const { name, icon } = item;

  // Map icon names to their respective image paths in the src/assets folder
  const iconImagePath = {
    info_bubble: require('../assets/InfoBubble_32x32_4.png'),
    notepad_2: require('../assets/Notepad2_32x32_4.png'),
    flying_through_space_100: require('../assets/FlyingThroughSpace100_32x32_4.png'),
    progman_11: require('../assets/Progman11_32x32_4.png'),
    inetcfg_2301: require('../assets/Inetcfg2301_32x32_4.png'),
    // Add more icon mappings here as needed
  };

  // Use the custom icon image path if available, otherwise fallback to Icon component
  const iconImage = iconImagePath[icon] || icon;

  return (
    <StyledItem>
      <img
        src={iconImage}
        alt={icon} // Use the icon name as alt text
        className="pointer"
        onClick={() => openNotepad(item)}
      />
      <StyledSpan>{name}</StyledSpan>
    </StyledItem>
  );
}

export default File;
