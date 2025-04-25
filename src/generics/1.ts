import axios from 'axios';

async function fetchData<T>(url: string): Promise<T> {
  try {
    const response = await axios.get<T>(url);
    return response.data;
  } catch (error: any) {
    throw new Error(`Error fetching from ${url}: ${error.message}`);
  }
}

type Task = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

async function checkTask() {
  const task = await fetchData<Task>('https://jsonplaceholder.typicode.com/todos/1');
  console.log(task);
}

checkTask();