let wordSplit = (item) => {
  //使用Object.keys()或Object.entries()来迭代对象的属性或属性值
  //解决对象不可迭代
  for(let x of Object.keys(item.details)){
    item.details[x] = item.details[x].split('|');
  }
  return item;
}

export {wordSplit}