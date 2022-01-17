const addForDummies = require("./addForDummies");
const testThis = require("./myTestLib");

testThis(8, addForDummies(4, 4), "10 alatti egesz eseten az eredmenyt kapjuk vissza.");
testThis(0, addForDummies(-22, 4), "0 alatti eredmeny eseten 0-t kapjunk vissza.");
testThis("sok", addForDummies(22, 4), "10 feletti eredmeny eseten 'sok'.");
testThis(10, addForDummies(6, 4), "10 eseten 10-t kapunk vissza.");

// import 2 fuggetlen cuccot
// ez a teszt fajl
