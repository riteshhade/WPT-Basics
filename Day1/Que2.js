class Vehicle
{
    constructor(Vname,Vprice)
    {
        this.Vname=Vname;
        this.Vprice=Vprice;
    }

    display()
    {
        console.log(this.Vname,this.Vprice);
    }
}

class Car extends Vehicle
{
    constructor(Vname,Vprice,Cmodel)
    {
        super(Vname,Vprice);
        this.Cmodel=Cmodel;
    }

    diaplayCar()
    {
        console.log(this.Vname,this.Vprice,this.Cmodel);
    }
}

const c = new Car("Rolls Royce",100000000,"GHOST");
c.display();
c.diaplayCar();