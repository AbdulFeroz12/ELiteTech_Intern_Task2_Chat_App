/*const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
  text: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Message", MessageSchema);*/
/*
const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  text: { type: String, required: true },
  username: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model("Message", messageSchema);

*/

/*
const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema(
  {
    text: { type: String, required: true },
    username: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Message", MessageSchema);
*/
////////////////////////////////main////////////////////////////
/*const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
  text: { type: String, required: true },
  username: { type: String, required: true },
  
  timestamp: {
    type: String,
    default: () =>
      new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
  },
}, { timestamps: true });

module.exports = mongoose.model("Message", MessageSchema);
*/

const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema(
  {
    text: { type: String }, 
    username: { type: String, required: true },
    fileUrl: { type: String }, 
    timestamp: {
      type: String,
      default: () =>
        new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Message", MessageSchema);

