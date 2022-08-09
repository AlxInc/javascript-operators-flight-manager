function Passengers() {
    function checkFlightCapacity(flightCapacity, passengersArray) {
        if (passengersArray.length < flightCapacity) {
            return true;
        } else {
            console.log("Error");
        }
    }

    function distributeAllSeatsToAllPassengers(vipPassengers, regularPassengers, numberOfFlights, businessSeatsPerFlight, economySeatsPerFlight) {
       
        if (businessSeatsPerFlight > 0, vipPassengers > 0) {
            for (let i = 0; i < businessSeatsPerFlight.length; i++) {
                if (businessSeatsPerFlight[i] == undefined) {
                    businessSeatsPerFlight[i] = vipPassengers[i];
                    return businessSeatsPerFlight;
            }   else if (i == businessSeatsPerFlight.length - 1) {
                return businessSeatsPerFlight;
            } 

        } else if (vipPassengers > 0, economySeatsPerFlight == 0) {
            for (let i = 0; i < economySeatsPerFlight.length; i++) {
                if (economySeatsPerFlight[i] == undefined) {
                    economySeatsPerFlight[i] = vipPassengers[i];
                    return economySeatsPerFlight;
            }   else if (i == economySeatsPerFlight.length - 1) {
                return economySeatsPerFlight;
            } 
            }

        } else if (vipPassengers == 0, businessSeatsPerFlight > 0, regularPassengers > 0){
            for (let i = 0; i < businessSeatsPerFlight.length; i++) {
                if (businessSeatsPerFlight[i] == undefined) {
                    businessSeatsPerFlight[i] = regularPassengers[i];
                    return businessSeatsPerFlight;
            }   else if (i == businessSeatsPerFlight.length - 1) {
                return businessSeatsPerFlight;
            } 
            }

        } else (vipPassengers == 0, businessSeatsPerFlight == 0, economySeatsPerFlight > 0, regularPassengers > 0) {
            for (let i = 0; i < economySeatsPerFlight.length; i++) {
                if (economySeatsPerFlight[i] == undefined) {
                    economySeatsPerFlight[i] = regularPassengers[i];
                    return economySeatsPerFlight;
            }   else if (i == economySeatsPerFlight.length - 1) {
                return economySeatsPerFlight;
            }
            }
        }
        return {distributeAllSeatsToAllPassengers};
module.exports = Passengers();