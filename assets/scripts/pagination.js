function productListView(products, n, k) {
  return products.slice(n * (k - 1), n * k);
}

export default productListView;
