const axios = require("axios");

const BASE_URL = "https://demoeng.talkdeskid.com/oauth/token";

module.exports = {
  getOAuth: () => {
    axios({
      method: "POST",
      url: "https://demoeng.talkdeskid.com/oauth/token",
      headers: {
        "Access-Control-Allow-Methods": "GET, DELETE, HEAD, OPTIONS",
        "Access-Control-Allow-Origin": "http://localhost:3000",
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization:
          "Basic MGY0YmRiNWYxNTgyNDUyNmJmMjNkODZjMmQwYzlhYTc6amQ0c25LRU9xMmZ0WkNfaDdxWWthREtCYmo5SU93dEV4YVhLQ1RKWEt4RFczVi1lU0lMcVBEbm5Zb2hGbFIxVVZBQm1XS196NTNpeUZVNjdNc0RYemc=",
      },
      data: {
        scope: "callback:write",
        grant_type: "client_credentials",
      },
    });
  },
};
