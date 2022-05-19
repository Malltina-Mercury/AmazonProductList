import tw from 'twrnc';

const searchBarStyles = {
  bar: tw`
    h-14
    m-2
    bg-white
    flex-row content-center items-center
    rounded
    overflow-hidden
  `,
  input: tw`
    flex-1
    p-2
  `,
  button: tw`
    p-3
    flex
  `,
};

export default searchBarStyles;
