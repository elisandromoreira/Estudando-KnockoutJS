function ViewModel () {
    var self = this;

    self.labelText = "Label text";
    self.inputValue = "Input value";
    self.buttonAction = function () {
        console.log("clicked button");
    }

}

vm = new ViewModel();

ko.applyBindings(vm);