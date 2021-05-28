<div align="center">
  
# :iphone: Easy Responsive Dimensions :fist:

:blue_book: **[Description](#description)**

:star: **[What is new ?](#what-is-new-)**

:zap: **[Installation](#installation)**

:key: **[Usage](#usage)**

:page_facing_up: **[Examples](#examples)**

[![npm](https://img.shields.io/npm/dw/easy-responsive-dimensions)]()
[![npm](https://img.shields.io/npm/v/easy-responsive-dimensions?color=green&label=Latest%20Version)]()

[![Twitter Follow](https://img.shields.io/twitter/follow/HossamElgzeery?label=Follow%20Me&style=social)](https://www.twitter.com/HossamElgzeery)

</div>

# Description

easy responsive dimensions is a react native package that helps you to make responsive UI components and responsive font size whose it's size can be changed according to the size of the device screen

# What is new ?

- **version 0.0.3** : adding responsive font size , and Documentation comments for easy usage

# Installation

```
#npm
npm install easy-responsive-dimensions

#yarn
yarn add easy-responsive-dimensions

```

# Usage

- you just need to pass the percentage of the screen height and width to generate the correct size (height, width or both) of the component

  - you have two types of height and width
    - screen height "**AHeight**" and width "**AWidth**" which include the size used by the status bar (if not translucent) and bottom navigation bar
    - window height "**Height**" and width "**Width**" which exclude the size used by the status bar (if not translucent) and bottom navigation bar

- for responsive font size you just need to pass the percentage to "**RFSize**" function

# Examples

## Package Import :

```javascript
import getResDimensions, {
  RAHeight,
  RAWidth,
  RHeight,
  RWidth,
  RFSize,
} from "easy-responsive-dimensions";
```

## First Example :

```javascript
import getResDimensions from "easy-responsive-dimensions";

const ResponsiveComponent = () => {
  const { Height, Width, AHeight, AWidth, FontSize } = getResDimensions(
    50,
    50,
    10
  );
  return (
    <View style={{ width: Width, height: Height, backgroundColor: "grey" }}>
      <Text style={{ fontSize: FontSize }}>Hello</Text>
    </View>
  );
};
```

## Second Example :

```javascript
import {
  RAHeight,
  RAWidth,
  RHeight,
  RWidth,
  RFSize,
} from "easy-responsive-dimensions";

const ResponsiveComponent = () => {
  return (
    <View style={styles.responsiveComponentStyle}>
      <Text style={styles.textStyles}>Hello</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  responsiveComponentStyle: {
    height: RHeight(80),
    width: RWidth(50),
    backgroundColor: "grey",
  },
  textStyles: {
    fontSize: RFSize(10),
  },
});
```
