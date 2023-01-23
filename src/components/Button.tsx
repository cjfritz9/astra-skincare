import * as React from 'react';
import * as Chakra from '@chakra-ui/react';
import { ShopContext } from '../context/shopContext';
import { ButtonProps } from '../models/Props';

const Button: React.FC<ButtonProps> = ({
  text,
  textColor,
  bgColor,
  size,
  onClick
}) => {
  const { accentColor1, themeColor2 } = React.useContext<any>(ShopContext);
  return (
    <Chakra.Button
      _hover={{ opacity: 0.7 }}
      _active={{ transform: 'scale(0.98)' }}
      w={(size && size.w) || '10rem'}
      color={textColor || accentColor1}
      backgroundColor={bgColor || themeColor2}
      onClick={() => onClick()}
    >
      {text || 'placeholder'}
    </Chakra.Button>
  );
};

export default Button;
