class CuentaBancaria{
    //Constructor con atributos private
    //Id, titular, saldo, fechaNacimiento, casado
    constructor(private id: number, private titular: string, private fechaNacimiento: Date, private saldo: number, private pinAcceso: string ){
    }
    public incrementarSaldo(cantidad: number): void{
        //1.Comprobar cantidad debe ser mayor o igual que 5 euros
        if (cantidad >=5 )
            this.saldo += cantidad;

    }
    public retirarSaldo(cantidad: number): number{
        //1.comprobar que la cantidad no sea superior al saldo, en ese caso retiramos todo el saldo pero no mas
        if(cantidad> this.saldo){
            let saldoAux = this.saldo;
            this.saldo = 0
            return saldoAux
        }

        //2. comprobar la edad
        //3.Comprobar pin de acceso
        this.saldo -= cantidad;
        return cantidad;
    }
     private esMayorDeEdad(): boolean{
        //fechaNacimiento
        //fechaActual

        let birthyear = this.fechaNacimiento.getFullYear();         
        let fechaActual = new Date(); 
        let currentYear = fechaActual.getFullYear();
         return(currentYear - birthyear >= 18)
        
     }
     private esPinValido(pin: string): boolean {
        return this.pinAcceso ===pin;

     }
    

}
const cuenta1 = new CuentaBancaria(1, "Maria",new Date("2000-03-27"),1000, '1234');
let cantidadRetirada = cuenta1.retirarSaldo(1500);//1200
console.log(cantidadRetirada);
