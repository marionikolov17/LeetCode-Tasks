/**
 * @param {number} numberOfUsers
 * @param {string[][]} events
 * @return {number[]}
 */
var countMentions = function(numberOfUsers, events) {
    let result = Array(numberOfUsers).fill(0);
    const users = {};

    const sortedEvents = events.sort((a, b) => Number(a[1]) - Number(b[1]) || a[2].localeCompare(b[2]));

    for (let i = 0; i < numberOfUsers; i++) {
        users[i] = {
            online: true,
            lastOfflineTime: 0
        }
    }

    for (let [type, time, mention] of sortedEvents) {
        if (type === "MESSAGE") {
            if (mention === "ALL") {
                result = result.map((el) => el + 1);
            } else if (mention === "HERE") {
                for (let [user, stats] of Object.entries(users)) {
                    if (stats.online === true) {
                        result[user] = result[user] + 1;
                    } else {
                        if (Math.abs(Number(time) - stats.lastOfflineTime) >= 60) {
                            result[user] = result[user] + 1;
                            users[user].online = true;
                        }
                    }
                }
            } else {
                const ids = mention.split(" ").map((el) => Number(el.replace("id", "")));

                for (const id of ids) {
                    result[id] = result[id] + 1;
                }
            }
        } else if (type === "OFFLINE") {
            users[mention] = {
                online: false,
                lastOfflineTime: Number(time)
            }
        }
    }

    return result;
};