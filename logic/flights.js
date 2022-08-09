let passengers = -3
let capacity = 100
let numberOfFlights = 0

function Flights() {
    function calculateNumberOfFlights(passengers, capacity) {
        if( passengers > 0) {

        
        if ((passengers % capacity) == 0) {
            numberOfFlights = passengers / capacity;
            
            return true;
        } else {
            numberOfFlights = (passengers / capacity) + 1;
            console.log(numberOfFlights);
            return true;
        }
    } else {
        console.log("The number of passengers must be a positive integer value")
    }
    
    }

    function checkAircraftRevision(distanceLimit, distancesArray) {
        if (totalDistance <= (distanceLimit / 2)) {
            return "The revision needs to be done within the next 3 months";
        }
        if (totalDistance > (distanceLimit / 2), distanceLimit <= (distanceLimit / 3)) {
            return "The revision needs to be done within the next 2 months";
        }
        if (totalDistance > (distanceLimit / 3), totalDistance <= distanceLimit) {
            return "The revision needs to be done within the next month";
        }
        if (totalDistance > distanceLimit) {
            return "Error";
        }

    }
    return {calculateNumberOfFlights, checkAircraftRevision}; 
};

module.exports = Flights();

console.log(passengers);
console.log(capacity);


