import React from 'react';
import { StyleSheet, View, } from 'react-native';
//import { Layout, Select, SelectItem } from '@ui-kitten/components';
import Constants from '../Config/Constans';
import Colors from '../Config/Colors';

const SelectInput = ({ selectIndex, setSelectIndex, placeholder }) => {


  return (
    <React.Fragment>
      <View style={styles.inputContainer} level='1'>
        
      </View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  input: {
    flex: 1,
    margin: 2,
    borderColor: Colors.white,
    borderRadius: 15,
    height: Constants.CONFIG.HEADER_HEIGHT * 0.06,
    width: Constants.CONFIG.SCREEN_WIDTH * 0.85,
  },

});
export default SelectInput;

/*<Select
          style={styles.input}
          placeholder={placeholder}
          selectedIndex={selectIndex}
          onSelect={setSelectIndex}
          >
          <SelectItem title='Option 1' />
          <SelectItem title='Option 2' />
          <SelectItem title='Option 3' />
        </Select> */