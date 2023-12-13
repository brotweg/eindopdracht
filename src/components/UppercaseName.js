function UppercaseName(user) {
    if (!user) return user;
    const firstLetter = user.charAt(0).toUpperCase();
    const restOfName = user.slice(1);
    return firstLetter + restOfName;
}

export default UppercaseName;