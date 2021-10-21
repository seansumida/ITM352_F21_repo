while(true) {
    stepCount=1;
while(stepCount++ <16){
    step =
    controller.move(); {
    if(!step) {
        controller.rotate();
        controller.move();
        }
    }
}
}