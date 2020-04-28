//Create a class that describes a regular marker. It should contain the following components: 

// 1. A field that stores the color of the marker;
//2. A field that stores the amount of ink in the marker (in percentage)
// 1. A method for input. The method takes a string and displays the text in the given color on the webpage. 
//The text appears as long as the marker has ink. One non-space character takes 0,5% ink from the marker.


// definitons
class Marker {
    constructor(color) {
        this.color = color;
        this.inkPercentage = 100;
    }
    input(text) {
        // document.write(`${text}`);
        // document.write(`<p style="color:${this.color};">${text}</p>`);

        // document.write(`<p style="color:${this.color};">`);
        // for (let i = 0; i < text.length; i++) {
        //     if (text.charAt(i) !== ' ') {
        //         if (this.inkPercentage >= 0.5) {
        //             document.write(text.charAt(i));
        //             this.inkPercentage = this.inkPercentage - 0.5;
        //             // this.inkPercentage -= 0.5; //this is the same as the one you have above
        //         }
        //     } else {
        //         document.write(text.charAt(i)); 
        //     }
        // }
        // document.write('</p>');
        document.write(`<p style="color:${this.color};">`);
        for (let i = 0; i < text.length && this.inkPercentage >= 0.5; i++) {
            document.write(text.charAt(i));
            if (text.charAt(i) !== ' ') {
                this.inkPercentage = this.inkPercentage - 0.5;
                // this.inkPercentage -= 0.5; //this is the same as the one you have above
            }
        }
        document.write('</p>');
    }
}

// code
//remember to have the input inside the class definition
let m1 = new Marker('blue');
m1.input("Hello, blaaaa blaaaa!");

// let m2 = new Marker('purple');
// m2.input("Just checking!");

// let m3 = new Marker('red');
// m3.input("Bye!");

//Another approach to class
// class Marker {
//     constructor(color, inkPercentage) {
//         this.color = color;
//         this.inkPercentage = inkPercentage;
//     }
// }


// let myMarker = new Marker('Blue', 100);
