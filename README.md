# Kitten Application

React Native application that uses [placekitten.com](http://placekitten.com/) to dipslay cat images and generate random names to them (made using [Expo](https://docs.expo.io/))

## How to run this project:
- Clone the repository
- `npm install`
- `npm start`
- In Expo developer tools select `Run in web browser`

## About this project:
- It uses Expo's managed workflow example with two tabs using `react-navigation`
- There is two tabs (routes, screens) - `Kitten list` ([`TabOneScreen.tsx`](https://github.com/dkarolis/kitten-application/blob/main/screens/TabOneScreen.tsx)) and `KittenView` ([`TabTwoScreen.tsx`](https://github.com/dkarolis/kitten-application/blob/main/screens/TabOneScreen.tsx))
- It includes a new component `CatCard`([`CatCard.tsx`](https://github.com/dkarolis/kitten-application/blob/main/components/CatCard.tsx))
- Application allows user to specify how many items to show in a page (either select a button with a number or write a specific number in an input)
- Application shows an icon and text "Loading" while any image is loading

![image](https://user-images.githubusercontent.com/81879988/113589048-95797780-9639-11eb-867f-6549001e4d59.png) ![image](https://user-images.githubusercontent.com/81879988/113589158-b6da6380-9639-11eb-9d57-1b5fb9964840.png)
