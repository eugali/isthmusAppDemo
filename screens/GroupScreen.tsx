import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

import { RootStackParamList, Group } from '../types';
import { mainBackgroundColor } from '../constants/Colors';
import { useRoute } from '@react-navigation/core';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { screenWidth } from '../constants/Layout';

const renderMemberPreview = (memberProfilePicture: string) => {
  return (
    <Image 
      source={{uri: memberProfilePicture}}
      style={styles.memberPreview}
    />
  )
}

export default function GroupScreen({
  navigation
}: StackScreenProps<RootStackParamList, 'Group'>) {

  const route = useRoute() // route.params.groupId when it works
  const groups = useSelector((state: RootState) => state.groups)

  const group = groups.find((item) => item.id === 'aaaa') // TODO - this is dev only

  return (
    <SafeAreaView style={styles.container}>
      <Image 
      source={{uri: group?.headerPicture}}
      style={styles.imageHeader}
      />

      <View style={styles.headerContainer}>
        <Text>{group?.title}</Text>
        <Text>{`${group?.groupAccess} GROUP - ${group?.membersAmount} MEMBERS`}</Text>
        <View style={styles.membersPreviewContainer}>
          {group?.firstTenMembers.map((groupMember) => renderMemberPreview(groupMember.profilePicture))}
        </View>
      </View>

      <View style={styles.listAnItemContainer}></View>

      <Text style={styles.inYourGroupLabel}>IN YOUR GROUP</Text>

      <View style={styles.itemsContainer}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  membersPreviewContainer: {
    flexDirection: 'row'
  },
  headerContainer: {
    width: '95%',
    backgroundColor: 'white',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    height: 120,
    top: -60
  },
  memberPreview: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: 'white'
  },
  imageHeader: {
    width: screenWidth,
    height: screenWidth
  },
  container: {
    flex: 1,
    backgroundColor: mainBackgroundColor,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
  }
});
