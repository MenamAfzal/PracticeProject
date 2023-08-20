import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import colors from '../../assets/theme/colors';

export default TileView = ({tileText}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <View style={styles.tile} />
      <Text style={styles.patchText}> {tileText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tile: {
    height: scale(18),
    width: scale(5),
    backgroundColor: colors.backgroundColors.primary,
    marginVertical: scale(15),
  },
  patchText: {
    fontWeight: '300',
    fontSize: scale(17),
    color: colors.textColors.white,
    marginLeft: scale(3),
  },
});
