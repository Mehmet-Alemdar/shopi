const getUniqueBasketProductsWithCount = (basketProducts) => {
  const occurrences = {};
  
  basketProducts.forEach(item => {
    const key = JSON.stringify(item);
    occurrences[key] = occurrences[key] ? occurrences[key] + 1 : 1;
  });

  const result = Object.keys(occurrences).map(key => ({
    ...JSON.parse(key),
    count: occurrences[key],
  }));

  return [...new Set(result)]
}

const getTotalPrice = (basketProducts) => {
  const total = basketProducts.reduce((acc, item) => {
    return acc + item.price * item.count;
  }, 0);

  return total;
}

module.exports = { getUniqueBasketProductsWithCount, getTotalPrice }