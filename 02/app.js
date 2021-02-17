function ViewModel () {
    var self = this;

    self.labelText = ko.observable("Nome:");
    self.inputValue = ko.observable("");
    self.list = ko.observableArray([1,3,5,7,9,11]);

    self.buttonAction = function () {
        self.list.splice(0, 0, 100);
    }

    self.computed = ko.computed(function () {
        return `${self.labelText()} ${self.inputValue()}`
    })

}

vm = new ViewModel();

ko.applyBindings(vm);