let currentUser;
let allUsers = new UserRepo(userData);
let hydration = new Hydration(hydrationData);
const displayUser = document.querySelector('#displayUser');
const userStepGoal = document.querySelector('#stepGoal');
const friendsContainer = document.querySelector('#friendContainer');

window.addEventListener('load', onPageLoad);

function onPageLoad() {
  getRandomUser();
  displayAllAverageSteps();
  displayUserAverageSteps();
}

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
  userStepGoal.innerText = `User's Daily Step Average ${currentUser.dailyStepGoal}`;
};

function displayAllAverageSteps() {
  const allUsersStepsGoals = document.querySelector('#allUsersStepsGoals');
  allUsersStepsGoals.innerText = `User's Step Goal Average: ${allUsers.returnAllUsersStepGoal()}`;
};

function displayDailyWaterIntake(day) {
  const dailyHydration = document.querySelector('#userHydrationGoal');
  dailyHydration.innerText = `${currentUser.name}'s Daily Hydration: ${hydration.singleDayHydration(day)}`;
  displayWeeklyWaterIntake()
};

function displayWeeklyWaterIntake() {
  const weeklyHydration = document.querySelector('#userWeeklyHydration');
  weeklyHydration.innerText = `${currentUser.name}'s Water For The Week:
  ${hydration.calculateWeeklyHydration()}`;
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length) + 1;
};
