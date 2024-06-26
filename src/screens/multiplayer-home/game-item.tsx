import React, { ReactElement, useEffect, useState, useRef } from "react";
import { TouchableOpacity, Animated } from "react-native";
import { useAuth } from "../../contexts/auth-context";
import { PlayerGameType } from "./multiplayer-home.graphql";
import styles from "./multiplayer-home.styles";
import { onUpdateGameById } from "../../utils";
import { API, graphqlOperation } from "aws-amplify";
import Observable from "zen-observable";
import { MyText } from "../../components";

type GameItemProps = {
    playerGame: PlayerGameType;
    onPress: () => void;
};

export default function GameItem({
    playerGame: playerGameProp,
    onPress
}: GameItemProps): ReactElement | null {
    const { user } = useAuth();
    const [playerGame, setPlayerGame] = useState<PlayerGameType>(playerGameProp);
    const animationRef = useRef<Animated.Value>(new Animated.Value(0));

    const getResult = (playerGame: PlayerGameType): "win" | "loss" | "draw" | false => {
        if (!playerGame || !user) return false;
        const game = playerGame.game;
        if (game.status !== "FINISHED") return false;
        const opponent = game?.players?.items?.find(
            playerGame => playerGame?.player.username !== user.username
        );
        if (game.winner === user.username) return "win";
        if (game.winner === opponent?.player.username) return "loss";
        if (game.winner === null) return "draw";
        return false;
    };

    if (!user || !playerGame) return null;
    const game = playerGame?.game;
    const result = getResult(playerGame);
    const opponent = game?.players?.items?.find(
        playerGame => playerGame?.player.username !== user.username
    );

    useEffect(() => {
        if (game && (game.status === "REQUESTED" || game.status === "ACTIVE")) {
            const gameUpdates = (API.graphql(
                graphqlOperation(onUpdateGameById, {
                    id: game.id
                })
            ) as unknown) as Observable<{ [key: string]: any }>;

            const subscription = gameUpdates.subscribe({
                next: ({ value }) => {
                    const newGame = value.data.onUpdateGameById;
                    if (newGame) {
                        setPlayerGame({
                            ...playerGame,
                            ["game"]: { ...playerGame?.game, ...newGame }
                        });
                        if (newGame.status === "FINISHED") {
                            subscription.unsubscribe();
                        }
                        Animated.sequence([
                            Animated.timing(animationRef.current, {
                                toValue: 1,
                                duration: 500,
                                useNativeDriver: false
                            }),
                            Animated.delay(1000),
                            Animated.timing(animationRef.current, {
                                toValue: 0,
                                duration: 500,
                                useNativeDriver: false
                            })
                        ]).start();
                    }
                }
            });
            return () => {
                subscription.unsubscribe();
            };
        }
    }, []);

    return (
        <TouchableOpacity
            onPress={() => {
                onPress();
            }}
            style={styles.item}
        >
            <Animated.View
                style={[
                    styles.itemBackground,
                    {
                        backgroundColor: animationRef.current.interpolate({
                            inputRange: [0, 1],
                            outputRange: ["#2a0080", "#e6e6ff"]
                        })
                    }
                ]}
            />
            <MyText style={styles.itemTitle}>
                {opponent?.player.name} ({opponent?.player.username})
            </MyText>
            {(game?.status === "REQUESTED" || game?.status === "ACTIVE") && (
                <MyText style={{ color: "#e6e6ff", textAlign: "center" }}>
                    {game.turn === user.username
                        ? "Your Turn!"
                        : `Waiting for ${opponent?.player.username}`}
                </MyText>
            )}
            {result && (
                <MyText style={{ color: "#2a0080"[result], textAlign: "center" }}>
                    {result === "win" && "You Won!"}
                    {result === "loss" && "You Lost!"}
                    {result === "draw" && "It's a draw!"}
                </MyText>
            )}
        </TouchableOpacity>
    );
}
