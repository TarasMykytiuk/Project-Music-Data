import { getUserIDs } from "./data.mjs";

export function populateUserSelect() {
    const userSelector = document.getElementById("userSelect");
    const userIds = getUserIDs();
    userIds.forEach((userId) => {
        userSelector.appendChild(createOption(userId));
    });
    userSelector.addEventListener("change", (e) => {
        const userId = e.target.value;
        console.log(userId);
    });
}

function createOption(userId) {
    const option = document.createElement("option");
    option.value = userId;
    option.textContent = `User ${userId}`;
    return option;
}