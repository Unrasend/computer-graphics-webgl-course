import { injectable } from "inversify";
import "reflect-metadata";

@injectable()
export class ScrollService {
  private scrollEl: HTMLElement | null = null;

  setScrollElement(scrollEl: HTMLElement | null): void {
    this.scrollEl = scrollEl;
  }

  disableScroll(): void {
    this.scrollEl && (this.scrollEl.style.overflow = 'hidden');
  }

  enableScroll(): void {
    this.scrollEl && (this.scrollEl.style.overflow = 'auto');
  }

  toggleScroll(enable: boolean): void {
    console.log('test');
    if (enable) {
      this.enableScroll();
    } else {
      this.disableScroll();
    }
  }
}
