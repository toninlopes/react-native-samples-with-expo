import { useEffect } from "react";
import {
  Text,
  StyleSheet,
  Platform,
} from "react-native";
import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device'
import { Screen, Spacer, Button } from "@components";
import { useCountdownInForeground } from '@hooks';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

const Composition: React.FC = () => {  
  const { currentSecond, isCountdownInProgress, start } = useCountdownInForeground({
    seconds: 5,
    onStart() {
      Notifications.scheduleNotificationAsync({
        content: {
          title: "Time's up!",
          body: 'Your test strip reaction might be done. 👶',
          // data: { data: 'goes here' },
          sound: 'notification.wav',
        },
        trigger: { seconds: 5 },
      });
    },
  });

  useEffect(() => {
    registerForPushNotificationsAsync();

  }, []);

  return (
    <Screen>
      <Screen.Header title='Countdown with Push' />
      <Spacer />
      <Text style={styles.text}>{currentSecond}</Text>
      <Spacer />
      
      <Button onPress={start} disabled={isCountdownInProgress}>
        <Button.Icon name="timer-outline" />
        <Button.Title>{'Start'}</Button.Title>
      </Button>

    </Screen>
  );
};

async function registerForPushNotificationsAsync() {
  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
  } else {
    alert('Must use physical device for Push Notifications');
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 36,
    alignSelf: 'center',
  },
});

export default Composition;