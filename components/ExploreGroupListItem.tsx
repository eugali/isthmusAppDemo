import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {Group} from '../types'

type ExploreGroupListItemProps = {
  group: Group
}

export default function ExploreGroupListItem({
  group
}:ExploreGroupListItemProps) {

  return (
    <View style={styles.container}>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  }
});
