import { StackScreenProps } from "@react-navigation/stack";
import * as React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  FlatList,
  Alert,
} from "react-native";

import { RootStackParamList, Group, GroupItem } from "../types";
import { mainBackgroundColor } from "../constants/Colors";
import { useRoute } from "@react-navigation/core";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { screenWidth } from "../constants/Layout";
import SwipeButton from "rn-swipe-button";
import { Icon } from "react-native-elements";

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
  return (
    <View style={styles.groupItemContainer}>
      <Icon
        type="material-community"
        name={item.isFavourited ? "star" : "star-outline"}
        color="grey"
        size={32}
        style={styles.groupItemFavouriteStar}
      />

      <Image source={{ uri: item.picture }} style={styles.groupItemPicture} />

      <View style={styles.groupItemContentContainer}>
        <Text>{item.title}</Text>

        <Text>{`${item.brand} - ${item.size}`}</Text>

        <Text>{item.ownerName}</Text>
      </View>
    </View>
  );
};

export default function GroupScreen({
  navigation,
}: StackScreenProps<RootStackParamList, "Group">) {
  const route = useRoute();
  const groupId = route?.params?.groupId;
  const groups = useSelector((state: RootState) => state.groups);

  const group = groups.find((item) => item.id === groupId);

  const groupItems = mockGroupItems;

  const ListHeaderComponent = () => (
    <View style={styles.listHeaderContainer}>
      <View style={styles.topControlsContainer}>
        <Pressable onPress={() => navigation.goBack()}>
          <Icon
            type="material-community"
            name="arrow-left"
            size={32}
            color="grey"
          />
        </Pressable>
      </View>

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
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={groupItems}
        extraData={groupItems}
        ListHeaderComponent={ListHeaderComponent}
        renderItem={renderGroupItem}
        numColumns={2}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  topControlsContainer: {
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  groupItemFavouriteStar: {},
  groupItemContentContainer: {
    width: "90%",
  },
  listHeaderContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  groupItemPicture: {
    width: "90%",
    height: screenWidth * 0.45 * 1.6,
  },
  groupItemContainer: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 35,
  },
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
