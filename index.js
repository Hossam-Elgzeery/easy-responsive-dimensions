import { useState } from "react";
import { Dimensions, PixelRatio } from "react-native";

/**
 * a function that return responsive width for a component
 *
 * @param {number} value - percentage of width
 * @returns {number} responsive width of the window excludeing size of any additional notches
 */
export const RWidth = (value) => (Dimensions.get("window").width * value) / 100;

/**
 * a function that return responsive height for a component
 *
 * @param {number} value - percentage of height
 * @returns {number} responsive height of the window excludeing the size used by the status bar (if not translucent) and bottom navigation bar
 */

export const RHeight = (value) =>
  (Dimensions.get("window").height * value) / 100;

/**
 * a function that return responsive width for a component
 *
 * @param {number} value - percentage of width
 * @returns {number} responsive width of the screen including size of any additional notches
 */

export const RAWidth = (value) =>
  (Dimensions.get("screen").width * value) / 100;

/**
 * a function that return responsive height for a component
 *
 * @param {number} value - percentage of height
 * @returns {number} responsive height of the screen including the size used by the status bar (if not translucent) and bottom navigation bar
 */
export const RAHeight = (value) =>
  (Dimensions.get("screen").height * value) / 100;

/**
 * a function that return responsive font size
 *
 * @param {number} value - percentage of the font size
 * @returns {number} responsive font size
 */

export const RFSize = (value) => value * PixelRatio.get();

/**
 *  a function that return both responsive and relative dimensions and font size
 * @param {number} heightRate - percentage of height
 * @param {number} widthRate - percentage of width
 * @param {number} fontSize - percentage of font size (Optional)
 * @returns {Object} {Width : excluding notches , Height : excluding notches , AWidth : including notches , AHeight : including notches , FSize : font size }
 */
export default getResDimensions = (heightRate, widthRate, fontSize = 10) => {
  const Width = RWidth(widthRate);
  const Height = RHeight(heightRate);
  const AWidth = RAWidth(widthRate);
  const AHeight = RAHeight(heightRate);
  const FontSize = RFSize(fontSize);

  return { Width, Height, AWidth, AHeight, FontSize };
};
