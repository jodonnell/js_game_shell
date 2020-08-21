class Images {
    constructor(callback) {
        this._images = {};
    }

    images() {
        return this._images;
    }

    async load() {
        const allImages = [
            this._loadImage('linedPaper', 'wide-blue-lined.png'),
        ];
        return Promise.all(allImages);
    }

    async _loadImage(prop, imageFile) {
        return new Promise((resolve, reject) => {
            this._images[prop] = new Image();
            this._images[prop].onload = resolve;
            this._images[prop].src = `assets/images/${imageFile}`;
        });
    }

}

export default Images;
