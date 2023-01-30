import * as React from 'react';
import { Icon, Stack, Text } from '@chakra-ui/react';
import { MdClose } from 'react-icons/md';
import FMC_Component from '../animations/defaults';

const Announcement: React.FC = () => {
  const [shouldRender, setShouldRender] = React.useState(true);

  React.useEffect(() => {
    if (!shouldRender) {
      const app = document.getElementsByClassName('App')[0]! as HTMLDivElement;
      app.style.transform = 'translateY(-39px)';
      app.style.transition = 'transform 0.25s';
      setTimeout(() => {
        app.style.transform = 'translateY(0px)';
        app.style.transition = 'transform 0s';
        (document.getElementById('ann-container')! as HTMLDivElement).remove();
      }, 250);
    }
  }, [shouldRender]);

  return (
    <Stack
      id='ann-container'
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
        top='.7rem'
        right='2.5rem'
        fontSize='18px'
        as={MdClose}
        onClick={() => setShouldRender((prev) => !prev)}
      />
    </Stack>
  );
};

export default Announcement;
