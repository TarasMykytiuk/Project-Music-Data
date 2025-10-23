import { getUserIDs } from "./data.mjs";
import { processData } from "./data.mjs";
import { getListenEvents } from "./data.mjs";
import { displayData } from "./data.mjs";

export function activateUserSelect() {
    const userSelector = document.getElementById("userSelect");
    const userIDs = getUserIDs();
    userIDs.forEach((userID) => {
        userSelector.appendChild(createOption(userID));
    });

    userSelector.addEventListener("change", (e) => {
        const userID = e.target.value;
        const listenEvents = getListenEvents(userID);
        //empty variables used to store processed data
        const songsData = {};
        const fridaySongsData = {};
        const artistsData = {};
        let longestStackSong = { recorded_id: 0, count: 0, title: '' };
        let currentStackSong = { recorded_id: 0, count: 0, title: '' };
        const allListenDaysOfUser = new Set();
        const genresData = {};
        processData(
            listenEvents,
            songsData,
            fridaySongsData,
            artistsData,
            longestStackSong,
            currentStackSong,
            allListenDaysOfUser,
            genresData
        );
        displayData(
            userID,
            songsData,
            artistsData,
            fridaySongsData,
            longestStackSong,
            allListenDaysOfUser,
            genresData
        )
    });
}

function createOption(userID) {
    const option = document.createElement("option");
    option.value = userID;
    option.textContent = `User ${userID}`;
    return option;
}