function ViewModel () {
    var self = this;

    self.labelText = ko.observable("Label text");
    self.inputValue = ko.observable("Input value");
    self.list = ko.observableArray([1,3,5,7,9,11])

    self.buttonAction = function () {
        console.log("clicked button");
    }

}

vm = new ViewModel();

ko.applyBindings(vm);