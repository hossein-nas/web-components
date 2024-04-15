import {html} from "lit";
import {TapIcon} from "../../icon";

export class MicrophoneSlashIcon extends TapIcon {
  render() {
    return this.renderIcon(html`
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_24_932)">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M3.62984 3.65L21.3188 21.315L19.9048 22.729L15.4078 18.239C14.6473 18.5983 13.8345 18.8346 12.9998 18.939V22H10.9998V18.938C9.10917 18.6994 7.36573 17.7938 6.08324 16.3843C4.80074 14.9747 4.06338 13.1537 4.00384 11.249L3.99984 11H5.99984C5.9996 11.9483 6.22415 12.8832 6.65507 13.7279C7.08598 14.5727 7.711 15.3033 8.47886 15.8598C9.24672 16.4163 10.1356 16.7828 11.0725 16.9294C12.0094 17.076 12.9677 16.9984 13.8688 16.703L12.1608 14.997L11.9998 15C10.9736 15 9.98662 14.6056 9.24303 13.8983C8.49945 13.191 8.05616 12.225 8.00484 11.2L7.99984 11V10.84L2.21484 5.064L3.62884 3.65H3.62984ZM19.9998 11C19.9998 12.756 19.4338 14.38 18.4738 15.7L17.0378 14.26C17.6078 13.38 17.9548 12.342 17.9958 11.225L17.9998 11H19.9998ZM11.9998 2C13.0261 2 14.0131 2.39444 14.7567 3.10172C15.5002 3.80901 15.9435 4.77504 15.9948 5.8L15.9998 6V11C15.9998 11.646 15.8468 12.255 15.5758 12.795L13.9898 11.204L13.9948 11.149L13.9998 11V6C14.0022 5.48102 13.8027 4.98145 13.4435 4.60685C13.0843 4.23224 12.5935 4.01193 12.0749 3.99246C11.5563 3.97299 11.0504 4.15588 10.6641 4.50249C10.2779 4.84911 10.0414 5.3323 10.0048 5.85L9.99984 6V7.205L8.06684 5.267C8.23815 4.34907 8.72512 3.51997 9.44341 2.92331C10.1617 2.32665 11.0661 2.00002 11.9998 2Z" fill="currentColor"/>
        </g>
        <defs>
          <clipPath id="clip0_24_932">
            <rect width="24" height="24" fill="white"/>
          </clipPath>
        </defs>
      </svg>
      `);
  }
}