const cylinder = {
    radius: 12,
    height: 20,
    getVolume(){
        return Math.PI * this.radius * this.radius * this.height ;
     }
}
console.log(`The volume of cylinder is: ${cylinder.getVolume()}`)
