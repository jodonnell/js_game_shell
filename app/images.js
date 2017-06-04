class Images {
    constructor(callback) {
        this._props = [];

        //this._loadImage('bubRight', 'bub.png');
        //this.bubRight.onload = callback;
        callback();
    }

    _loadImage(prop, imageFile) {
        this._props.push(prop);
        this[prop] = {ready: false};

        this[prop] = new Image();
        this[prop].src = 'assets/' + imageFile;
        if (prop === 'bubRight') {
            this[prop].onload = this._callback;
        }
    }
}

export default Images;