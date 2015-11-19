angular.module('ngDesigners', [])

    .controller('MainController', function(){
    this.hello = 'hello';
    this.item = {
        name: "Andy",
        description: "its class picture day"
    }
});