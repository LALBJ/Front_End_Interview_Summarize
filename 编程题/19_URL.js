const judge = (url) => {
  try {
    new URL(url);
    return true;
  } catch (err) {
    return false;
  }
};

console.log(judge("http://www.baidu.com"));
console.log(judge("11"));
