import {faker} from '@faker-js/faker';
import { Task } from '../types/Task';

// Define a function to generate a single Task object
const generateTask = ():Task => {
  return {
    title: faker.lorem.word(), // Generate a random title using Faker.js
    counter: 0
  };
};

// Define a function to generate an array of Task objects
const generateTasks = (count:number):Task[] => {
  const tasks = [];
  for (let i = 0; i < count; i++) {
    tasks.push(generateTask());
  }
  return tasks;
};

export default generateTasks