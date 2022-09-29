import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.scss'],
})
export class CountdownTimerComponent {
  private countDownTime!: number;
  private timerNumerics = {
    milliseconds: 1000,
    minuteInSeconds: 60,
    minutesInHours: 60,
    hoursInDay: 24,
  };

  @Input() set time(value: string) {
    this.countDownTime = new Date(value).getTime();
  }

  get days(): string {
    const { milliseconds, minuteInSeconds, minutesInHours, hoursInDay } =
      this.timerNumerics;

    const days = Math.floor(
      this.timeDifference /
        (hoursInDay * minutesInHours * minuteInSeconds * milliseconds)
    );
    return this.formatTime(days);
  }

  get hours(): string {
    const { milliseconds, minuteInSeconds, minutesInHours, hoursInDay } =
      this.timerNumerics;
    const hours = Math.floor(
      (this.timeDifference %
        (hoursInDay * minutesInHours * minuteInSeconds * milliseconds)) /
        (minutesInHours * minuteInSeconds * milliseconds)
    );
    return this.formatTime(hours);
  }

  get minutes(): string {
    const { milliseconds, minuteInSeconds, minutesInHours } =
      this.timerNumerics;

    const minutes = Math.floor(
      (this.timeDifference %
        (minutesInHours * minuteInSeconds * milliseconds)) /
        (minuteInSeconds * milliseconds)
    );

    return this.formatTime(minutes);
  }

  get seconds(): string {
    const { milliseconds, minuteInSeconds } = this.timerNumerics;
    const seconds = Math.floor(
      (this.timeDifference % (minuteInSeconds * milliseconds)) / milliseconds
    );

    return this.formatTime(seconds);
  }

  private formatTime(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }

  private get timeDifference(): number {
    const currentTime = new Date().getTime();
    return this.countDownTime - currentTime;
  }
}
