import React from 'react';
import {View, StyleSheet, FlatList, Image, Text} from 'react-native';
import {scale} from 'react-native-size-matters';
import colors from '@/assets/theme/colors';
import icons from '../../assets/icons';
const categories = [
  {icon: icons.sport},
  {icon: icons.movie},
  {icon: icons.art},
];
export default CategoryView = () => {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={categories}
      style={{flex: 1}}
      contentContainerStyle={{
        paddingBottom: 130,
      }}
      renderItem={({item, index}) => {
        return (
          <View key={index} style={styles.category}>
            <Image source={item.icon} style={styles.label} />
          </View>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  category: {
    borderColor: colors.borderColors.grey,
    borderWidth: 1,
    borderRadius: 24,
    flexDirection: 'row',
    padding: scale(10),
  },
  label: {
    height: scale(20),
    width: scale(150),
  },
});
