let currentDate = moment(new Date("2019/09/22")).format('YYYY/MM/DD');
let currentUser;
const allUsers = new UserRepo(userData);
const displayUser = document.querySelector('#displayUser');
const emailDisplay = document.getElementById('emailDisplay');
const friendsContainer = document.querySelector('#friendContainer');
const milesWalked = document.getElementById('milesWalked');
const minutesActive = document.getElementById('minutesActive');
const stridelength = document.getElementById('stridelength');
const sleepStatMainUser = document.querySelector('#mainUserSleepStat');
const userHydrationDisplay = document.getElementById('userHydrationDisplay');
const userSleepAvg = document.getElementById('userSleepAvg');
const userStepGoal = document.querySelector('#stepGoal');
const userStepsDisplay = document.getElementById('userStepsDisplay');
const userWeeklyHydration = document.getElementById('userWeeklyHydration');
const userWeeklySleep = document.getElementById('userWeeklySleep');

window.addEventListener('load', onPageLoad);

function onPageLoad() {
  getMainUser();
  getFriends();
  getMainUserHydration(currentUser, currentDate);
  displayAllAverageSteps();
  displayUserAverageSteps();
  getMainUserSleep(currentUser, currentDate);
  getMainUserActivity(currentUser, currentDate);
}

function getMainUser() {
  currentUser = new User(allUsers.returnUsersData(getRandomIndex(userData)));
  displayUser.innerText = currentUser.name;
  userStepGoal.innerText = ` Step Goal: ${currentUser.dailyStepGoal}`;
  stridelength.innerText = ` Stride length: ${currentUser.strideLength}`;
  emailDisplay.innerText = `${currentUser.email}`;
}

function getMainUserHydration(user, date) {
  const hydration = new Hydration(hydrationData);
  const weekTotal = hydration.calculateWeeksHydration(user.id, date);
  const weekSum = weekTotal.reduce((paramA, paramB) => {
    return paramA + paramB;
  }, 0);
  userHydrationDisplay.innerText = ` hydration: ${hydration.singleDayHydration(user.id, date)} Oz Today!`;
  userWeeklyHydration.innerText = ` ${weekSum} oz of water this week!`;
}

function getMainUserSleep(user, date) {
  const sleep = new Sleep(sleepData);
  sleepStatMainUser.innerText = `sleep: ${sleep.hoursSleptOneUser(user.id, date)}, quality: ${sleep.sleepQualityOneUser(user.id, date)}`;
  userWeeklySleep.innerText = ` Hours slept this week: ${sleep.calculateWeeklySleepQuality(user.id, date)} `
  userSleepAvg.innerText = ` Average Sleep Quality: ${Math.round(sleep.returnAveUserSleepQualityAllTime(user.id))}, Average Hours: ${sleep.aveUserHoursSleptAllTime(user.id)}`
}

function getMainUserActivity(user, date) {
  const activity = new Activity(activityData);
  userStepsDisplay.innerText = `${activity.stepsOnDate(user.id, date)} Steps Today!`
  minutesActive.innerText = `${activity.minutesActiveOnDay(user.id, date)} minutes active today!`
  milesWalked.innerText = `${activity.milesWalkedOnDay(user, date)} miles walked today!`
}

function displayUserAverageSteps() {
  const userStepGoal = document.querySelector('#userStepGoal');
  userStepGoal.innerText = `Daily Step Average: ${currentUser.dailyStepGoal}`;
}

function getFriends() {
  currentUser.friends.forEach(friend => {
    const foundFriend = userData.find(person => friend === person.id);
    let displayFriendData = `<article class="friend box">
      <h3 class="friend-name">${foundFriend.name}'s</h3>
      <h3 class="friend-step-goal">${foundFriend.dailyStepGoal} daily steps</h3>
    </article>`
    friendsContainer.insertAdjacentHTML('beforeend', displayFriendData);
  });
}

function displayAllAverageSteps() {
  const allUsersStepsGoals = document.querySelector('#allUsersStepsGoals');
  allUsersStepsGoals.innerText = `Everyone's step Average: ${allUsers.returnAllUsersStepGoal()}`;
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length) + 1;
}
