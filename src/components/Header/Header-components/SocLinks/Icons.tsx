type Props = {
  color: string;
  width: number;
  height: number;
};

export const LinkedinIcon: React.FC<Props> = ({ color, width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      fillRule="evenodd"
      clipRule="evenodd"
    >
      <path
        d="M4 1C2.34315 1 1 2.34315 1 4C1 5.65685 2.34315 7 4 7C5.65685 7 7 5.65685 7 4C7 2.34315 5.65685 1 4 1ZM3 4C3 3.44772 3.44772 3 4 3C4.55228 3 5 3.44772 5 4C5 4.55228 4.55228 5 4 5C3.44772 5 3 4.55228 3 4Z"
      />
      <path
        d="M16 7C14.1435 7 12.363 7.7375 11.0503 9.05025C9.7375 10.363 9 12.1435 9 14V21C9 21.5523 9.44771 22 10 22H14C14.5523 22 15 21.5523 15 21V14C15 13.7348 15.1054 13.4804 15.2929 13.2929C15.4804 13.1054 15.7348 13 16 13C16.2652 13 16.5196 13.1054 16.7071 13.2929C16.8946 13.4804 17 13.7348 17 14V21C17 21.5523 17.4477 22 18 22H22C22.5523 22 23 21.5523 23 21V14C23 12.1435 22.2625 10.363 20.9497 9.05025C19.637 7.7375 17.8565 7 16 7ZM16 9C14.6739 9 13.4021 9.52678 12.4645 10.4645C11.5268 11.4021 11 12.6739 11 14V20H13V14C13 13.2043 13.3161 12.4413 13.8787 11.8787C14.4413 11.3161 15.2043 11 16 11C16.7957 11 17.5587 11.3161 18.1213 11.8787C18.6839 12.4413 19 13.2043 19 14V20H21V14C21 12.6739 20.4732 11.4021 19.5355 10.4645C18.5979 9.52678 17.3261 9 16 9Z"
      />
      <path
        d="M1 9C1 8.44772 1.44772 8 2 8H6C6.55228 8 7 8.44772 7 9V21C7 21.5523 6.55228 22 6 22H2C1.44772 22 1 21.5523 1 21V9ZM3 10V20H5V10H3Z"
      />
    </svg>
  );
};

export const GitHubIcon: React.FC<Props> = ({ color, width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 0.246582C7.62547 0.24668 5.32846 1.0917 3.51996 2.63043C1.71146 4.16916 0.509498 6.3012 0.12913 8.64506C-0.251238 10.9889 0.214815 13.3917 1.4439 15.4233C2.67298 17.455 4.58488 18.9831 6.83752 19.7341C7.33752 19.8216 7.52502 19.5216 7.52502 19.2591C7.52502 19.0216 7.51251 18.2341 7.51251 17.3966C5 17.8591 4.35 16.7841 4.15 16.2216C3.92807 15.6745 3.57627 15.1897 3.125 14.8091C2.775 14.6216 2.275 14.1591 3.11249 14.1466C3.43227 14.1813 3.73898 14.2926 4.00663 14.471C4.27427 14.6494 4.49496 14.8897 4.65 15.1716C4.78677 15.4173 4.97068 15.6336 5.19119 15.8081C5.4117 15.9826 5.66447 16.1118 5.93503 16.1885C6.20559 16.2651 6.48861 16.2876 6.76788 16.2547C7.04714 16.2218 7.31717 16.134 7.56248 15.9966C7.60577 15.4882 7.83234 15.0129 8.2 14.6591C5.975 14.4091 3.65 13.5466 3.65 9.72161C3.63594 8.72776 4.00268 7.76619 4.675 7.03411C4.36928 6.17033 4.40505 5.2224 4.775 4.38411C4.775 4.38411 5.61247 4.1216 7.525 5.40911C9.16128 4.95909 10.8887 4.95909 12.525 5.40911C14.4375 4.10911 15.275 4.38411 15.275 4.38411C15.645 5.22238 15.6808 6.17034 15.375 7.03411C16.0493 7.76494 16.4164 8.72734 16.4 9.72161C16.4 13.5591 14.0625 14.4091 11.8375 14.6591C12.0761 14.901 12.2599 15.1914 12.3764 15.5106C12.4929 15.8298 12.5393 16.1704 12.5125 16.5091C12.5125 17.8466 12.5 18.9216 12.5 19.2591C12.5 19.5216 12.6875 19.8341 13.1875 19.7341C15.4362 18.977 17.3426 17.4453 18.5664 15.4126C19.7903 13.3799 20.2519 10.9784 19.8689 8.63682C19.4859 6.29523 18.2832 4.16595 16.4755 2.62909C14.6678 1.09223 12.3727 0.247817 10 0.246582Z"
        fill={color}
      />
    </svg>
  );
};