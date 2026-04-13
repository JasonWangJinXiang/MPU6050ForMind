
enum AXEL {
    //% block="X"
    X,
    //% block="Y"
    Y,
    //% block="Z"
    Z
}

enum VALUETYPE {
    //% block="ACCELERO"
    ACC,
    //% block="GYRO"
    GYRO,
    //% block="ACC ANGLE"
    ANGLE ACC,
    //% block="ANGLE"
    ANGL
}

enum MPU {
    //% block="mpu0"
    mpu0,
    //% block="mpu1"
    mpu1,
    //% block="mpu2"
    mpu2,
    //% block="mpu3"
    mpu3
}

enum ADDR {
    //% block="0x68"
    0x68,
    //% block="0x69"
    0x69,
    //% block="0x70"
    0x70,
    //% block="0x71"
    0x71
}

enum WIRENO{
    //% block="Wire"
    Wire,
    //% block="Wire1"
    Wire1
}

//% color="#7511e7" iconWidth=50 iconHeight=40
namespace mpu6050 {

    //% block="init mpu[MPUS] at [ADDS] in [I2C]" blockType="command"
    //% MPUS.shadow="dropdown" MPUS.options="MPU" MPUS.defl="MPU.1"
    //% ADDS.shadow="dropdown" ADDS.options="ADDR" ADDS.defl="ADDR.1"
    //% I2C.shadow="dropdown" I2C.options="WIRENO" I2C.defl="WIRENO.1"

    export function init(parameter:any,block:any){

        let mpus = parameter.MPUS.code;
        let addr = parameter.ADDS.code;
        let i2c = parameter.I2C.code;

        Generator.addInclude('mpu6050', '#include <MPU6050.h>',true);
        Generator.addObject(`${mpus}`, `MPU6050`, `${mpus}(${i2c},${addr});`,true); 
        Generator.addSetup(`${i2c}begin`,`${i2c}.begin();`,true);
        Generator.addSetup(`${mpus}begin`,`${mpus}.begin();`,true);
        Generator.addSetup(`${mpus}calcoffsets`,`${mpus}.calcOffsets();`,true);
    }

    //% block="update mpu[MPUS]" blockType="command"
    //% MPUS.shadow="dropdown" MPUS.options="MPU" MPUS.defl="MPU.1"
    export function update(parameter:any,block:any){

        let mpus = parameter.MPUS.code;
        Generator.addCode(`${mpus}.update();`);        
    }


    //% block="get[MPUS] X Gyro" blockType="reporter"
    //% MPUS.shadow="dropdown" MPUS.options="MPU" MPUS.defl="MPU.1"
    export function getGyroX(parameter:any,block:any){

        let mpus = parameter.MPUS.code;
        Generator.addCode(`${mpus}.getGyroX()`);
    }

    //% block="get[MPUS] Y Gyro" blockType="reporter"
    //% MPUS.shadow="dropdown" MPUS.options="MPU" MPUS.defl="MPU.1"
    export function getGyroY(parameter:any,block:any){

        let mpus = parameter.MPUS.code;
        Generator.addCode(`${mpus}.getGyroY()`);
    }

    //% block="get[MPUS] Z Gyro" blockType="reporter"
    //% MPUS.shadow="dropdown" MPUS.options="MPU" MPUS.defl="MPU.1"
    export function getGyroZ(parameter:any,block:any){

        let mpus = parameter.MPUS.code;
        Generator.addCode(`${mpus}.getGyroZ()`);
    }

    //% block="get[MPUS] X Acc Angle" blockType="reporter"
    //% MPUS.shadow="dropdown" MPUS.options="MPU" MPUS.defl="MPU.1"
    export function getAccAngleX(parameter:any,block:any){

        let mpus = parameter.MPUS.code;
        Generator.addCode(`${mpus}.getAccAngleX()`);
    }

    //% block="get[MPUS] Y Acc Angle" blockType="reporter"
    //% MPUS.shadow="dropdown" MPUS.options="MPU" MPUS.defl="MPU.1"
    export function getAccAngleY(parameter:any,block:any){

        let mpus = parameter.MPUS.code;
        Generator.addCode(`${mpus}.getAccAngleY()`);
    }

    //% block="get[MPUS] X Angle" blockType="reporter"
    //% MPUS.shadow="dropdown" MPUS.options="MPU" MPUS.defl="MPU.1"
    export function getAngleX(parameter:any,block:any){

        let mpus = parameter.MPUS.code;
        Generator.addCode(`${mpus}.getAngleX()`);
    }
    //% block="get[MPUS] Y Angle" blockType="reporter"
    //% MPUS.shadow="dropdown" MPUS.options="MPU" MPUS.defl="MPU.1"
    export function getAngleY(parameter:any,block:any){

        let mpus = parameter.MPUS.code;
        Generator.addCode(`${mpus}.getAngleY()`);
    }
    
    //% block="get[MPUS] Z Angle" blockType="reporter"
    //% MPUS.shadow="dropdown" MPUS.options="MPU" MPUS.defl="MPU.1"
    export function getAngleZ(parameter:any,block:any){

        let mpus = parameter.MPUS.code;
        Generator.addCode(`${mpus}.getAngleZ()`);
    }

    //% block="get[MPUS] X Acc" blockType="reporter"
    //% MPUS.shadow="dropdown" MPUS.options="MPU" MPUS.defl="MPU.1"
    export function getAccX(parameter:any,block:any){

        let mpus = parameter.MPUS.code;
        Generator.addCode(`${mpus}.getAccX()`);
    }

    //% block="get[MPUS] Y Acc" blockType="reporter"
    //% MPUS.shadow="dropdown" MPUS.options="MPU" MPUS.defl="MPU.1"
    export function getAccY(parameter:any,block:any){

        let mpus = parameter.MPUS.code;
        Generator.addCode(`${mpus}.getAccY()`);
    }

    //% block="get[MPUS] Z Acc" blockType="reporter"
    //% MPUS.shadow="dropdown" MPUS.options="MPU" MPUS.defl="MPU.1"
    export function getAccZ(parameter:any,block:any){

        let mpus = parameter.MPUS.code;
        Generator.addCode(`${mpus}.getAccZ()`);
    }
}
