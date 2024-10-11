import { BehaviorSubject, fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

export const mediaQueryMatches = (mediaQuery: string): boolean => window.matchMedia(mediaQuery).matches;
export const clientHeight = (): number => Math.max(window.innerHeight, document.documentElement.clientHeight);
export const windowHeight: {value: number} = {value: clientHeight()};
export const windowResize$ = fromEvent(window, 'resize');
export const debouncedWindowResize$ = windowResize$.pipe(debounceTime(100));

export const screenWidthSmallerThan = (px: unknown) => mediaQueryMatches(`only screen and (max-width: ${px}px)`);

export const screenWidthSmallerThan$ = (px: unknown) => debouncedWindowResize$
  .pipe(
    map(() => screenWidthSmallerThan(px)),
    distinctUntilChanged()
  );

/*
 * isMobileDevice$
 */
const isMobileDeviceMedia = (): boolean => mediaQueryMatches('only screen and (max-width: 768px)');
const isMobileDeviceBS = new BehaviorSubject(isMobileDeviceMedia());
export const isMobileDevice$ = isMobileDeviceBS.asObservable();
export const isMobileDevice = () => isMobileDeviceBS.value;

debouncedWindowResize$
  .pipe(
    map(() => isMobileDeviceMedia()),
    distinctUntilChanged()
  ).subscribe(val => isMobileDeviceBS.next(val));

/*
 * isMediumDevice$
 */
const isMediumDeviceMedia = (): boolean => mediaQueryMatches('only screen and (max-width: 1224px)');
const isMediumDeviceBS = new BehaviorSubject(isMediumDeviceMedia());
export const isMediumDevice$ = isMediumDeviceBS.asObservable();
export const isMediumDevice = () => isMediumDeviceBS.value;

debouncedWindowResize$
  .pipe(
    map(() => isMediumDeviceMedia()),
    distinctUntilChanged()
  ).subscribe(val => isMediumDeviceBS.next(val));

/*
 * isDesktopDevice$
 */
const isDesktopDeviceMedia = (): boolean => mediaQueryMatches('only screen and (min-width: 1224px)');
const isDesktopDeviceBS = new BehaviorSubject(isDesktopDeviceMedia());
export const isDesktopDevice$ = isDesktopDeviceBS.asObservable();
export const isDesktopDevice = () => isDesktopDeviceBS.value;

debouncedWindowResize$
  .pipe(
    map(() => isDesktopDeviceMedia()),
    distinctUntilChanged()
  ).subscribe(val => isDesktopDeviceBS.next(val));
