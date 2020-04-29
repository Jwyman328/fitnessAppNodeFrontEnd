function createHttpRequestConfiguration(token) {
  return {
    data: { Authorization: `Bearer ${token}` },
    headers: { Authorization: `Bearer ${token}` }
  };
}
export { createHttpRequestConfiguration };
