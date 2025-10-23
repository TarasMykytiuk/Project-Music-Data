import assert from "node:assert";
import test from "node:test";
import { processData } from "./data.mjs";
// data objects
const mockListenEvents = [
    { "timestamp": "2024-08-01T00:20:07", "seconds_since_midnight": 1207, "song_id": "song-9" },
    { "timestamp": "2024-08-01T02:00:31", "seconds_since_midnight": 7231, "song_id": "song-8" },
    { "timestamp": "2024-08-01T03:52:51", "seconds_since_midnight": 13971, "song_id": "song-10" },
    { "timestamp": "2024-08-01T05:15:06", "seconds_since_midnight": 18906, "song_id": "song-2" },
    { "timestamp": "2024-08-01T06:23:20", "seconds_since_midnight": 23000, "song_id": "song-8" },
    { "timestamp": "2024-08-02T11:30:01", "seconds_since_midnight": 9001, "song_id": "song-8" },
    { "timestamp": "2024-08-02T18:30:01", "seconds_since_midnight": 9001, "song_id": "song-8" }
]
//empty variables used to store processed data
const songsData = {};
const fridaySongsData = {};
const artistsData = {};
let longestStackSong = { recorded_id: 0, count: 0, title: '' };
let currentStackSong = { recorded_id: 0, count: 0, title: '' };
const allListenDaysOfUser = new Set();
const genresData = {};

processData(
    mockListenEvents,
    songsData,
    fridaySongsData,
    artistsData,
    longestStackSong,
    currentStackSong,
    allListenDaysOfUser,
    genresData
);

test("Each song has unique record in songsData", () => {
    assert.equal(Object.entries(songsData).length, 4);
});
test("there is 1 Friday song in this mock data", () => {
    assert.equal(Object.entries(fridaySongsData).length, 1);
});
test("Each artist has unique record in artistsData", () => {
    assert.equal(Object.entries(artistsData).length, 4);
});
test("Correct total duration of song-8", () => {
    assert.equal(songsData["song-8"].duration_seconds, 884);
});
test("Correct total count of song-8", () => {
    assert.equal(songsData["song-8"].count, 4);
});
test("Most repeated song in a row ", () => {
    assert.equal(longestStackSong.title, "When Your Mind's Made Up");
    assert.equal(longestStackSong.count, 2);
});
test("2 recorded days when user listened songs", () => {
    assert.equal(allListenDaysOfUser.size, 2);
});
test("2 genres among this songs", () => {
    assert.equal(Object.entries(genresData).length, 2);
});



