
const usersArray = [
    {
        id: 1,
        first_name: 'Jeanette',
        last_name: 'Penddreth',
        email: 'jpenddreth0@census.gov',
        gender: 'female',
        ip_address: '26.58.193.2',
    },
    {
        id: 2,
        first_name: 'Petr',
        last_name: 'Jackson',
        email: 'gfrediani1@senate.gov',
        gender: 'male',
        ip_address: '229.179.4.212',
    },
    {
        id: 3,
        first_name: 'Vasy',
        last_name: 'Teror',
        email: 'gfrediani1@senate.gov',
        gender: 'none',
        ip_address: '229.179.4.212',
    },
];

const divideUserByGender = (usersList) => {
    return usersList.reduce((result, user) => {

        const {first_name, last_name, ...othersData} = user

        const updatedUser = {fullName: `${first_name} ${last_name}`, ...othersData,}
        result[updatedUser.gender] = !result[updatedUser.gender]
            ? [updatedUser]
            : [...result[updatedUser.gender], updatedUser]
        return result
    }, {})
}