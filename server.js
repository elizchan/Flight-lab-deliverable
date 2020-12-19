const dbConfig = require('./config/db.config')


const db = require("./models");
const Airport = db.airport;
const Flight = db.flight
const Terminal = db.terminal

// db connection
db.mongoose
  .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

const airport = new Airport({
	name: "First Airport",
  country: "US",
  terminals: [],
	opened: "2020-12-15"
})
airport.save()
console.log("Airport saved", airport)

const flight1 = new Flight({
  to: "JFK New-York, USA",
  from: "CDG France",
  airline: "American Airlines"
})
flight1.save()

const flight2 = new Flight({
  to: "JFK New-York, USA",
  from: "Heathrow UK",
  airline: "British Airways"
})
flight2.save()

// Lets Make and Save our first airport
const airport2 = new Airport({
  name: "JFK",
  country: "USA",
  opened: "1990-01-01"
})
airport2.save()

const terminal1 = new Terminal({
  name: "Terminal 1",
  flights: [flight1, flight2],
  capacity: 234324
})
terminal1.save()

airport.terminals.push(terminal1)