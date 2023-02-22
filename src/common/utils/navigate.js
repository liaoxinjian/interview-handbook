export const navigateTo = (linkData, isReplace = false) => {
  if (isReplace) {
    uni.redirectTo(linkData);
  } else {
    uni.navigateTo(linkData);
  }
}