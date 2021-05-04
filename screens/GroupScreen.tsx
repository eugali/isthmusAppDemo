import { StackScreenProps } from "@react-navigation/stack";
import * as React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  FlatList,
} from "react-native";

import { RootStackParamList, Group, GroupItem } from "../types";
import { mainBackgroundColor } from "../constants/Colors";
import { useRoute } from "@react-navigation/core";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { screenWidth } from "../constants/Layout";
import SwipeButton from "rn-swipe-button";

const mockGroupItems = [
  {
    picture:
      "https://www.gelestatic.it/thimg/HEhNVlW8liObT8Z9cb_CAiyTXmc=/fit-in/960x540/https%3A//www.lastampa.it/image/contentid/policy%3A1.38571329%3A1603568472/no-time-to-die-coronavirus_jpg_1200x0_crop_q85.jpg%3Ff%3Ddetail_558%26h%3D720%26w%3D1280%26%24p%24f%24h%24w%3Df7f193d",
    title: "ABC",
    brand: "Best Brand",
    size: "M",
    isFavourited: true,
    ownerName: "Brad Pitt",
  },
  {
    picture:
      "https://www.gelestatic.it/thimg/HEhNVlW8liObT8Z9cb_CAiyTXmc=/fit-in/960x540/https%3A//www.lastampa.it/image/contentid/policy%3A1.38571329%3A1603568472/no-time-to-die-coronavirus_jpg_1200x0_crop_q85.jpg%3Ff%3Ddetail_558%26h%3D720%26w%3D1280%26%24p%24f%24h%24w%3Df7f193d",
    title: "ABC",
    brand: "Best Brand",
    size: "L",
    isFavourited: false,
    ownerName: "Eugenio Galioto",
  },
  {
    picture:
      "https://www.gelestatic.it/thimg/HEhNVlW8liObT8Z9cb_CAiyTXmc=/fit-in/960x540/https%3A//www.lastampa.it/image/contentid/policy%3A1.38571329%3A1603568472/no-time-to-die-coronavirus_jpg_1200x0_crop_q85.jpg%3Ff%3Ddetail_558%26h%3D720%26w%3D1280%26%24p%24f%24h%24w%3Df7f193d",
    title: "ABC",
    brand: "Best Brand",
    size: "S",
    isFavourited: true,
    ownerName: "James Bond",
  },
] as GroupItem[];

const renderMemberPreview = (memberProfilePicture: string) => {
  return (
    <Image
      source={{ uri: memberProfilePicture }}
      style={styles.memberPreview}
    />
  );
};

const renderGroupItem = ({ item }: { item: GroupItem }) => {
  return <View style={styles.groupItemContainer}></View>;
};

export default function GroupScreen({
  navigation,
}: StackScreenProps<RootStackParamList, "Group">) {
  const route = useRoute(); // route.params.groupId when it works
  const groupId = "aaaa"; // TODO - for dev only
  const groups = useSelector((state: RootState) => state.groups);

  const group = groups.find((item) => item.id === groupId);

  const groupItems = mockGroupItems;

  const ListHeaderComponent = () => (
    <>
      <Image
        source={{ uri: group?.headerPicture }}
        style={styles.imageHeader}
      />

      <View style={styles.headerContainer}>
        <Text>{group?.title}</Text>
        <Text>{`${group?.groupAccess} GROUP - ${group?.membersAmount} MEMBERS`}</Text>
        <View style={styles.membersPreviewContainer}>
          {group?.firstTenMembers.map((groupMember) =>
            renderMemberPreview(groupMember.profilePicture)
          )}
        </View>
      </View>

      <View style={styles.listAnItemContainer}>
        <SwipeButton title="List an item" />
      </View>

      <Text style={styles.inYourGroupLabel}>IN YOUR GROUP</Text>
    </>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={mockGroupItems}
        extraData={mockGroupItems}
        ListHeaderComponent={ListHeaderComponent}
        renderItem={renderGroupItem}
        numColumns={2}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  itemsContainer: {
    flex: 1,
  },
  inYourGroupLabel: {
    width: "100%",
    marginTop: 20,
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  listAnItemContainer: {
    width: "100%",
    paddingHorizontal: 20,
  },
  membersPreviewContainer: {
    flexDirection: "row",
  },
  headerContainer: {
    width: "95%",
    backgroundColor: "white",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    height: 120,
    top: -60,
  },
  memberPreview: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "white",
  },
  imageHeader: {
    width: screenWidth,
    height: screenWidth,
  },
  container: {
    flex: 1,
    backgroundColor: mainBackgroundColor,
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 20,
  },
});
