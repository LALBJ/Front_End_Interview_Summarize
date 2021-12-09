const deepCopy = (obj, map = new Map()) => {
  if (map.has(obj)) return obj;
  if (typeof obj !== "object" || !obj) {
    // 当结果为基础值或者Null时直接返回
    return obj;
  }
  const newObj = Array.isArray(obj) ? [] : {};
  for (let key in newObj) {
  }
};
