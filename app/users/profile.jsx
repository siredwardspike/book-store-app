import {
  View,
  Text,
  Image,
  useWindowDimensions,
  Pressable,
} from "react-native";
import React from "react";
import Icon from "react-native-elements/dist/icons/Icon";
import { Link, router } from "expo-router";

export default function profile() {
  const { height, width, fontScale } = useWindowDimensions();
  let imageWidth = width > 1200 ? width * 0.1 : width * 0.28;
  let imageHeight = height > 900 ? height * 0.08 : height * 0.2;

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View
        style={{
          padding: 5,
          backgroundColor: "white",
          gap: 5,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontSize: imageWidth * imageHeight * 0.002,
            color: "#2C4E70",
            fontWeight: "bold",
          }}
        >
          Book Store
        </Text>

        <View style={{ flexDirection: "row" }}>
          <Link href="/home" asChild>
            <Pressable
              style={{
                marginHorizontal: 5,
                borderWidth: 2,
                padding: 5,
                borderRadius: 10,
                backgroundColor: "white",
                borderColor: "#B3C8CF",
                width: 38,
                height: 38,
              }}
            >
              <Icon name="home" type="material" color="#2C4E70" />
            </Pressable>
          </Link>

          <Pressable
            onPress={() => {
              router.navigate(`/users/results`);
            }}
            style={{
              borderWidth: 2,
              padding: 5,
              borderRadius: 10,
              backgroundColor: "white",
              borderColor: "#B3C8CF",
              width: 38,
              height: 38,
            }}
          >
            <Icon name="search" type="material" color="#2C4E70" />
          </Pressable>
        </View>
      </View>

      <View style={{ alignSelf: "center", flex: 1, justifyContent: "center" }}>
        <View style={{ alignItems: "center" }}>
          <View
            style={{
              borderRadius: 30,
              padding: 10,
              alignItems: "center",
              marginBottom: 10,
              borderWidth: 2,
              borderBottomColor: "#EEF7FF",
              borderTopColor: "#EEF7FF",
              borderLeftColor: "#EEF7FF",
              borderRightColor: "#EEF7FF",
              borderCurve: 4,
            }}
          >
            <Image
              source={{
                uri: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRaT2WozXdM9ChvdlD38Wp0--s6sgOqG4lbgwvrO5Ou16gUzNsE",
              }}
              style={{
                height: height > 1200 ? height * 0.25 : height * 0.15,
                width: width * 0.15,
                borderRadius: 30,
                aspectRatio: 1,
              }}
            ></Image>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                alignSelf: "flex-start",
              }}
            >
              <Icon
                name="person"
                type="material"
                color="#2C4E70"
                style={{ margin: 3 }}
              />
              <Text
                style={{
                  fontSize: imageWidth * imageHeight * 0.0015,
                  fontWeight: "normal",
                  color: "black",
                }}
              >
                : The Rock
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                alignSelf: "flex-start",
              }}
            >
              <Icon
                name="mail"
                type="material"
                color="#2C4E70"
                style={{ margin: 3 }}
              />
              <Text
                style={{
                  fontSize: imageWidth * imageHeight * 0.0015,
                  fontWeight: "normal",
                  color: "black",
                }}
              >
                :dwaynejohnson@rock.com
              </Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: "column",
              alignItems: "flex-start",
              alignSelf: "center",
            }}
          >
            <Pressable
              style={{ flexDirection: "row-reverse", alignItems: "center" }}
            >
              <Text
                style={{
                  fontSize: imageWidth * imageHeight * 0.001,
                  fontWeight: "600",
                  color: "#4D869C",
                }}
              >
                Cart history
              </Text>
              <Icon
                name="shopping-cart"
                type="material"
                color="#4D869C"
                style={{ margin: 3 }}
              />
            </Pressable>

            <Pressable
              style={{ flexDirection: "row-reverse", alignItems: "center" }}
            >
              <Text
                style={{
                  fontSize: imageWidth * imageHeight * 0.001,
                  fontWeight: "400",
                  color: "#4D869C",
                }}
              >
                Whishlist
              </Text>
              <Icon
                name="list"
                type="material"
                color="#4D869C"
                style={{ margin: 3 }}
              />
            </Pressable>

            <Pressable
              style={{ flexDirection: "row-reverse", alignItems: "center" }}
            >
              <Text
                style={{
                  fontSize: imageWidth * imageHeight * 0.001,
                  fontWeight: "400",
                  color: "#4D869C",
                }}
              >
                Change password
              </Text>
              <Icon
                name="pin"
                type="material"
                color="#4D869C"
                style={{ margin: 3 }}
              />
            </Pressable>

            <Pressable
              style={{ flexDirection: "row-reverse", alignItems: "center" }}
            >
              <Text
                style={{
                  fontSize: imageWidth * imageHeight * 0.001,
                  fontWeight: "400",
                  color: "#4D869C",
                }}
              >
                Signout
              </Text>
              <Icon
                name="logout"
                type="material"
                color="#4D869C"
                style={{ margin: 3 }}
              />
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}
