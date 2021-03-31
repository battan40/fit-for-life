let currentUser;
let allUsers = new UserRepo(userData);
const displayUser = document.querySelector('#displayUser');
const userStepGoal = document.querySelector('#stepGoal');
const friendsContainer = document.querySelector('#friendContainer');

window.addEventListener('load', getRandomUser);
window.addEventListener('load', getFriends);
window.addEventListener('load', displayAllAverageSteps);
window.addEventListener('load', displayUserAverageSteps);

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
  const userStepGoal = document.querySelector('#userStepGoal');
  userStepGoal.innerText = currentUser.dailyStepGoal;
};

function displayAllAverageSteps() {
  const allUsersStepsGoals = document.querySelector('#allUsersStepsGoals');
  allUsersStepsGoals.innerText = allUsers.returnAllUsersStepGoal();
};

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length) + 1;
};
