function merge<T extends object, U extends object>(objA: T, objB: U): T & U {
    return Object.assign({}, objA, objB);
  }
  
  const user = { name: 'Anna' };
  const details = { age: 25, city: 'Prague' };
  
  
  const merged = merge(user, details);
  console.log(merged);