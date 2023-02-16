export const navigateTo = (linkData, isReplace = false) => {
  if (isReplace) {
    uni.redirectTo(linkData);
  } else {
  console.log('sadsandkjasdkjjsl')

    uni.navigateTo(linkData);
  }
}