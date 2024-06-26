import React, { ReactElement, useEffect, useState, useRef } from "react";
import {
    View,
    Alert,
    TextInput as NativeTextInput,
    FlatList,
    ActivityIndicator
} from "react-native";
import { GradientBackground, MyText, TextInput } from "../../../components";
import { API, graphqlOperation } from "aws-amplify";
import { searchPlayers } from "../multiplayer-home.graphql";
import { GraphQLResult } from "@aws-amplify/api";
import { searchPlayersQuery } from "../../../API";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "./players-modal.styles";


type PlayersListType = Exclude<searchPlayersQuery["searchPlayers"], null>["items"];

type PlayersModalProps = {
    onItemPress: (username: string) => void;
};

export default function PlayersModal({ onItemPress }: PlayersModalProps): ReactElement {
    const [players, setPlayers] = useState<PlayersListType>(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [submittedQuery, setSubmittedQuery] = useState("");
    const [loading, setLoading] = useState(false);

    const inputRef = useRef<NativeTextInput | null>(null);

    const fetchPlayers = async (searchString: string) => {
        setLoading(true);
        setSubmittedQuery(searchString);
        try {
            const players = (await API.graphql(
                graphqlOperation(searchPlayers, {
                    limit: 10,
                    searchString
                })
            )) as GraphQLResult<searchPlayersQuery>;
            if (players.data?.searchPlayers) {
                setPlayers(players.data.searchPlayers.items);
            }
        } catch (error) {
            Alert.alert("Error!", "An error has occurred. Please try again later!");
        }
        setLoading(false);
    };

    useEffect(() => {
        setTimeout(() => {
            inputRef.current?.focus();
        }, 150);
    }, []);

    return (
        <View style={styles.modalContainer}>
            <GradientBackground>
                <View style={styles.searchContainer}>
                    <TextInput
                        value={searchQuery}
                        onChangeText={text => setSearchQuery(text)}
                        onSubmitEditing={() => {
                            fetchPlayers(searchQuery);
                        }}
                        ref={inputRef}
                        style={{ borderBottomWidth: 0, backgroundColor: "#2a0080" }}
                        placeholder="Type to search by username or name."
                        returnKeyType="search"
                    />
                </View>
                <View style={{ flex: 1 }}>
                    {loading ? (
                        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                            <ActivityIndicator color={"#2a0080"} />
                        </View>
                    ) : (
                        <FlatList
                            contentContainerStyle={{ padding: 20 }}
                            data={players}
                            renderItem={({ item }) => {
                                return (
                                    <TouchableOpacity
                                        onPress={() => {
                                            if (item) {
                                                onItemPress(item?.username);
                                            }
                                        }}
                                        style={styles.playerItem}
                                    >
                                        <MyText style={{ color: "#2a0080", fontSize: 17 }}>
                                            {item?.name}
                                        </MyText>
                                        <MyText weight="400" style={{ color: "#2a0080" }}>
                                            {item?.username}
                                        </MyText>
                                    </TouchableOpacity>
                                );
                            }}
                            keyExtractor={player => player?.username || `${new Date().getTime()}`}
                            ListEmptyComponent={() => {
                                return (
                                    <View>
                                        <MyText style={{ color: "#2a0080" }}>
                                            {submittedQuery
                                                ? "No results found!"
                                                : "Type to search by name or username!"}
                                        </MyText>
                                    </View>
                                );
                            }}
                        />
                    )}
                </View>
            </GradientBackground>
        </View>
    );
}
