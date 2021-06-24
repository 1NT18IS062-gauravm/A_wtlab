var veg0 = "onion"

function outer() {
    var veg1 = "tomato";
    var veg2 = "carrot";

    function act() {
        console.log("Name of the vegetable is:" + veg1);
    }

    function gam() {
        console.log("Name of vegetable is:" + veg2);
    }

    function concat() {
        console.log("Concat:   " + veg0 + veg1);
    }
    act()
    gam()
    concat()
   
}
outer()