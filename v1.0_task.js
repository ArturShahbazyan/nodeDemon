// Map implementation

const nativeMap = (list, iterate) => {
  let newList = [];
  for (let i = 0; i < list.length; i++) {
    newList = [...newList, iterate(list[i], i, list)];
  }
  return newList;
};

const numberLsit = nativeMap([1, 2, 3, 4, 5], (currentValue) => {
  return currentValue * 2;
});

function _map(iterate) {
  let newList = [];
  for (let i = 0; i < this.length; i++) {
    newList = [...newList, iterate(this[i], i, this)];
  }
  return newList;
}

Array.prototype._map = _map;

let numberList = [1, 2, 5, 6, 20]._map(function (currentValue) {
  return currentValue * 3;
});

console.log(numberList);

// Slice implementation

const nativeSlice = (list, begin, end) => {
  let newList = [];
  let pos = list.length;

  const minusBegin = begin < 0;
  const minusEnd = end < 0;
  const plusEnd = end >= 0;
  const plusBegin = begin >= 0;

  if (plusEnd && plusBegin) {
    pos = end;
    if (end > list.length) {
      pos = list.length;
    }
  }

  if (minusBegin && minusEnd) {
    begin = list.length + begin;
    pos = list.length + end;
    if (begin < end) {
      pos = list.length + end;
      begin = 0;
    }
  }

  if (minusBegin && plusEnd) {
    pos = end;
    if (-begin < list.length) {
      begin = list.length + begin;
    } else {
      begin = 0;
    }
    if (end > list.length) {
      pos = list.length;
    }
  }

  if (minusEnd && plusBegin) {
    pos = list.length + end;
  }

  for (let i = begin; i < pos; i++) {
    newList = [...newList, list[i]];
  }

  return newList;
};

const numberLsit = nativeSlice([1, 2, 3, 4, 5], -2, 100);

// Flat implementation

const nativeFlat = (list, depth = 1) => {
  let flattenList = [];

  for (let i = 0; i < list.length; i++) {
    if (Array.isArray(list[i]) && depth > 0) {
      depth--;

      let arr = nativeFlat(list[i], depth);

      for (let j = 0; j < arr.length; j++) {
        if (j in arr) {
          flattenList = [...flattenList, arr[j]];
        }
      }
    } else if (i in list) {
      flattenList = [...flattenList, list[i]];
    }
  }

  return flattenList;
};

console.log(nativeFlat([1, [2, 3, [4]], [[5, 6], 7]], 3));
