import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { 
  StyleSheet,  
  View,
  FlatList
} from 'react-native';

import {Group} from '../types'

import ExploreGroupListItem from '../components/ExploreGroupListItem'

import { RootStackParamList } from '../types';

import { useSelector } from 'react-redux'

import {RootState} from '../redux/store'

const renderGroupItem = ({item}: {item: Group}) => {
  return (
    <ExploreGroupListItem 
      group={item}
    />
  )
}

export default function ExploreScreen({
  navigation,
}: StackScreenProps<RootStackParamList, 'Explore'>) {

  const groups = useSelector((state: RootState) => state.groups)

  return (
    <View style={styles.container}>
        <FlatList 
          extraData={groups}
          data={groups}
          renderItem={renderGroupItem}
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
  }
});
