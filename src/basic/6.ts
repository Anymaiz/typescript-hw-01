interface Address {
    city: string;
    country: string;
  }
  
  interface User {
    name: string;
    age: number;
    email: string;
    address?: Address;
  }
  
  const mango: User = {
    name: 'Mango',
    age: 30,
    email: 'john@example.com',
    address: {
      city: 'New York',
      country: 'USA',
    },
  };
  
  const poly: User = {
    name: 'Mango',
    age: 30,
    email: 'john@example.com',
  };
  
  
  const users: User[] = [mango, poly];
  
  
  users.forEach((user, index) => {
    console.log(`User ${index + 1}:`);
    console.log(`  Name: ${user.name}`);
    console.log(`  Age: ${user.age}`);
    console.log(`  Email: ${user.email}`);
    if (user.address) {
      console.log(`  Address: ${user.address.city}, ${user.address.country}`);
    } else {
      console.log(`  Address: not provided`);
    }
  });