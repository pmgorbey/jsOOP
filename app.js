class User{
    #name;
    comstructor(name) {
        this.#name = name;
    }

    getShow() {
        console.log(this.#name);
    }
}


let user = new User('petro');

console.log(user.name);
