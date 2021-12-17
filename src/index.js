const { StreamChat } = require("stream-chat");
const helmet = require("helmet");
const { json } = require("body-parser");
const express = require("express");
const app = express();
const router = express.Router();
const cors = require("cors");

app.use(helmet());
app.use(json());

app.use(cors({ origin: "http://localhost:3000" }));

const api_key = "juxxvgh645jf";
const api_secret =
  "9y85smd455tqrru48377e7rn6btdqmups5p7z3a8tsxxx73ny8aa3zkybwnmbsf2";
const user_id = "partycle";

// Initialize a Server Client
const serverClient = StreamChat.getInstance(api_key, api_secret);
// Create User Token
const token = serverClient.createToken(user_id);

async function creatingChannel() {
  const channel = client.channel("partycle", {
    name: "Partycle",
    created_by_id: "partycle",
  });
  return await channel.create();
}

router.get("/", function (req, res) {
  return res.send(token);
});

router.get("/channel", function (req, res) {
  const response = creatingChannel();
  return res.send(response.channels);
});

app.use("/", router);

app.listen(4000, function () {
  console.log("Aplicación ejemplo, escuchando el puerto 3000!");
});
