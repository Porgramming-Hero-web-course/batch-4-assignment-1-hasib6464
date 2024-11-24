class Shape{
    getArea():number{
        return 0;
    }
}

class CircleArea extends Shape{
    // shape:'string';
    radius:number;
    constructor(radius:number){
        super();
        this.radius=radius;
        // this.shape=shape;
    }
    getArea(): number {
        return Math.PI*this.radius*this.radius;
    }
}


class RectangleArea extends Shape{
height:number;
width:number;
constructor(height:number,width:number){
super()
this.height=height;
this.width=width;
}
getArea(): number {
    const calculate=this.height*this.width;
    return calculate;
}
}

const calculatedShapeArea=(param:Shape)=>{
    const totalShapeArea=param.getArea();
    console.log(totalShapeArea);
}

const circleTotal=new CircleArea(10);
const rectangle=new RectangleArea(2,3)

calculatedShapeArea(circleTotal);
calculatedShapeArea(rectangle);