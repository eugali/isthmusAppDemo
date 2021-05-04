import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

import { RootStackParamList, Group } from '../types';
import { mainBackgroundColor } from '../constants/Colors';
import { useRoute } from '@react-navigation/core';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

export default function GroupScreen({
  navigation
}: StackScreenProps<RootStackParamList, 'Group'>) {

  const route = useRoute() // route.params.groupId when it works
  const groups = useSelector((state: RootState) => state.groups)

  const group = groups.find((item) => item.id === 'aaaa') // TODO - this is dev only

  return (
    <View style={styles.container}>
      <Image 
      source={{uri: group?.headerPicture}}
      style={styles.imageHeader}
      />

      <View style={styles.headerContainer}></View>

      <View style={styles.listAnItemContainer}></View>

      <Text style={styles.inYourGroupLabel}>IN YOUR GROUP</Text>

      <View style={styles.itemsContainer}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageHeader: {
    width: '100%'
  },
  container: {
    flex: 1,
    backgroundColor: mainBackgroundColor,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
  }
});
