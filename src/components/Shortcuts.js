import React from 'react';
import styled from 'styled-components';
import '@react95/icons/icons.css';
import { startWebamp } from '../utils/startWebamp';

const StyledShorcut = styled.div`
  margin-left: 20px;
  margin-top: 20px;
  align-items: center;
`;

function Shortcuts({ openExplorer }) {
  return (
    <div>
      <StyledShorcut>
      <img
          className="pointer"
          src={`${process.env.PUBLIC_URL}/WindowsExplorer_32x32_4.png`}
          alt="windows_explorer"
          onClick={() => openExplorer()}
        />
        <div>Explorer</div>
      </StyledShorcut>
      <StyledShorcut>
      <img
          className="pointer"
          src={`${process.env.PUBLIC_URL}/MediaCd_32x32_4.png`}
          alt="media"
          onClick={() => startWebamp()}
        />
        <div>Media</div>
      </StyledShorcut>
    </div>
  );
}

export default Shortcuts;

