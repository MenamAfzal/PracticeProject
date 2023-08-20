import React from 'react';
import {View, StyleSheet, FlatList, Image, Text} from 'react-native';
import {scale} from 'react-native-size-matters';
import colors from '../../assets/theme/colors';
import icons from '../../assets/icons';
const categories = [
  {icon: icons.art, text: 'Art & Music'},
  {icon: icons.sport, text: 'Sport'},
  {icon: icons.movie, text: 'Movie'},
];
const CategoryView = () => {
  return (
    <View style={{flexDirection: 'row'}}>
      <FlatList
        horizontal={true}
        showsVerticalScrollIndicator={false}
        data={categories}
        style={{flex: 1}}
        renderItem={({item, index}) => {
          return (
            <View key={index} style={styles.category}>
              <Image source={item.icon} style={styles.label} />
              <Text style={styles.labelText}>{item.text}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};
export default CategoryView;
const styles = StyleSheet.create({
  category: {
    borderColor: colors.borderColors.grey,
    borderWidth: 1,
    borderRadius: 28,
    flexDirection: 'row',
    padding: scale(10),
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: scale(5),
  },

  label: {
    height: scale(20),
    width: scale(20),
  },
  labelText: {
    fontWeight: '500',
    fontSize: scale(14),
    color: colors.textColors.white,
    marginHorizontal: scale(4),
  },
});
