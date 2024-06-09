import { Audio } from "expo-av";
import { useEffect, useRef } from "react";
import * as Haptics from 'expo-haptics'

type SoundType = 'player1' | 'player2' | 'win' | 'loss' | 'draw';

export default function useSounds(): (sound: SoundType) => void {
    const popSoundRef = useRef<Audio.Sound | null>(null);
    const popSoundRef2 = useRef<Audio.Sound | null>(null);
    const popSoundRefWin = useRef<Audio.Sound | null>(null);
    const popSoundRefLoss = useRef<Audio.Sound | null>(null);
    const popSoundRefDraw = useRef<Audio.Sound | null>(null);
   
    const playSound = (sound : SoundType): void => {
        const soundMap = {
            player1 : popSoundRef,
            player2 : popSoundRef2,
            win : popSoundRefWin,
            loss : popSoundRefLoss,
            draw : popSoundRefDraw
        }
        try{
            soundMap[sound].current?.replayAsync();
            switch (sound) {
                case 'player1':
                    break;
                case 'player2': Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);  
                    break;
                case 'win': Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
                    break;
                case 'loss': Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
                    break;
                case 'draw': Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);       
                    break;
                default:
                    break;
            
            }
        }catch(error) {
            console.log('SOUND ERROR : ' + error)
        }
    }    

    useEffect(() => {
        const popSoundObject = new Audio.Sound();
        const popSoundObject2 = new Audio.Sound();
        const popSoundObjectWin = new Audio.Sound();
        const popSoundObjectLoss = new Audio.Sound();
        const popSoundObjectDraw = new Audio.Sound();
      


        const loadSounds = async () => {
          try {
            await popSoundObject.loadAsync(require("../../../assets/sounds/pop_1.wav"));
            popSoundRef.current = popSoundObject;
          } catch (error) {
            console.log("Error loading pop_1.wav: " + error);
          }
      
          try {
            await popSoundObject2.loadAsync(require("../../../assets/sounds/pop_2.wav"));
            popSoundRef2.current = popSoundObject2;
          } catch (error) {
            console.log("Error loading pop_2.wav: " + error);
          }
      
          try {
            await popSoundObjectWin.loadAsync(require("../../../assets/sounds/win.mp3"));
            popSoundRefWin.current = popSoundObjectWin;
          } catch (error) {
            console.log("Error loading win.mp3: " + error);
          }
      
          try {
            await popSoundObjectLoss.loadAsync(require("../../../assets/sounds/loss.mp3"));
            popSoundRefLoss.current = popSoundObjectLoss;
          } catch (error) {
            console.log("Error loading loss.mp3: " + error);
          }
      
          try {
            await popSoundObjectDraw.loadAsync(require("../../../assets/sounds/draw.mp3"));
            popSoundRefDraw.current = popSoundObjectDraw;
          } catch (error) {
            console.log("Error loading draw.mp3: " + error);
          }
        };
      
        loadSounds();
      
        return () => {
          popSoundObject.unloadAsync();
          popSoundObject2.unloadAsync();
          popSoundObjectWin.unloadAsync();
          popSoundObjectLoss.unloadAsync();
          popSoundObjectDraw.unloadAsync();
        };
      }, []);

return playSound;
}