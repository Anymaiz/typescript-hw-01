function showMessage(message: string): void {
    console.log(message);
  }
  
  function calc(num1: number, num2: number): number {
    return num1 + num2;
  }
  
  function customError(): never {
    throw new Error('Error');
  }
  
  
  showMessage('Hello, TypeScript!'); 
  console.log(calc(7, 3));
  // customError();