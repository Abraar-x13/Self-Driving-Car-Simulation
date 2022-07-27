class Controls {

    constructor() {
        this.forward = false;
        this.left = false;
        this.right = false;
        this.rev = false;

        this.#addKeyboardListeners();
    }

    #addKeyboardListeners() {
    
        document.onkeydown = (event) => {
            switch (event.key) {
                case 'ArrowLeft': this.left = true; break;
                case 'ArrowRight': this.right = true; break;
                case 'ArrowUp': this.forward = true; break;
                case 'ArrowDown': this.rev = true; break;
            }
            console.table(this);
        };

        document.onkeyup = (event) => {
            switch (event.key) {
                case 'ArrowLeft': this.left = false; break;
                case 'ArrowRight': this.right = false; break;
                case 'ArrowUp': this.forward = false; break;
                case 'ArrowDown': this.rev = false; break;
            }
            console.table(this);
        };
    
    }

}