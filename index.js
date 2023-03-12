

function MyRedisCache() {}
MyCustomCache.prototype.set = function (key, config) {
  // `key` [string] - a unique cache key
  // `config` [object (ProjectConfig)] - configcat's cache config item
  // insert your cache write logic here
};
MyCustomCache.prototype.get = function (key) {
  // `key` [string] - a unique cache key
  // insert your cache read logic here
};

export default MyRedisCache;