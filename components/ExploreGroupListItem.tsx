import * as React from 'react';
import { StyleSheet, Image, View, Text, Pressable, Alert } from 'react-native';
import {Group} from '../types'
import { screenWidth } from '../constants/Layout';
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/core';

const BoxWidth = screenWidth * 0.9
const BoxHeight = BoxWidth * 0.33

type ExploreGroupListItemProps = {
  group: Group
}

const renderMemberPreview = (memberProfilePicture: string) => {
  return (
    <Image 
      source={{uri: memberProfilePicture}}
      style={styles.memberPreview}
    />
  )
}

export default function ExploreGroupListItem({
  group
}:ExploreGroupListItemProps) {

  const navigation = useNavigation()

  return (
    <Pressable onPress={() => navigation.navigate('Group', {groupId: group.id})}>
    <View style={styles.container}>
      <Image 
        source={{uri: group.headerPicture}}
        style={styles.headerPicture}
      />

      <View style={styles.groupContentContainer}>
        <Text style={styles.groupTitle}>{group.title}</Text>

        <Text style={styles.groupInfo}>{`${group.listingsAmount} listings - ${group.discussionsAmount} | ${group.location}`}</Text>

        <View style={styles.footerContainer}>
          <View style={styles.membersPreviewContainer}>
            {group.firstTenMembers.slice(0, 4).map(member => renderMemberPreview(member.profilePicture))}
            {
              group.firstTenMembers.length > 4 && (
            <Icon 
              type='material-community'
              name='dots-horizontal-circle'
              size={31}
              color='grey'
            />
              )
}
          </View>

          <Text style={styles.membersAmount}>{`${group.membersAmount} members`}</Text>
        </View>
      </View>
    </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  memberPreview: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: 'white'
  },
  membersAmount: {
    fontSize: 12
  },
  membersPreviewContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: 1,
    flexDirection: 'row'
  },
  footerContainer: {
    width: '100%',
    alignItems: 'flex-end',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row'
  },
  groupInfo: {

  },
  groupTitle: {

  },
  groupContentContainer: {
    flex: 1,
    height: '100%',
    padding: 8,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  container: {
    width: BoxWidth,
    height: BoxHeight,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: 'white'
  },
  headerPicture: {
    width: BoxHeight,
    height: BoxHeight
  }
});
