function ViewModel () {
    var self = this;

    self.labelText = ko.observable("Label text");
    self.inputValue = ko.observable("Input value");

    self.buttonAction = function () {
        console.log("clicked button");
    }

}

vm = new ViewModel();

ko.applyBindings(vm);