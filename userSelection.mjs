import { getUserIDs } from "./data.mjs";
import { processData } from "./data.mjs";

export function activateUserSelect() {
    const userSelector = document.getElementById("userSelect");
    const userIDs = getUserIDs();
    userIDs.forEach((userID) => {
        userSelector.appendChild(createOption(userID));
    });
    userSelector.addEventListener("change", (e) => {
        const userID = e.target.value;
        processData(userID);
    });
}

function createOption(userID) {
    const option = document.createElement("option");
    option.value = userID;
    option.textContent = `User ${userID}`;
    return option;
}