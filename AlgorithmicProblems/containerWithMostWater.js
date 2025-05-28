function containerWithMostWater(height) {
  let result = [];

  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    let value = Math.min(height[left], height[right]) * (right - left);

    result.push(value);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  const finalResult = result.sort((a, b) => b - a);

  return finalResult[0];
}

console.log(containerWithMostWater([2, 8, 6, 3, 5, 4, 7]));
