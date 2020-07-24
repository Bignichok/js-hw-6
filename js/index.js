import users from "./users.js";
console.table(users);

//=============task 1=============

const getUserNames = (users) => {
  const userNames = users.map((user) => user.name);
  return userNames;
};
console.log(getUserNames(users));

//==============task 2==============
const getUsersWithEyeColor = (users, color) => {
  const userWithEyeColor = users.filter((user) => user.eyeColor === color);
  return userWithEyeColor;
};
//  if (user.eyeColor === color) {
//    return user;
//  }
console.log(getUsersWithEyeColor(users, "blue"));

//+++++++++++++++task 3+++++++++++++++

const getUsersWithGender = (users, gender) => {
  let userNames = [];
  users.filter((user) => {
    if (user.gender === gender) {
      userNames.push(user.name);
    }
  });
  return userNames;
};
console.log(getUsersWithGender(users, "male"));

// ===============task 4===============

const getInactiveUsers = (users) => {
  const inactiveUsers = users.filter((user) => !user.isActive);
  return inactiveUsers;
};

console.log(getInactiveUsers(users));

//=========task 5=========
const getUserWithEmail = (users, email) => {
  const userWithEmail = users.find((user) => user.email === email);
  return userWithEmail;
};

console.log(getUserWithEmail(users, "shereeanthony@kog.com")); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, "elmahead@omatom.com")); // {объект пользователя Elma Head}

// ==========taks 6==========
const getUsersWithAge = (users, min, max) => {
  const userWithAge = users.filter((user) => user.age > min && user.age < max);
  return userWithAge;
};

console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

//============task 7 ============
const calculateTotalBalance = (users) => {
  const totalBalance = users.reduce((acc, user) => acc + user.balance, 0);
  return totalBalance;
};

console.log(calculateTotalBalance(users)); // 20916

//=============task 8=============

const getUsersWithFriend = (users, friendName) => {
  let userWithFriends = [];
  users.filter((user) => {
    if (user.friends.includes(friendName)) {
      return userWithFriends.push(user.name);
    }
  });
  return userWithFriends;
};

console.log(getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]

//=============task 9=============

const getNamesSortedByFriendsCount = (users) => {
  return {
    ...users
      .sort((prev, next) => {
        return prev.friends.length - next.friends.length;
      })
      .map((user) => user.name),
  };
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

//=============task 10=============
const getSortedUniqueSkills = (users) => {
  let userSkills = users.reduce((skills, user) => {
    skills.push(...user.skills);

    return skills;
  }, []);
  let skillsArr = [];
  userSkills.forEach((skill) => {
    if (!skillsArr.includes(skill)) {
      skillsArr.push(skill);
    }
  });
  return skillsArr;
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum',
//'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
console.table(users);
