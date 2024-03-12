import {useEffect, useRef, useState} from 'react';
import {AppState} from 'react-native';

type CountdownInForegroundProps = {
  seconds: number;
  onStart?: () => void;
  onFinish?: () => void;
};

const useCountdownInForeground = ({
  seconds,
  onStart,
  onFinish,
}: CountdownInForegroundProps) => {
  const appState = useRef(AppState.currentState);
  const intervalTimer = useRef<NodeJS.Timer>();
  const countdown = useRef<number>(1);
  const suspendedDatetime = useRef<string>('');
  const [currentSecond, setCurrentSeconds] = useState(seconds);
  const [isCountdownInProgress, setCountdownInProgress] = useState(false);

  useEffect(() => {
    const appStateEvent = (nextAppState: any) => {
      /**
       * App has come to the foreground.
       */
      if (appState.current.match(/background/) && nextAppState === 'active') {
        const suspendedDate = new Date(suspendedDatetime.current);
        const secondsInBackground = Math.abs(
          (new Date().getTime() - suspendedDate.getTime()) / 1000,
        );
        const newSeconds = Math.floor(countdown.current + secondsInBackground);
        countdown.current = newSeconds;
      }

      appState.current = nextAppState;

      /**
       * App is being sent to foreground.
       */
      if (nextAppState.match(/background/)) {
        const suspendedDate = new Date();
        suspendedDatetime.current = suspendedDate.toString();
      }
    };
    const subscription = AppState.addEventListener('change', appStateEvent);

    return () => {
      subscription.remove();
      _stop();
    };
  }, []);

  const _start = () => {
    if (onStart) {
      onStart();
    }
    _restart(seconds);
    setCountdownInProgress(true);
  };

  const _restart = (newSeconds: number) => {
    _stop();
    countdown.current = 1;
    intervalTimer.current = setInterval(() => {
      const sec = newSeconds;
      const nSec = sec - countdown.current++;
      if (nSec <= 0) {
        setCurrentSeconds(0);
        _onFinished();
        return;
      }
      setCurrentSeconds(nSec);
    }, 1000);
  };

  const _reset = () => {
    _stop();
    setCurrentSeconds(seconds);
  };

  const _stop = () => {
    if (intervalTimer.current) {
      clearInterval(intervalTimer.current);
    }
    setCountdownInProgress(false);
  };

  const _onFinished = () => {
    _stop();
    if (onFinish) {
      onFinish();
    }
  };

  return {
    start: _start,
    stop: _stop,
    reset: _reset,
    currentSecond,
    isCountdownInProgress,
  };
};

export default useCountdownInForeground;
