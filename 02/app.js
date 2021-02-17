function ViewModel () {
    var self = this;

    self.labelText = ko.observable("Label text");
    self.inputValue = ko.observable("Input value");
    self.list = ko.observableArray([1,3,5,7,9,11]);

    self.buttonAction = function () {
        self.list.splice(0, 0, 100);
    }

    self.inputValue.subscribe(function(novoValor) {
        if(novoValor == "100")
            self.labelText("Certo");
        else
            self.labelText("Errado")
    })

}

vm = new ViewModel();

ko.applyBindings(vm);