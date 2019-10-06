import { Selector } from "testcafe";

const label = Selector("label");

class Feature {
  public label: Selector;
  public checkbox: Selector;

  constructor(text) {
    this.label = Selector("label").withText(text);
    this.checkbox = this.label.find("input[type=checkbox]");
  }
}

class Page {
  public nameInput: Selector;
  public triedTestCafeCheckbox: Selector;
  public populateButton: Selector;
  public submitButton: Selector;
  public results: Selector;
  public macOSRadioButton: Selector;
  public commentsTextArea: Selector;
  public interfaceSelect: Selector;
  public interfaceSelectOption: Selector;

  public featureList: Feature[];
  public slider: {
    handle: Selector;
    tick: Selector;
  };

  constructor() {
    this.nameInput = Selector("#developer-name");
    this.triedTestCafeCheckbox = Selector("#tried-test-cafe");
    this.populateButton = Selector("#populate");
    this.submitButton = Selector("#submit-button");
    this.results = Selector(".result-content");
    this.macOSRadioButton = Selector("input[type=radio][value=MacOS]");
    this.commentsTextArea = Selector("#comments");

    this.featureList = [
      new Feature("Support for testing on remote devices"),
      new Feature("Re-using existing JavaScript code for testing"),
      new Feature("Easy embedding into a Continuous integration system")
    ];

    this.slider = {
      handle: Selector(".ui-slider-handle"),
      tick: Selector(".slider-value")
    };

    this.interfaceSelect = Selector("#preferred-interface");
    this.interfaceSelectOption = this.interfaceSelect.find("option");
  }
}

export default new Page();
