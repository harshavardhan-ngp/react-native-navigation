import { useNavigation, useRoute } from "@react-navigation/native";
import { SafeAreaView, Text } from "react-native";
import TweetContent from "../../components/TweetContent";
import { useLayoutEffect } from "react";

export default function TweetDetailsScreen() {
  const nav = useNavigation();
  const route = useRoute();
  const { params } = route;

  useLayoutEffect(() => {
    nav.setOptions({
      headerTitle: params.tweet.author.name,
    });
  }, []);
  return (
    <SafeAreaView>
      {/* <Text>Tweet Details</Text> */}
      <TweetContent tweet={params.tweet} />
    </SafeAreaView>
  );
}
