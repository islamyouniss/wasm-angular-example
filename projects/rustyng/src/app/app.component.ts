import {Component, OnInit, signal} from "@angular/core";
import {RouterOutlet} from "@angular/router";
import {get_factorial, initExampleRust} from "../../../rusty-wasm/src/public-api";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <p>wasm Factorial of 22 = {{ wasmResult() }}</p>
    <p>execution time: {{ wasmExecutionTime() }}</p>
    <hr/>
    <p>js Factorial of 22 = {{ jsResult() }}</p>
    <p>execution time: {{ jsExecutionTime() }}</p>
  `,
})
export class AppComponent implements OnInit {
  wasmResult = signal("0");
  wasmExecutionTime = signal("0");
  jsResult= signal("0");
  jsExecutionTime = signal("0");

  ngOnInit(): void {
    initExampleRust().then(() => {
      const wasmStart = performance.now();
      this.wasmResult.set(get_factorial(22));
      this.wasmExecutionTime.set(((performance.now() - wasmStart) / 1000).toFixed(2) + 's');

      const jsTimeStart = performance.now();
      let f = 0;
      for (let i = 0; i < 10000000; i++) {
        f = factorial(22);
      }
      this.jsResult.set(f.toString());
      this.jsExecutionTime.set(((performance.now() - jsTimeStart) / 1000).toFixed(2) + 's');
    });
  }
}

function factorial(x: number): number {
  if (x === 0) {
    return 1;
  } else {
    return x * factorial(x - 1);
  }
}
