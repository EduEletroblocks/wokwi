import { PinSimulator } from "@wokwi/elements";

class EletroBlocksLED {
  private signalPin: PinSimulator;
  private ledElement: SVGElement;

  constructor(ledElement: SVGElement, signalPin: PinSimulator) {
    this.ledElement = ledElement;
    this.signalPin = signalPin;
    this.signalPin.addListener(() => this.updateLED());
  }

  private updateLED() {
    const isOn = this.signalPin.value > 0;
    this.ledElement.setAttribute("fill", isOn ? "yellow" : "blue");
  }
}

export default EletroBlocksLED;
