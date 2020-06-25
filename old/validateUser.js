const validateUsr = username =>
  username.length >= 4 && username.length <= 16
    ? /^[a-z\d_]+$/g.test(username)
    : false;
