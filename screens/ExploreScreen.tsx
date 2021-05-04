import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { 
  StyleSheet,  
  View,
  FlatList
} from 'react-native';

import {
  Group, 
  GroupCategory,
  RootStackParamList
} from '../types'

import ExploreGroupListItem from '../components/ExploreGroupListItem'

import { useSelector } from 'react-redux'
import {RootState} from '../redux/store'

const renderGroupItem = ({item}: {item: Group}) => {
  return (
    <ExploreGroupListItem 
      group={item}
    />
  )
}

const GroupsHorizontalGallery = ({groups}: {groups: Group[]}) => {
  return (
    <View style={styles.groupsPerCategoryContainer}>
        <FlatList 
          extraData={groups}
          data={groups}
          renderItem={renderGroupItem}
          horizontal
        />
    </View>
  )
}

const renderGroupCategory = ({item, groups}: {item: GroupCategory, groups: Group[]}) => {
  return (
    <View style={styles.groupCategoryContainer}>
      <GroupsHorizontalGallery 
        groups={groups.filter(group => group.categoryId === item.id)}
      />

    </View>
  )
}

export default function ExploreScreen({
  navigation,
}: StackScreenProps<RootStackParamList, 'Explore'>) {

  const groups = useSelector((state: RootState) => state.groups)
  const categories = useSelector((state: RootState) => state.groupCategories)

  return (
    <View style={styles.container}>
        <FlatList 
          extraData={categories}
          data={categories}
          renderItem={({item}: {item: GroupCategory}) => renderGroupCategory({item, groups})}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  groupsPerCategoryContainer: {
    width: '100%'
  },
  groupCategoryContainer:{

  }
});
