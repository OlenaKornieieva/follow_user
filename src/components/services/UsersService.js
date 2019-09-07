export default class UsersService {

    users = [
        {id: 100, name: 'Rae Mccoy', email: 'test1@gmail.com', followers: 2, group_id: 1000, group_name: 'The Lane Post'},
        {id: 101, name: 'Zahid Galindo', email: 'test2@gmail.com', followers: 5, group_id: 1001, group_name: 'The Australia Times'},
        {id: 102, name: 'Reuben Watson', email: 'test3@gmail.com', followers: 1, group_id: 1001, group_name: 'The Australia Times'},
        {id: 103, name: 'Gurdeep Cowan', email: 'test4@gmail.com', followers: 0, group_id: 1003, group_name: 'The Derek Journal'},
        {id: 104, name: 'Brody Orozco', email: 'test5@gmail.com', followers: 3, group_id: 1004, group_name: 'The Derek Lane Today'},
        {id: 105, name: 'Wren Mitchell', email: 'test6@gmail.com', followers: 3, group_id: 1000, group_name: 'The Lane Post'},
        {id: 106, name: 'Jason Mellor', email: 'test7@gmail.com', followers: 7, group_id: 1002, group_name: 'The Daily Derek'},
        {id: 107, name: 'Precious Ellwood', email: 'test8@gmail.com', followers: 2, group_id: 1002, group_name: 'The Daily Derek'},
        {id: 108, name: 'Nisha Ashton', email: 'test9@gmail.com', followers: 1, group_id: 1004, group_name: 'The Derek Lane Today'},
        {id: 109, name: 'Denzel Blaese', email: 'test10@gmail.com', followers: 5, group_id: 1003, group_name: 'The Derek Lane Today'},
        {id: 110, name: 'Taylor Murphy', email: 'test11@gmail.com', followers: 4, group_id: 1004, group_name: 'The Derek Lane Today'},
    ];

    getUsers() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.users)
            }, 700)
        })
    };
}
