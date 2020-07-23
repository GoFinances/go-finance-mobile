// import { useState, useEffect, Dispatch, SetStateAction, useCallback } from 'react'
// import AsyncStorage from '@react-native-community/async-storage';
// type Response<T> = [
//   T,
//   Dispatch<SetStateAction<T>>
// ]

// function usePersistedState<T>(key: string, initialState: T): Response<T> {

//   const [state, setState] = useState(() => {

//     async function getState() {
//       const storageValue = await AsyncStorage.getItem(key);
//       if (storageValue) {
//         return JSON.parse(storageValue);
//       } else {
//         return initialState;
//       }
//     }

//     getState();

//   });

//   useEffect(() => {
//     async function merge(key: string, state: void) {
//       await AsyncStorage.setItem(key, JSON.stringify(state))
//     }

//     merge(key, state);
//   }, [key, state])

//   return [state, setState];

// }

// export default usePersistedState;
