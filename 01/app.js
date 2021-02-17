const knockoutApp = document.querySelector('#knockout-app');

function CounterViewModel() {
  let self = this;

  self.userName = ko.observable('Elisandro');
  self.count = ko.observable(0);

  self.increase = () => {
    let currentValue = self.count();
    self.count(currentValue + 1);
  };

  self.decrease = () => {
    let currentValue = self.count();
    if (currentValue > 0) {
      self.count(currentValue - 1);
    }
  };

  self.userStatus = ko.computed(() => {
    if (self.count() <= 2) {
      return 'meio preguiçoso.';
    }
    if (self.count() <= 8) {
      return 'esforçado.';
    }
    if (self.count() <= 15) {
      return 'quase um maratonista!';
    }
    return 'o Eliud Kipchoge?';
  });
}

ko.applyBindings(new CounterViewModel(), knockoutApp);
