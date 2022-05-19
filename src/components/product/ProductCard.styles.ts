import tw from 'twrnc';

const ProductCardStyle = {
  card: tw`
    p-2 m-3 mb-0
    flex-row
    bg-white
    rounded
  `,
  details: tw`
    flex-1
  `,
  preview: tw`
    w-36
  `,
  title: tw`
    pr-2
    mb-4
    font-bold
  `,
  image: tw`
    w-36 h-36
    border-gray-100 border-2
    rounded
  `,
  prices: tw`
    flex-row
  `,
  mainPrice: tw``,
  offPrice: tw``,
};

export default ProductCardStyle;
