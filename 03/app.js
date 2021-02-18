function ViewModel(){
			
    var self = this;

    self.list = ko.observableArray([]);
    self.itemDescription = ko.observable();
    self.alert = ko.observable({ mostrar: false, mensagem: "", tipo: "" });

    self.addItem = function () {
        self.list.push({ description: self.itemDescription(), checked: false });
        self.itemDescription("");
    };

}

vm = new ViewModel();

ko.applyBindings(vm);