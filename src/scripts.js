let currentUser;
let allUsers = new UserRepo(userData);
const displayUser = document.querySelector('#displayUser');
const userStepGoal = document.querySelector('#stepGoal');
const friendsContainer = document.querySelector('#friendContainer');

window.addEventListener('load', getRandomUser);
window.addEventListener('load', getFriends);

function getRandomUser() {
  currentUser = new User(allUsers.returnUsersData(getRandomIndex(userData)));
  displayUser.innerText = currentUser.name;
  userStepGoal.innerText = ` Step Goal: ${currentUser.dailyStepGoal}`;
};

function getFriends() {
  currentUser.friends.forEach(friend => {
    const foundFriend = userData.find(person => friend === person.id);
    let displayFriendData = `<article class="friend">
      <h2 class="friend-name">${foundFriend.name}</h2>
      <h2 class="friend-step-goal">${foundFriend.dailyStepGoal}</h2>
    </article>`
    friendsContainer.insertAdjacentHTML('beforeend', displayFriendData);
  });
};

function displayUserAverageSteps() {
  
};

function displayAllAverageSteps() {

};

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

//with the string welcome
//display their randomuser.stepgoal next to all the users step goal...
//part of the average
