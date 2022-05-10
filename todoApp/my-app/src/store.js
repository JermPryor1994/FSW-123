import {v4 as uuidv4} from 'uuid'; 

export const storeTodos = [
    {
        id: uuidv4(),
        text: 'Go To Gym',
        isComplete: true
    },
    {
        id: uuidv4(),
        text: 'Do Laundry',
        isComplete: false
    },
    {
        id: uuidv4(),
        text: 'Go To Store',
        isComplete: false
    },
    {
        id: uuidv4(),
        text: 'Feed Animals',
        isComplete: true
    }
]