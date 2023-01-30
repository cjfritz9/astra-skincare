import * as Chakra from '@chakra-ui/react';
import * as FM from 'framer-motion';

const FMC_Component = Chakra.chakra(FM.motion.div, {
  shouldForwardProp: (prop) =>
    FM.isValidMotionProp(prop) || Chakra.shouldForwardProp(prop)
});

export default FMC_Component;
