class IntegerSet{

    constructor(max_length){
        this.set = new Array(max_length);

        for(let i=0; i<max_length; i++){
            this.set[i] = false;
        }
    }

    add(value){
        this.set[value] = true;
    }

    remove(value){
        this.set[value] = false;
    }

    print(){
        console.log('Conjunto: ' + this.set);
    }

    union(vet){
        let a = this.set.slice();
        let b = vet.set.slice();

        if(a.length > b.length){
            for(let i=b.length; i<a.length;i++){
                b[i] = false;
            }
        }
        else{
            for(let i=a.length; i<b.length;i++){
                a[i] = false;
            }

        }

        var new_set = [];

        for(let i=0; i<a.length; i++){

            new_set[i] = a[i] || b[i];

        }

        return new_set;
    }

    intersection(vet){
        let a = this.set.slice();
        let b = vet.set.slice();

        if(a.length > b.length){
            for(let i=b.length; i<a.length;i++){
                b[i] = false;
            }
        }
        else{
            for(let i=a.length; i<b.length;i++){
                a[i] = false;
            }

        }

        var new_set = [];

        for(let i=0; i<a.length; i++){

            new_set[i] = a[i] && b[i];

        }

        return new_set;
    }
}

var conj = new IntegerSet(10);
conj.print();
conj.add(5);

var conj2 = new IntegerSet(7);
conj2.add(3);
conj2.add(5);


console.log('União: ' + conj.union(conj2));
conj2.print();

console.log('Interseção: ' + conj.intersection(conj2));
conj2.print();