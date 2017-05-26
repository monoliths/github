import { User } from '../models/user.interface';

const userList: User[] = [
    {
        name: 'monoliths',
        company: 'long',
        location: 'sacramento',
        bio: 'bio stuff goes here',
        avatar_url: 'https://s.gravatar.com/avatar/659fd4f15bee7889b63f874ed0cd3df2?s=80',
        email: 'gerald2557@gmail.com'
    },
    {
        name: 'poopinthepants',
        company: 'comp',
        location: 'San Francisco',
        bio: 'bio stuff goes here',
        avatar_url: 'https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-512.png',
        email: 'pooppeddfd@gmail.com'
    }
];

export const USER_LIST = userList;