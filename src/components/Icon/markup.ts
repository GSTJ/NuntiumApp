export const getMarkup = (fill) => ({
  mail: `<svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17 0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.316071 1.44129 0 2.20435 0 3V13C0 13.7956 0.316071 14.5587 0.87868 15.1213C1.44129 15.6839 2.20435 16 3 16H17C17.7956 16 18.5587 15.6839 19.1213 15.1213C19.6839 14.5587 20 13.7956 20 13V3C20 2.20435 19.6839 1.44129 19.1213 0.87868C18.5587 0.316071 17.7956 0 17 0ZM16.59 2L10.71 7.88C10.617 7.97373 10.5064 8.04812 10.3846 8.09889C10.2627 8.14966 10.132 8.1758 10 8.1758C9.86799 8.1758 9.73728 8.14966 9.61542 8.09889C9.49356 8.04812 9.38296 7.97373 9.29 7.88L3.41 2H16.59ZM18 13C18 13.2652 17.8946 13.5196 17.7071 13.7071C17.5196 13.8946 17.2652 14 17 14H3C2.73478 14 2.48043 13.8946 2.29289 13.7071C2.10536 13.5196 2 13.2652 2 13V3.41L7.88 9.29C8.4425 9.8518 9.205 10.1674 10 10.1674C10.795 10.1674 11.5575 9.8518 12.12 9.29L18 3.41V13Z" fill=${fill}/>
  </svg>`,
  lock: `<svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 11C7.69555 10.9964 7.39732 11.0862 7.14544 11.2573C6.89357 11.4284 6.70015 11.6725 6.59121 11.9568C6.48228 12.2411 6.46306 12.552 6.53615 12.8476C6.60923 13.1431 6.77111 13.4092 7 13.61V15C7 15.2652 7.10536 15.5196 7.29289 15.7071C7.48043 15.8946 7.73478 16 8 16C8.26522 16 8.51957 15.8946 8.70711 15.7071C8.89464 15.5196 9 15.2652 9 15V13.61C9.22889 13.4092 9.39077 13.1431 9.46385 12.8476C9.53694 12.552 9.51772 12.2411 9.40879 11.9568C9.29985 11.6725 9.10643 11.4284 8.85456 11.2573C8.60268 11.0862 8.30445 10.9964 8 11ZM13 7V5C13 3.67392 12.4732 2.40215 11.5355 1.46447C10.5979 0.526784 9.32608 0 8 0C6.67392 0 5.40215 0.526784 4.46447 1.46447C3.52678 2.40215 3 3.67392 3 5V7C2.20435 7 1.44129 7.31607 0.87868 7.87868C0.316071 8.44129 0 9.20435 0 10V17C0 17.7956 0.316071 18.5587 0.87868 19.1213C1.44129 19.6839 2.20435 20 3 20H13C13.7956 20 14.5587 19.6839 15.1213 19.1213C15.6839 18.5587 16 17.7956 16 17V10C16 9.20435 15.6839 8.44129 15.1213 7.87868C14.5587 7.31607 13.7956 7 13 7ZM5 5C5 4.20435 5.31607 3.44129 5.87868 2.87868C6.44129 2.31607 7.20435 2 8 2C8.79565 2 9.55871 2.31607 10.1213 2.87868C10.6839 3.44129 11 4.20435 11 5V7H5V5ZM14 17C14 17.2652 13.8946 17.5196 13.7071 17.7071C13.5196 17.8946 13.2652 18 13 18H3C2.73478 18 2.48043 17.8946 2.29289 17.7071C2.10536 17.5196 2 17.2652 2 17V10C2 9.73478 2.10536 9.48043 2.29289 9.29289C2.48043 9.10536 2.73478 9 3 9H13C13.2652 9 13.5196 9.10536 13.7071 9.29289C13.8946 9.48043 14 9.73478 14 10V17Z" fill=${fill}/>
  </svg>`,
  eye: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M21.9199 11.6C19.8999 6.91 16.0999 4 11.9999 4C7.89994 4 4.09994 6.91 2.07994 11.6C2.02488 11.7262 1.99646 11.8623 1.99646 12C1.99646 12.1377 2.02488 12.2738 2.07994 12.4C4.09994 17.09 7.89994 20 11.9999 20C16.0999 20 19.8999 17.09 21.9199 12.4C21.975 12.2738 22.0034 12.1377 22.0034 12C22.0034 11.8623 21.975 11.7262 21.9199 11.6ZM11.9999 18C8.82994 18 5.82994 15.71 4.09994 12C5.82994 8.29 8.82994 6 11.9999 6C15.1699 6 18.1699 8.29 19.8999 12C18.1699 15.71 15.1699 18 11.9999 18ZM11.9999 8C11.2088 8 10.4355 8.2346 9.77766 8.67412C9.11987 9.11365 8.60718 9.73836 8.30443 10.4693C8.00168 11.2002 7.92246 12.0044 8.0768 12.7804C8.23114 13.5563 8.61211 14.269 9.17152 14.8284C9.73093 15.3878 10.4437 15.7688 11.2196 15.9231C11.9955 16.0775 12.7998 15.9983 13.5307 15.6955C14.2616 15.3928 14.8863 14.8801 15.3258 14.2223C15.7653 13.5645 15.9999 12.7911 15.9999 12C15.9999 10.9391 15.5785 9.92172 14.8284 9.17157C14.0782 8.42143 13.0608 8 11.9999 8ZM11.9999 14C11.6044 14 11.2177 13.8827 10.8888 13.6629C10.5599 13.4432 10.3036 13.1308 10.1522 12.7654C10.0008 12.3999 9.9612 11.9978 10.0384 11.6098C10.1155 11.2219 10.306 10.8655 10.5857 10.5858C10.8654 10.3061 11.2218 10.1156 11.6098 10.0384C11.9977 9.96126 12.3999 10.0009 12.7653 10.1522C13.1308 10.3036 13.4431 10.56 13.6629 10.8889C13.8826 11.2178 13.9999 11.6044 13.9999 12C13.9999 12.5304 13.7892 13.0391 13.4142 13.4142C13.0391 13.7893 12.5304 14 11.9999 14Z" fill="#7C82A1"/>
  </svg>`,
  google: `<svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0)">
  <path d="M47.5321 24.5528C47.5321 22.9214 47.3998 21.2811 47.1176 19.6761H24.48V28.9181H37.4435C36.9055 31.8988 35.1771 34.5356 32.6461 36.2111V42.2078H40.3801C44.9217 38.0278 47.5321 31.8547 47.5321 24.5528Z" fill="#4285F4"/>
  <path d="M24.48 48.0016C30.9529 48.0016 36.4116 45.8764 40.3889 42.2078L32.6549 36.2111C30.5031 37.675 27.7253 38.5039 24.4888 38.5039C18.2276 38.5039 12.9187 34.2798 11.0139 28.6006H3.03299V34.7825C7.10721 42.8868 15.4056 48.0016 24.48 48.0016Z" fill="#34A853"/>
  <path d="M11.0051 28.6006C9.99976 25.6199 9.99976 22.3922 11.0051 19.4115V13.2296H3.03301C-0.37099 20.0112 -0.37099 28.0009 3.03301 34.7825L11.0051 28.6006Z" fill="#FBBC04"/>
  <path d="M24.48 9.49932C27.9016 9.44641 31.2086 10.7339 33.6867 13.0973L40.5388 6.24523C36.2 2.17101 30.4414 -0.068932 24.48 0.00161733C15.4056 0.00161733 7.10721 5.11644 3.03299 13.2296L11.0051 19.4115C12.9011 13.7235 18.2187 9.49932 24.48 9.49932Z" fill="#EA4335"/>
  </g>
  </svg>
  `,
  facebook: `<svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 35.9789 8.77641 45.908 20.25 47.7084V30.9375H14.1562V24H20.25V18.7125C20.25 12.6975 23.8331 9.375 29.3152 9.375C31.9402 9.375 34.6875 9.84375 34.6875 9.84375V15.75H31.6613C28.68 15.75 27.75 17.6002 27.75 19.5V24H34.4062L33.3422 30.9375H27.75V47.7084C39.2236 45.908 48 35.9789 48 24Z" fill="#1877F2"/>
  <path d="M33.3422 30.9375L34.4062 24H27.75V19.5C27.75 17.602 28.68 15.75 31.6613 15.75H34.6875V9.84375C34.6875 9.84375 31.9411 9.375 29.3152 9.375C23.8331 9.375 20.25 12.6975 20.25 18.7125V24H14.1562V30.9375H20.25V47.7084C22.7349 48.0972 25.2651 48.0972 27.75 47.7084V30.9375H33.3422Z" fill="white"/>
  </svg>
`,
});
