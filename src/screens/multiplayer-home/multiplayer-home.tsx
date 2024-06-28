import React, { ReactElement, useEffect, useState } from "react";
import {
  Alert,
  View,
  FlatList,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import { MyButton, GradientBackground, MyText } from "../../components";
import styles from "./multiplayer-home.styles";
import { useAuth } from "../../contexts/auth-context";
import { getPlayer, PlayerGameType } from "./multiplayer-home.graphql";
import { API, graphqlOperation } from "aws-amplify";
import { GraphQLResult } from "@aws-amplify/api";
import { GetPlayerQuery } from "../../API";
import { TouchableOpacity } from "react-native-gesture-handler";
import GameItem from "./game-item";
import Modal from "react-native-modal";
import PlayersModal from "./players-modal/players-modal";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackNavigatorParams } from "../../config/navigator";
import * as Notifications from "expo-notifications";

type MultiplayerHomeScreenNavigationProp = StackNavigationProp<
  StackNavigatorParams,
  "MultiplayerHome"
>;

type MultiplayerHomeProps = {
  navigation: MultiplayerHomeScreenNavigationProp;
};

export default function MultiplayerHome({
  navigation,
}: MultiplayerHomeProps): ReactElement {
  const { user } = useAuth();
  const [playerGames, setPlayerGames] = useState<PlayerGameType[] | null>(null);
  const [nextToken, setNextToken] = useState<string | null | undefined>(null);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [playersModal, setPlayersModal] = useState(false);

const fetchPlayer = async (nextToken: string | null, init = false) => {
    if (user) {
        setLoading(true);
        if (nextToken == null && !init) {
            setRefreshing(true);
        }
        try {
            const player = (await API.graphql(
                graphqlOperation(getPlayer, {
                    username: user.username,
                    limit: 10,
                    sortDirection: "DESC",
                    nextToken: nextToken
                })
            )) as GraphQLResult<GetPlayerQuery>;
            if (player.data?.getPlayer?.games) {
                const newPlayerGames = player.data.getPlayer.games.items || [];
                setPlayerGames(
                    !playerGames || nextToken === null
                        ? newPlayerGames
                        : [...playerGames, ...newPlayerGames]
                );
                setNextToken(player.data.getPlayer.games.nextToken);
                Notifications.setBadgeCountAsync(0);
            }
        } catch (error) {
            Alert.alert("Error!", "An error has occurred in fetching players!");
        }
        setLoading(false);
        setRefreshing(false);
    }
};
  
  useEffect(() => {
    fetchPlayer(null, true);
  }, []);

  return (
    <GradientBackground>
      {user ? (
        <>
          <FlatList
            contentContainerStyle={styles.container}
            data={playerGames}
            renderItem={({ item }) => (
              <GameItem
                onPress={() => {
                  if (item?.game) {
                    navigation.navigate("MultiplayerGame", {
                      gameID: item?.game.id,
                    });
                  }
                }}
                playerGame={item}
              />
            )}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={() => {
                  fetchPlayer(null);
                }}
                tintColor={"#f2f2f2"}
              />
            }
            keyExtractor={(playerGame) =>
              playerGame ? playerGame.game.id : `${new Date().getTime()}`
            }
            ListFooterComponent={() => {
             if (!nextToken) return null;
              return (
                <MyButton
                  style={{ marginTop: 20 }}
                  loading={loading && !refreshing}
                  title="Load More"
                  onPress={() => {
                    fetchPlayer(nextToken);
                  }}
                />
              );
            }}
            ListEmptyComponent={() => {
              if (loading) {
                return (
                  <View style={styles.loading}>
                    <ActivityIndicator color={"#f2f2f2"} />
                  </View>
                );
              }
              return (
                <View>
                  <MyText style={{ color: "#f2f2f2" }}>No Games Yet</MyText>
                </View>
              );
            }}
          />
          <TouchableOpacity
            onPress={() => {
              setPlayersModal(true);
            }}
            style={styles.newGameButton}
          >
            <MyText style={styles.newGameButtonText}>New Game</MyText>
          </TouchableOpacity>
        </>
      ) : (
        <View style={styles.container}>
          <MyText style={{ color: "#f2f2f2" }}>
            You must be logged in order to play a multiplayer game!
          </MyText>
        </View>
      )}
      <Modal
        style={{ margin: 0 }}
        isVisible={playersModal}
        backdropOpacity={0.75}
        avoidKeyboard
        onBackButtonPress={() => {
          setPlayersModal(false);
        }}
        onBackdropPress={() => {
          setPlayersModal(false);
        }}
      >
        <PlayersModal
          onItemPress={(username) => {
            setPlayersModal(false);
            navigation.navigate("MultiplayerGame", { invitee: username });
          }}
        />
      </Modal>
    </GradientBackground>
  );
}
