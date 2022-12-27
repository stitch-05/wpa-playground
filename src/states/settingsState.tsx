import { atom } from 'recoil';
import { localStorageEffect } from '../utils/LocalStorageUtils';

const themeState = atom({
  key: 'Theme',
  default: 'light',
  effects: [
    localStorageEffect('theme')
  ]
})

export {
  themeState
};