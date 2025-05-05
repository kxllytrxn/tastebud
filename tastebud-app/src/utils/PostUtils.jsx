
export const getFormattedDate = (loggedInUser) => {
    const signUpDate = new Date(loggedInUser.created_at);
    const signUpDateFormatted = signUpDate.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
    return signUpDateFormatted
}