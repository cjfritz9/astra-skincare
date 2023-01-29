import * as React from 'react';
import * as Chakra from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';
import Button from '../Button';
import RichText from '../RichText';
import Gallery3x1 from '../Gallery_3-by-1';
import ImageWithText from '../ImageWithText';

const SingleProduct: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const { handle } = useParams();

  const { fetchProductByHandle, addItemToCheckout, product } =
    React.useContext<any>(ShopContext);

  React.useEffect(() => {
    fetchProductByHandle(handle);
    if (product.title && window.location.href.includes(product.handle)) {
      setIsLoading(false);
    }
  }, [fetchProductByHandle, handle]);

  if (!product.title || !window.location.href.includes(product.handle)) {
    window.scrollTo(0, 0);
    return (
      <Chakra.Box p='2rem'>
        <Chakra.Progress isIndeterminate colorScheme='pink' my='2rem' />
        <Chakra.Grid
          templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)']}
          m='auto'
        >
          <Chakra.Flex justifyContent='center' alignItems='center'>
            <Chakra.Skeleton>
              <Chakra.Image
                minWidth='50vw'
                borderRadius='10px'
                mb='2rem'
                h='50vh'
              />
            </Chakra.Skeleton>
          </Chakra.Flex>
          <Chakra.Flex
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            px='2rem'
          >
            <Chakra.Skeleton>
              <Chakra.Heading>The Something Something</Chakra.Heading>
              <Chakra.Text fontSize='14px' color='gray.500' pb='2rem'>
                $49
              </Chakra.Text>
            </Chakra.Skeleton>
            <Chakra.SkeletonText m='2rem' noOfLines={15}>
              <Chakra.Text color='gray.500' pb='2rem'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                aliquam quidem quibusdam. Ut saepe ipsum aliquid praesentium
                nihil asperiores at nobis recusandae culpa, possimus
                exercitationem corporis temporibus laudantium impedit id! Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Vitae facere
                ab modi similique sint pariatur explicabo corporis excepturi
                beatae quisquam ipsum, omnis iure assumenda fugiat rerum atque
                sequi dolor tempore! Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Repellat ea sequi ut, ducimus sapiente ipsam
                eveniet sunt earum voluptatum dolores porro autem recusandae.
                Distinctio eaque molestiae necessitatibus consequatur nemo est?
              </Chakra.Text>
            </Chakra.SkeletonText>
            <Button
              text='Add To Cart'
              onClick={() => addItemToCheckout(product.variants[0].id, 1)}
            />
          </Chakra.Flex>
        </Chakra.Grid>
        <Chakra.Skeleton h='100vh' mt='1rem' />
      </Chakra.Box>
    );
  }

  if (isLoading) {
    window.scrollTo(0, 0);
  }

  return (
    <Chakra.Box p='2rem'>
      <Chakra.Grid
        templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)']}
        m='auto'
      >
        <Chakra.Flex justifyContent='center' alignItems='center'>
          <Chakra.Image
            minWidth='50vw'
            borderRadius='10px'
            mb='2rem'
            src={product.images[0].src}
          />
        </Chakra.Flex>
        <Chakra.Flex
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
          px='2rem'
        >
          <Chakra.Heading>{product.title}</Chakra.Heading>
          <Chakra.Text fontSize='14px' color='gray.500' pb='2rem'>
            ${product.variants[0].price.amount.slice(0, 2)}
          </Chakra.Text>
          <Chakra.Text color='gray.500' pb='2rem'>
            {product.description}
          </Chakra.Text>
          <Button
            text='Add To Cart'
            onClick={() => addItemToCheckout(product.variants[0].id, 1)}
          />
        </Chakra.Flex>
      </Chakra.Grid>
      <Gallery3x1
        heading='Similar Products You Might Like'
        padding={{ y: '3rem' }}
      />
      <ImageWithText
        heading='Make Time For You'
        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque excepturi quam corporis nam fuga saepe doloribus aliquid eaque totam laboriosam eos, quia minima reiciendis soluta assumenda consectetur ea necessitatibus veniam. Aut optio consectetur nostrum deleniti unde non, sunt doloremque eligendi, illo vel totam maiores culpa officiis beatae vitae! Accusantium esse quisquam sapiente, quod optio voluptas eligendi dicta dolorem totam assumenda.'
        image='https://images.unsplash.com/photo-1621218095395-c492e6dde021?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
      />
      <RichText />
    </Chakra.Box>
  );
};

export default SingleProduct;
