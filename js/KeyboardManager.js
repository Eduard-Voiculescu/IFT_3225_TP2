class KeyboardManager {    
    constructor () {
        this.Left();
        this.keyboardPlayer();
    }

    keyboardPlayer() {
        window.addEventListener("keydown", key => {
            switch (key.keyCode) {
                case 37: 
                    this.Left();
                    break;
                case 38: 
                    this.Up();
                    break;
                case 40: 
                    this.Down();
                    break;
                case 39: 
                    this.Right();
                    break;
                case 65: 
                    this.Left();
                    break;
                case 68: 
                    this.Right();
                    break;
                case 83: 
                    this.Down();
                    break;
                case 87: 
                    this.Up();
                    break;
            }
          });
    }

    Left () {
        
        console.log("Left button pressed");
    }

    Up() {
        console.log("Up button pressed");
    }

    Down() {
        console.log("Down button pressed");
    }

    Right() {
        console.log("Right button pressed");
    }

}
