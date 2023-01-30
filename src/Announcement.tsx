import * as React from 'react';
import { Icon, Stack, Text } from '@chakra-ui/react';
import { MdClose } from 'react-icons/md';
import FMC_Component from './animations/defaults';

const Announcement: React.FC = () => {
  const [shouldRender, setShouldRender] = React.useState(true);

  if (!shouldRender) {
    const app = document.getElementsByClassName('App')[0]! as HTMLDivElement;
    app.style.transform = 'translateY(-39px)';
    app.style.transition = 'transform 0.25s';
  }

  return (
    <Stack
      as={FMC_Component}
      animate={!shouldRender && { transform: 'translateY(-39px)' }}
      //@ts-ignore
      transition={{ duration: 0.6 }}
      paddingY='6px'
      direction='row'
      justify='center'
      align='center'
      spacing='0px'
      overflow='hidden'
      width='100vw'
      background='brand.Peri'
      pos='relative'
    >
      <Text
        fontFamily='Inter'
        lineHeight='1.5'
        fontWeight='medium'
        fontSize='18px'
        color='#FFFFFF'
        textAlign='center'
      >
        Free Shipping on all $50 purchases
      </Text>
      <Icon
        _hover={{ opacity: 0.8 }}
        cursor='pointer'
        pos='absolute'
        top='.75rem'
        right='2rem'
        fontSize='18px'
        as={MdClose}
        onClick={() => setShouldRender((prev) => !prev)}
      />
    </Stack>
  );
};

export default Announcement;
