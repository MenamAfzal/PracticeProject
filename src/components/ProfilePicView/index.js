import React, {useState} from 'react';
import {StyleSheet, View, FlatList, Image, Text} from 'react-native';
import {scale} from 'react-native-size-matters';
import icons from '../../assets/icons';

const DATA = [
  {
    icon: icons.img1,
    left: 2,
  },
  {
    icon: icons.img2,
    left: -22,
  },
  {
    icon: icons.img3,
    left: -42,
  },
  {
    icon: icons.img1,
    left: -62,
  },
  {
    icon: icons.img2,
    left: -82,
  },
];

const ProfilePicView = () => {
  const [left, setIsLeft] = useState(2);
  const setLeft = addition => setIsLeft(left + addition);

  return (
    <View style={[styles.container]}>
      <FlatList
        data={DATA}
        horizontal={true}
        renderItem={({item, index}) => {
          return (
            <View key={index} style={[{height: scale(39), width: scale(39)}]}>
              <Image
                source={item.icon}
                style={[
                  styles.item,
                  {
                    position: 'absolute',
                    left: item.left,
                    zIndex: 9999,
                  },
                ]}
              />
            </View>
          );
        }}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: scale(40),
  },
  item: {
    height: scale(39),
    width: scale(39),
    borderRadius: 30,
  },
});

export default ProfilePicView;
