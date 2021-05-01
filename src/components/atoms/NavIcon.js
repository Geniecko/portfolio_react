// import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

// const StyledNavText = styled.div`
//   position: absolute;
//   bottom: 15px;
//   text-transform: uppercase;
//   font-size: ${({ theme }) => theme.fontSize.xs};
//   font-weight: ${({ theme }) => theme.bold};
//   color: ${({ theme }) => theme.white};
// `;

// const StyledWrapperIcon = styled.button`
//   position: relative;
//   display: flex;
//   justify-content: center;
//   width: 120px;
//   height: 120px;
//   border-radius: 25px;
//   border: 5px solid transparent;
//   transition: 0.3s;
//   background: none;

//   &:hover {
//     border: 5px solid ${({ theme }) => theme.blue};
//   }

//   &.active {
//     border: 5px solid ${({ theme }) => theme.blue};
//   }
// `;

// const StyledNavIcon = styled.img`
//   height: 40px;
//   margin-top: 15px;
// `;

// const NavIcon = ({ icon, children }) => (
//   <StyledWrapperIcon>
//     <StyledNavIcon src={icon} />
//     <StyledNavText>{children}</StyledNavText>
//   </StyledWrapperIcon>
// );

// NavIcon.propTypes = {
//   icon: PropTypes.string.isRequired,
//   children: PropTypes.string.isRequired,
// };

// export default NavIcon;

import styled from 'styled-components';

const NavIcon = styled.button`
  position: relative;
  display: block;
  width: 120px;
  height: 120px;
  border-radius: 25px;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: 50% 30%;
  background-size: 30%;
  border: 5px solid transparent;
  transition: 0.3s;
  margin-bottom: 1vh;

  &:hover {
    border: 5px solid ${({ theme }) => theme.white};
  }

  &.active {
    border: 5px solid ${({ theme }) => theme.blue};
  }
`;

export default NavIcon;
