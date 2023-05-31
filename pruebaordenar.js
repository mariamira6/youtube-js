// function orderNums(nums) {
//   let number = nums[0];
//   for (let i = 0; i < nums.length - 1; i++) {
//     if (nums[i] < nums[0]) {
//       number = nums[i];
//       nums[i] = nums[0];
//     }
//   }
//   console.log(nums);
//   return nums;
// }

// orderNums(3, 25, 3, 7, 45);

function putFirst(numbers) {
  let min = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
      numbers[i] = numbers[0];
      numbers[0] = min;
    }
  }
  return numbers
}

function putFirst2(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length - 1; j++) {
      if (numbers[j] > numbers[j + 1]) {
        let aux = numbers[j];
        numbers[j] = numbers[j + 1];
        numbers[j + 1] = aux;
      }
    }

  }
  return numbers
}
console.log(putFirst2([3, 4, 25, -6, 5]));


function putFirst3(numbers) {
  for (let j = 0; j < numbers.length; j++) {
    let min = numbers[j];
    for (let i = j; i < numbers.length; i++) {
      if (numbers[i] < min) {
        min = numbers[i];
        numbers[i] = numbers[j];
        numbers[j] = min;
      }
    }
  }
  return numbers
}
console.log(putFirst3([34, -1, 54, 2]))


function putFirst4(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    let min = numbers[i];
    let pos = i;
    for (let j = i; j < numbers.length; j++) {
      if (numbers[j] < min) {
        min = numbers[j];
        pos = j;
      }
    }
    // numbers[pos] = numbers[i];
    // numbers[i] = min;
    let aux = numbers[i];
    numbers[i] = numbers[pos];
    numbers[pos] = aux;
  }
  return numbers;
}

console.log(putFirst4([3, 54, 7, 5, 2]));
