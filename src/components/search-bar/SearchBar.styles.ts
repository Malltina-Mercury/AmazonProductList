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
    pr-5 pl-2
    text-blue-500
    flex
  `,
};

export default searchBarStyles;
