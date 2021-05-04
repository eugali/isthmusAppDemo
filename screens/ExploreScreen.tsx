import { StackScreenProps } from "@react-navigation/stack";
import * as React from "react";
import { useEffect} from 'react'
import {
  StyleSheet,
  View,
  FlatList,
  SafeAreaView,
  Text,
  Pressable,
  Alert,
} from "react-native";

import {useDispatch } from 'react-redux'

import {setGroups} from '../redux/groupsReducer'

import { Group, GroupCategory, RootStackParamList } from "../types";

import ExploreGroupListItem from "../components/ExploreGroupListItem";

import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { mainBackgroundColor } from "../constants/Colors";

import {getAllGroups} from '../api/Group'

const renderGroupItem = ({ item }: { item: Group }) => {
  return <ExploreGroupListItem group={item} />;
};

const GroupsHorizontalGallery = ({ groups }: { groups: Group[] }) => {
  return (
    <View style={styles.groupsPerCategoryContainer}>
      <FlatList
        extraData={groups}
        data={groups}
        renderItem={renderGroupItem}
        horizontal
      />
    </View>
  );
};

const renderGroupCategory = ({
  item,
  groups,
}: {
  item: GroupCategory;
  groups: Group[];
}) => {
  const categoryGroups = groups.filter((group) => group.categoryId === item.id);

  if (categoryGroups.length === 0) return null;

  return (
    <View style={styles.groupCategoryContainer}>
      <View style={styles.groupCategoryHeaderContainer}>
        <Text style={styles.groupCategoryNameLabel}>
          {item.name.toLocaleUpperCase()}
        </Text>
        <View style={{ flex: 1 }} />
        <Pressable
          onPress={() => Alert.alert("show all the groups of this category")}
        >
          <Text style={styles.groupCategorySeeAllLabel}>See all</Text>
        </Pressable>
      </View>
      <GroupsHorizontalGallery groups={categoryGroups} />
    </View>
  );
};

export default function ExploreScreen({
  navigation,
}: StackScreenProps<RootStackParamList, "Explore">) {
  const groups = useSelector((state: RootState) => state.groups);
  const categories = useSelector((state: RootState) => state.groupCategories);

  const dispatch = useDispatch()

  const setGroupsCallback = (groups: Group[]) => dispatch(setGroups(groups))

  useEffect(() => {
    getAllGroups(setGroupsCallback)
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        extraData={categories}
        data={categories}
        renderItem={({ item }: { item: GroupCategory }) =>
          renderGroupCategory({ item, groups })
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  groupCategorySeeAllLabel: {},
  groupCategoryHeaderContainer: {
    width: "100%",
    flexDirection: "row",
    paddingBottom: 10,
  },
  groupCategoryNameLabel: {},
  container: {
    flex: 1,
    backgroundColor: mainBackgroundColor,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  groupsPerCategoryContainer: {
    width: "100%",
  },
  groupCategoryContainer: {
    paddingHorizontal: 10,
    marginBottom: 30,
  },
});
