import React from 'react';
import {TextInput} from 'react-native';

interface Props {
  searchQuery: string;
  onChange: (query: string) => void;
  onSubmit: (query: string) => void;
}

export const SearchInput: React.FC<Props> = ({searchQuery, onChange}) => {
  return (
    <TextInput
      style={{
        height: 50,
        margin: 10,
        marginBottom: 30,
        backgroundColor: 'white',
        borderColor: '#009688',
        borderWidth: 1,
        borderRadius: 5,
      }}
      placeholder="search here..."
      value={searchQuery}
      onChangeText={onChange}
      // onSubmitEditing={onSubmit}
    />
  );
};
