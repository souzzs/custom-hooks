import React from 'react'
import Switch from 'react-switch';
import styled, { ThemeContext } from 'styled-components';

const ThemeBg = styled.div`
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.textColor};
    padding: 15px;
    display: flex;
    align-items: center;
    gap: 20px;
    margin: 20px 0;
`;

interface ThemeProps {
    toggleTheme: () => void;
}

const Theme = ({toggleTheme}: ThemeProps) => {
    const {name} = React.useContext(ThemeContext);
  return (
    <ThemeBg>
        light
        <Switch 
            onChange={toggleTheme}
            checked={name === 'dark'}
            checkedIcon={false}
            uncheckedIcon={false}
            height={10}
            width={40}
            handleDiameter={20}
            offColor="#404040"
            onColor="#e54"
        />
        dark
    </ThemeBg>
  )
}

export default Theme