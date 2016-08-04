// XX: We want to essentially have some sort of
// anonymous user to make sure we can track
// person's contributions and provide customization
// options without forcing her log sign up + log in
// In the future, we should be able to convert these
// anonymous users into "real" ones if they decide do

import Parse from 'parse/react-native';

export function authenticate() {
  return Parse.User.currentAsync().then((currentUser) => {
    if (currentUser) {
      return currentUser;
    }

    const user = new Parse.User();

    user.set('username', `pkmnmps-${Math.floor(Math.random() * 1000000)}`);
    user.set('password', `pkmnmps-password-${Math.floor(Math.random() * 1000000)}`);

    return user.signUp(null);
  }).then(user => user, error => error);
}
