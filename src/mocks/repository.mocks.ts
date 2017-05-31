import { Repository } from '../models/repository.interface';
import { USER_LIST } from './user.mocks';

const repositoryList: Repository[] = [
    {
        name: 'Ionic 3 Camera',
        description: 'This is a repository that shows the usage of the Camera finctionility within ionic 3',
        owner: USER_LIST[0]
    },
    {
        name: 'Ionic 3 SMS',
        description: 'This is a repository that shows the usage of the SMS finctionility within ionic 3',
        owner: USER_LIST[0]
    },
    {
        name: 'Ionic 3 Geolocation',
        description: 'This is a repository that shows the usage of the Geolocation finctionility within ionic 3',
        owner: USER_LIST[1]
    },
    {
        name: 'Ionic 3 Vibration',
        description: 'This is a repository that shows the usage of the Vibration finctionility within ionic 3',
        owner: USER_LIST[1]
    },
];

export const REPOSITORY_LIST = repositoryList;