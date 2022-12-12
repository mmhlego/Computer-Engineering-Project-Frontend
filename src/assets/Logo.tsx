interface Props {
	className?: string;
}

export default function Logo({ className }: Props) {
	return (
		<svg
			width="200"
			height="67"
			viewBox="0 0 200 67"
			className={className}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect width="200" height="67" />
			<path
				d="M40.6659 5.48296C48.8412 1.81248 55.7777 1.31943 58.993 4.89299C62.929 9.27565 60.232 18.5467 52.9879 28.374V28.4203H56.4224L52.6297 34.9985V35.0997L55.7482 41.7243H55.7861C68.9552 27.1182 74.2818 11.1678 67.653 3.79732C62.4022 -1.99707 51.0368 -0.943549 38.6431 5.48296V5.50824H40.5479L40.6659 5.48296ZM40.0591 43.2793C40.0591 44.2864 40.0591 45.2978 40.0591 46.305V53.4479C40.0761 53.6605 40.0469 53.8743 39.9734 54.0745C39.8999 54.2747 39.7838 54.4566 39.6332 54.6077C39.4826 54.7587 39.301 54.8752 39.1009 54.9493C38.9009 55.0234 38.6872 55.0531 38.4746 55.0366H27.1513C26.9381 55.0545 26.7236 55.0257 26.5227 54.9522C26.3218 54.8787 26.1394 54.7623 25.9881 54.611C25.8369 54.4598 25.7204 54.2773 25.6469 54.0764C25.5734 53.8755 25.5446 53.661 25.5625 53.4479V51.9814L25.5204 51.9477C16.3252 56.6211 8.33528 57.5861 4.8165 53.6755C1.13338 49.5836 3.26571 41.1891 9.48995 32.0655L9.51944 31.9602V30.6707H9.49416C0.256844 43.313 -2.81524 55.8794 2.84852 62.1795C10.535 70.6836 31.2263 64.5141 49.1236 48.4036C50.9862 46.718 52.7435 45.0028 54.3954 43.2582L54.3744 43.2245H40.1138L40.0591 43.2793ZM28.4113 29.5034L32.0818 42.0993L32.0523 42.1499H27.8129L27.7454 42.1035L27.2018 39.8743H23.9401L23.367 42.1035L23.308 42.1499H20.2275L20.198 42.0993L23.801 29.5034L23.8558 29.4696H28.3481L28.4113 29.516M26.6751 37.4006L25.6763 33.2076H25.6047L24.5301 37.4006H26.6751ZM17.7664 35.5885V35.5295C19.1107 35.2514 19.7302 34.2231 19.7302 32.7693C19.7302 30.5147 18.5292 29.4739 16.1524 29.4739H10.6193L10.5772 29.516V42.1162L10.6278 42.1667H16.2157C18.407 42.1667 20.0083 41.3239 20.0083 38.7617C20.0083 37.034 19.6502 35.9804 17.7538 35.5885M14.3825 31.7368H15.2253C15.9502 31.7368 16.2747 32.3605 16.2747 33.157C16.2747 34.2105 15.7985 34.5813 15.2464 34.5813H14.3614L14.3825 31.7368ZM15.0905 39.8363H14.3867V36.7516H15.1706C16.144 36.7516 16.4348 37.3416 16.4348 38.3024C16.4348 39.8195 15.5203 39.8363 15.0989 39.8363M54.446 29.5034V29.4696H50.569L50.5227 29.4949L48.4957 33.2623H48.4367V29.5034L48.403 29.4696H44.5302L44.4923 29.5034V42.1457L44.5302 42.1794H48.403L48.4367 42.1457V37.3121H48.5041L50.4932 42.1457L50.5437 42.1794H54.6061V42.1457V33.2623L54.446 29.5034ZM39.0519 29.4696L39.0182 29.5034V36.0647H38.9634L36.4729 29.5034L36.4265 29.4696H32.8698L32.8319 29.5034V42.1457L32.8698 42.1794H36.3844L36.4223 42.1457V35.6096H36.4771L38.9381 42.1457L38.9887 42.1794H42.5622L42.5959 42.1457V29.5034L42.5622 29.4696H39.0519Z"
				fill="#2388FF"
			/>
			<path
				d="M10.1138 28.2345H56.0475V40.6661C56.0475 42.6444 54.4438 44.2481 52.4655 44.2481H10.1138V28.2345Z"
				fill="white"
			/>
			<path
				d="M19.7227 33.5421C19.694 33.1829 19.5593 32.9028 19.3187 32.7016C19.0816 32.5005 18.7207 32.3999 18.2358 32.3999C17.9269 32.3999 17.6737 32.4376 17.4762 32.5131C17.2823 32.5849 17.1386 32.6837 17.0452 32.8094C16.9518 32.9351 16.9033 33.0787 16.8998 33.2404C16.8926 33.3732 16.9159 33.4936 16.9698 33.6013C17.0273 33.7055 17.117 33.8006 17.2392 33.8868C17.3613 33.9694 17.5175 34.0449 17.7079 34.1131C17.8982 34.1814 18.1245 34.2424 18.3867 34.2963L19.2917 34.4902C19.9023 34.6195 20.4249 34.7901 20.8595 35.002C21.294 35.2139 21.6496 35.4635 21.9262 35.7509C22.2027 36.0346 22.4056 36.3542 22.5349 36.7098C22.6678 37.0654 22.7361 37.4533 22.7396 37.8735C22.7361 38.599 22.5547 39.2131 22.1955 39.716C21.8364 40.2188 21.3228 40.6013 20.6547 40.8635C19.9903 41.1256 19.1912 41.2567 18.2574 41.2567C17.2984 41.2567 16.4616 41.1149 15.7469 40.8311C15.0357 40.5474 14.4826 40.111 14.0876 39.522C13.6961 38.9294 13.4985 38.1716 13.495 37.2486H16.3395C16.3574 37.5862 16.4418 37.8699 16.5927 38.0998C16.7435 38.3296 16.9554 38.5038 17.2284 38.6223C17.5049 38.7408 17.8336 38.8001 18.2143 38.8001C18.5339 38.8001 18.8015 38.7606 19.017 38.6816C19.2325 38.6026 19.3959 38.493 19.5072 38.353C19.6186 38.2129 19.676 38.0531 19.6796 37.8735C19.676 37.7047 19.6204 37.5574 19.5126 37.4317C19.4085 37.3024 19.2361 37.1875 18.9954 37.0869C18.7548 36.9828 18.4298 36.8858 18.0203 36.796L16.9213 36.559C15.9444 36.3471 15.174 35.9933 14.6101 35.4977C14.0498 34.9984 13.7715 34.3178 13.7751 33.4559C13.7715 32.7555 13.9583 32.1431 14.3354 31.6188C14.7161 31.0908 15.2422 30.6796 15.9139 30.3851C16.5891 30.0906 17.3631 29.9433 18.2358 29.9433C19.1265 29.9433 19.8969 30.0924 20.547 30.3905C21.1971 30.6886 21.6981 31.1088 22.0501 31.6511C22.4056 32.1898 22.5852 32.8201 22.5888 33.5421H19.7227ZM26.896 36.4728V41.1274H23.9222V30.0941H26.7882V34.4256H26.8744C27.0612 33.8976 27.3719 33.4864 27.8064 33.1919C28.241 32.8938 28.7636 32.7447 29.3742 32.7447C29.9596 32.7447 30.4678 32.8776 30.8988 33.1434C31.3334 33.4092 31.6692 33.7755 31.9062 34.2424C32.1469 34.7093 32.2654 35.2445 32.2618 35.8478V41.1274H29.288V36.4728C29.2916 36.0633 29.1892 35.7419 28.9809 35.5084C28.7762 35.275 28.4835 35.1583 28.1028 35.1583C27.8621 35.1583 27.6502 35.2121 27.467 35.3199C27.2875 35.424 27.1474 35.5749 27.0468 35.7724C26.9499 35.9664 26.8996 36.1998 26.896 36.4728ZM37.7165 41.2783C36.8186 41.2783 36.05 41.1005 35.4107 40.7449C34.7714 40.3858 34.2811 39.8866 33.9399 39.2473C33.5987 38.6044 33.4281 37.8591 33.4281 37.0115C33.4281 36.1639 33.5987 35.4204 33.9399 34.7811C34.2811 34.1383 34.7714 33.639 35.4107 33.2835C36.05 32.9243 36.8186 32.7447 37.7165 32.7447C38.6144 32.7447 39.383 32.9243 40.0223 33.2835C40.6616 33.639 41.1518 34.1383 41.493 34.7811C41.8342 35.4204 42.0048 36.1639 42.0048 37.0115C42.0048 37.8591 41.8342 38.6044 41.493 39.2473C41.1518 39.8866 40.6616 40.3858 40.0223 40.7449C39.383 41.1005 38.6144 41.2783 37.7165 41.2783ZM37.738 39.0802C37.9894 39.0802 38.2067 38.9958 38.3899 38.827C38.5731 38.6582 38.7149 38.4176 38.8155 38.1051C38.9161 37.7927 38.9663 37.4209 38.9663 36.99C38.9663 36.5554 38.9161 36.1837 38.8155 35.8748C38.7149 35.5623 38.5731 35.3217 38.3899 35.1529C38.2067 34.9841 37.9894 34.8997 37.738 34.8997C37.4722 34.8997 37.2442 34.9841 37.0538 35.1529C36.8635 35.3217 36.718 35.5623 36.6175 35.8748C36.5169 36.1837 36.4666 36.5554 36.4666 36.99C36.4666 37.4209 36.5169 37.7927 36.6175 38.1051C36.718 38.4176 36.8635 38.6582 37.0538 38.827C37.2442 38.9958 37.4722 39.0802 37.738 39.0802ZM43.2116 44.2306V32.8525H46.1638V34.2963H46.2285C46.3362 34.0161 46.4943 33.7593 46.7026 33.5259C46.9109 33.2888 47.1695 33.1003 47.4784 32.9602C47.7872 32.8166 48.1464 32.7447 48.5558 32.7447C49.1017 32.7447 49.6207 32.8902 50.1128 33.1811C50.6084 33.472 51.0107 33.9299 51.3195 34.5549C51.632 35.1798 51.7882 35.9915 51.7882 36.99C51.7882 37.9453 51.6392 38.7373 51.3411 39.3658C51.0466 39.9943 50.6515 40.463 50.1559 40.7719C49.6638 41.0808 49.1233 41.2352 48.5343 41.2352C48.1464 41.2352 47.7998 41.1723 47.4945 41.0466C47.1928 40.9173 46.9342 40.7431 46.7187 40.5241C46.5068 40.3014 46.3434 40.05 46.2285 39.7698H46.1854V44.2306H43.2116ZM46.1207 36.99C46.1207 37.3922 46.1728 37.7406 46.277 38.0351C46.3847 38.326 46.5356 38.5523 46.7295 38.7139C46.927 38.8719 47.1623 38.951 47.4353 38.951C47.7082 38.951 47.9399 38.8737 48.1302 38.7193C48.3242 38.5613 48.4714 38.3368 48.572 38.0459C48.6761 37.7514 48.7282 37.3994 48.7282 36.99C48.7282 36.5805 48.6761 36.2303 48.572 35.9394C48.4714 35.6449 48.3242 35.4204 48.1302 35.266C47.9399 35.108 47.7082 35.029 47.4353 35.029C47.1623 35.029 46.927 35.108 46.7295 35.266C46.5356 35.4204 46.3847 35.6449 46.277 35.9394C46.1728 36.2303 46.1207 36.5805 46.1207 36.99Z"
				fill="#2388FF"
			/>
			<path
				d="M41.5845 28.4204H29.1487V28.3825C32.1702 19.832 38.1247 11.8295 49.7978 6.77254C49.9513 6.67473 50.1234 6.60965 50.3032 6.58137C50.483 6.55309 50.6668 6.56222 50.8429 6.60819C51.1126 6.74725 51.1337 7.06752 51.1337 7.51001V17.43C51.1843 17.8633 51.087 18.3011 50.8575 18.6721C50.628 19.0431 50.2798 19.3257 49.8694 19.4738C46.1309 21.317 43.21 24.4827 41.673 28.3572L41.5845 28.4204ZM26.3126 43.2751C26.1398 45.9047 26.0935 48.4795 26.0935 50.9448V53.448C26.0842 53.5893 26.1051 53.7309 26.155 53.8635C26.2049 53.996 26.2825 54.1164 26.3826 54.2166C26.4827 54.3167 26.6031 54.3943 26.7357 54.4442C26.8682 54.494 27.0099 54.515 27.1512 54.5057H38.4619C38.6033 54.5157 38.7453 54.4952 38.8782 54.4456C39.0111 54.396 39.1317 54.3184 39.232 54.2181C39.3323 54.1178 39.4099 53.9972 39.4595 53.8643C39.5091 53.7314 39.5296 53.5894 39.5196 53.448V46.305C39.5196 45.2852 39.5196 44.2724 39.5196 43.2667L39.4732 43.2245H26.3674L26.3126 43.2751Z"
				fill="#E52528"
			/>
			<path
				d="M31.5679 18.2769H16.9239C16.7829 18.2862 16.6417 18.2653 16.5094 18.2157C16.3772 18.1661 16.257 18.0888 16.157 17.9892C16.0569 17.8895 15.9792 17.7697 15.929 17.6376C15.8789 17.5056 15.8575 17.3644 15.8661 17.2234V7.61946C15.8583 7.47829 15.8802 7.33705 15.9305 7.20492C15.9808 7.07279 16.0584 6.95274 16.1582 6.85256C16.2579 6.75239 16.3777 6.67435 16.5096 6.62351C16.6415 6.57267 16.7827 6.55018 16.9239 6.5575H44.4336C45.1457 6.5575 45.4407 6.59543 45.5419 6.90727C45.643 7.21912 45.2764 7.58153 44.8297 7.8428C40.5734 10.3165 36.7344 13.4602 33.873 17.1728C33.6349 17.5493 33.3097 17.8629 32.9248 18.0873C32.4976 18.2542 32.0373 18.3191 31.5805 18.2769"
				fill="#F08222"
			/>
			<path
				d="M79.0227 45C78.9924 44.6212 78.8504 44.3258 78.5966 44.1136C78.3466 43.9015 77.9659 43.7955 77.4545 43.7955C77.1288 43.7955 76.8617 43.8352 76.6534 43.9148C76.4489 43.9905 76.2973 44.0947 76.1989 44.2273C76.1004 44.3598 76.0492 44.5114 76.0455 44.6818C76.0379 44.822 76.0625 44.9489 76.1193 45.0625C76.1799 45.1723 76.2746 45.2727 76.4034 45.3636C76.5322 45.4508 76.697 45.5303 76.8977 45.6023C77.0985 45.6742 77.3371 45.7386 77.6136 45.7955L78.5682 46C79.2121 46.1364 79.7633 46.3163 80.2216 46.5398C80.6799 46.7633 81.0549 47.0265 81.3466 47.3295C81.6383 47.6288 81.8523 47.9659 81.9886 48.3409C82.1288 48.7159 82.2008 49.125 82.2045 49.5682C82.2008 50.3333 82.0095 50.9811 81.6307 51.5114C81.2519 52.0417 80.7102 52.4451 80.0057 52.7216C79.3049 52.9981 78.4621 53.1364 77.4773 53.1364C76.4659 53.1364 75.5833 52.9867 74.8295 52.6875C74.0795 52.3883 73.4962 51.928 73.0795 51.3068C72.6667 50.6818 72.4583 49.8826 72.4545 48.9091H75.4545C75.4735 49.2652 75.5625 49.5644 75.7216 49.8068C75.8807 50.0492 76.1042 50.233 76.392 50.358C76.6837 50.483 77.0303 50.5455 77.4318 50.5455C77.7689 50.5455 78.0511 50.5038 78.2784 50.4205C78.5057 50.3371 78.678 50.2216 78.7955 50.0739C78.9129 49.9261 78.9735 49.7576 78.9773 49.5682C78.9735 49.3902 78.9148 49.2348 78.8011 49.1023C78.6913 48.9659 78.5095 48.8447 78.2557 48.7386C78.0019 48.6288 77.6591 48.5265 77.2273 48.4318L76.0682 48.1818C75.0379 47.9583 74.2254 47.5852 73.6307 47.0625C73.0398 46.536 72.7462 45.8182 72.75 44.9091C72.7462 44.1705 72.9432 43.5246 73.3409 42.9716C73.7424 42.4148 74.2973 41.9811 75.0057 41.6705C75.7178 41.3598 76.5341 41.2045 77.4545 41.2045C78.3939 41.2045 79.2064 41.3617 79.892 41.6761C80.5777 41.9905 81.1061 42.4337 81.4773 43.0057C81.8523 43.5739 82.0417 44.2386 82.0455 45H79.0227ZM85.0063 53V41.3636H93.3926V43.9091H88.1653V45.9091H92.9608V48.4545H88.1653V50.4545H93.3699V53H85.0063ZM99.7412 41.3636L102.128 49.5682H102.218L104.605 41.3636H108.173L104.332 53H100.014L96.173 41.3636H99.7412ZM110.894 53V41.3636H119.28V43.9091H114.053V45.9091H118.848V48.4545H114.053V50.4545H119.257V53H110.894ZM132.515 41.3636V53H129.879L125.674 46.8864H125.606V53H122.447V41.3636H125.129L129.265 47.4545H129.356V41.3636H132.515ZM146.67 45C146.639 44.6212 146.497 44.3258 146.243 44.1136C145.993 43.9015 145.613 43.7955 145.101 43.7955C144.776 43.7955 144.509 43.8352 144.3 43.9148C144.096 43.9905 143.944 44.0947 143.846 44.2273C143.747 44.3598 143.696 44.5114 143.692 44.6818C143.685 44.822 143.709 44.9489 143.766 45.0625C143.827 45.1723 143.921 45.2727 144.05 45.3636C144.179 45.4508 144.344 45.5303 144.545 45.6023C144.745 45.6742 144.984 45.7386 145.261 45.7955L146.215 46C146.859 46.1364 147.41 46.3163 147.868 46.5398C148.327 46.7633 148.702 47.0265 148.993 47.3295C149.285 47.6288 149.499 47.9659 149.636 48.3409C149.776 48.7159 149.848 49.125 149.851 49.5682C149.848 50.3333 149.656 50.9811 149.278 51.5114C148.899 52.0417 148.357 52.4451 147.653 52.7216C146.952 52.9981 146.109 53.1364 145.124 53.1364C144.113 53.1364 143.23 52.9867 142.476 52.6875C141.726 52.3883 141.143 51.928 140.726 51.3068C140.314 50.6818 140.105 49.8826 140.101 48.9091H143.101C143.12 49.2652 143.209 49.5644 143.368 49.8068C143.528 50.0492 143.751 50.233 144.039 50.358C144.331 50.483 144.677 50.5455 145.079 50.5455C145.416 50.5455 145.698 50.5038 145.925 50.4205C146.153 50.3371 146.325 50.2216 146.442 50.0739C146.56 49.9261 146.62 49.7576 146.624 49.5682C146.62 49.3902 146.562 49.2348 146.448 49.1023C146.338 48.9659 146.156 48.8447 145.903 48.7386C145.649 48.6288 145.306 48.5265 144.874 48.4318L143.715 48.1818C142.685 47.9583 141.872 47.5852 141.278 47.0625C140.687 46.536 140.393 45.8182 140.397 44.9091C140.393 44.1705 140.59 43.5246 140.988 42.9716C141.389 42.4148 141.944 41.9811 142.653 41.6705C143.365 41.3598 144.181 41.2045 145.101 41.2045C146.041 41.2045 146.853 41.3617 147.539 41.6761C148.225 41.9905 148.753 42.4337 149.124 43.0057C149.499 43.5739 149.689 44.2386 149.692 45H146.67ZM152.653 53V41.3636H155.812V45.9091H159.994V41.3636H163.153V53H159.994V48.4545H155.812V53H152.653ZM177.526 47.1818C177.526 48.4773 177.274 49.5701 176.77 50.4602C176.266 51.3466 175.586 52.0189 174.73 52.4773C173.874 52.9318 172.92 53.1591 171.867 53.1591C170.806 53.1591 169.848 52.9299 168.992 52.4716C168.139 52.0095 167.461 51.3352 166.958 50.4489C166.458 49.5587 166.208 48.4697 166.208 47.1818C166.208 45.8864 166.458 44.7955 166.958 43.9091C167.461 43.0189 168.139 42.3466 168.992 41.892C169.848 41.4337 170.806 41.2045 171.867 41.2045C172.92 41.2045 173.874 41.4337 174.73 41.892C175.586 42.3466 176.266 43.0189 176.77 43.9091C177.274 44.7955 177.526 45.8864 177.526 47.1818ZM174.276 47.1818C174.276 46.4848 174.183 45.8977 173.997 45.4205C173.816 44.9394 173.545 44.5758 173.185 44.3295C172.829 44.0795 172.389 43.9545 171.867 43.9545C171.344 43.9545 170.903 44.0795 170.543 44.3295C170.187 44.5758 169.916 44.9394 169.73 45.4205C169.549 45.8977 169.458 46.4848 169.458 47.1818C169.458 47.8788 169.549 48.4678 169.73 48.9489C169.916 49.4261 170.187 49.7898 170.543 50.0398C170.903 50.286 171.344 50.4091 171.867 50.4091C172.389 50.4091 172.829 50.286 173.185 50.0398C173.545 49.7898 173.816 49.4261 173.997 48.9489C174.183 48.4678 174.276 47.8788 174.276 47.1818ZM180.588 53V41.3636H185.61C186.474 41.3636 187.23 41.5341 187.877 41.875C188.525 42.2159 189.029 42.6951 189.389 43.3125C189.748 43.9299 189.928 44.6515 189.928 45.4773C189.928 46.3106 189.743 47.0322 189.372 47.642C189.004 48.2519 188.487 48.7216 187.82 49.0511C187.158 49.3807 186.383 49.5455 185.497 49.5455H182.497V47.0909H184.86C185.231 47.0909 185.548 47.0265 185.809 46.8977C186.074 46.7652 186.277 46.5777 186.417 46.3352C186.561 46.0928 186.633 45.8068 186.633 45.4773C186.633 45.1439 186.561 44.8598 186.417 44.625C186.277 44.3864 186.074 44.2045 185.809 44.0795C185.548 43.9508 185.231 43.8864 184.86 43.8864H183.747V53H180.588Z"
				fill="#070707"
			/>
			<path
				d="M92.8 29.336L93.216 27.096C94.2507 27.096 95.152 27.0693 95.92 27.016C96.688 26.952 97.3227 26.8613 97.824 26.744C98.336 26.616 98.7147 26.4507 98.96 26.248C99.216 26.0453 99.344 25.8 99.344 25.512C99.344 25.128 99.28 24.6693 99.152 24.136C99.024 23.592 98.8587 23.0427 98.656 22.488L100.752 21.88C100.891 22.2427 101.024 22.6427 101.152 23.08C101.28 23.5067 101.381 23.9387 101.456 24.376C101.541 24.8027 101.584 25.2027 101.584 25.576C101.584 26.2373 101.44 26.808 101.152 27.288C100.864 27.7573 100.384 28.1467 99.712 28.456C99.0507 28.7547 98.1547 28.9733 97.024 29.112C95.8933 29.2613 94.4853 29.336 92.8 29.336ZM92.784 29.336C91.632 29.336 90.656 29.2453 89.856 29.064C89.0667 28.8933 88.4213 28.648 87.92 28.328C87.4293 27.9973 87.072 27.6133 86.848 27.176C86.624 26.7387 86.512 26.2587 86.512 25.736C86.512 25.3947 86.5387 25.0533 86.592 24.712C86.656 24.36 86.7307 24.0187 86.816 23.688C86.912 23.3573 86.9973 23.0587 87.072 22.792L89.072 23.256C89.0293 23.448 88.9813 23.656 88.928 23.88C88.8747 24.104 88.832 24.3227 88.8 24.536C88.768 24.7387 88.752 24.9253 88.752 25.096C88.752 25.4907 88.8907 25.8427 89.168 26.152C89.456 26.4507 89.9253 26.6853 90.576 26.856C91.2267 27.016 92.1013 27.096 93.2 27.096L93.52 28.824L92.784 29.336ZM93.952 34.728C93.6853 34.728 93.4613 34.6373 93.28 34.456C93.1093 34.2747 93.024 34.056 93.024 33.8C93.024 33.5333 93.1093 33.304 93.28 33.112C93.4613 32.92 93.6853 32.824 93.952 32.824C94.208 32.824 94.4267 32.92 94.608 33.112C94.7893 33.304 94.88 33.5333 94.88 33.8C94.88 34.056 94.7893 34.2747 94.608 34.456C94.4267 34.6373 94.208 34.728 93.952 34.728ZM95.184 32.664C94.9173 32.664 94.6933 32.5733 94.512 32.392C94.3413 32.2107 94.256 31.992 94.256 31.736C94.256 31.4693 94.3413 31.24 94.512 31.048C94.6933 30.856 94.9173 30.76 95.184 30.76C95.44 30.76 95.6587 30.856 95.84 31.048C96.0213 31.24 96.112 31.4693 96.112 31.736C96.112 31.992 96.0213 32.2107 95.84 32.392C95.6587 32.5733 95.44 32.664 95.184 32.664ZM92.784 32.664C92.5173 32.664 92.2933 32.5733 92.112 32.392C91.9307 32.2107 91.84 31.992 91.84 31.736C91.84 31.4693 91.9307 31.24 92.112 31.048C92.2933 30.856 92.5173 30.76 92.784 30.76C93.0293 30.76 93.2427 30.856 93.424 31.048C93.616 31.24 93.712 31.4693 93.712 31.736C93.712 31.992 93.616 32.2107 93.424 32.392C93.2427 32.5733 93.0293 32.664 92.784 32.664ZM109.063 29.08C108.071 29.08 107.303 28.9787 106.759 28.776C106.225 28.5733 105.852 28.2587 105.639 27.832C105.425 27.3947 105.303 26.8453 105.271 26.184L104.935 17.288H107.175L107.511 25.112C107.532 25.6027 107.585 25.9707 107.671 26.216C107.756 26.4613 107.916 26.6267 108.151 26.712C108.396 26.7973 108.753 26.84 109.223 26.84C109.628 26.84 109.916 26.9467 110.087 27.16C110.268 27.3627 110.359 27.6187 110.359 27.928C110.359 28.2587 110.247 28.536 110.023 28.76C109.799 28.9733 109.479 29.08 109.063 29.08ZM110.684 29.08L110.844 26.84C111.196 26.84 111.484 26.8133 111.708 26.76C111.932 26.696 112.114 26.5627 112.252 26.36C112.402 26.1467 112.53 25.832 112.636 25.416C112.754 24.9893 112.882 24.4133 113.02 23.688L115.1 24.072C115.068 24.232 115.031 24.4187 114.988 24.632C114.946 24.8453 114.908 25.064 114.876 25.288C114.844 25.5013 114.828 25.6933 114.828 25.864C114.828 26.1627 114.924 26.4027 115.116 26.584C115.308 26.7547 115.671 26.84 116.204 26.84C116.471 26.84 116.7 26.8133 116.892 26.76C117.095 26.696 117.266 26.5627 117.404 26.36C117.554 26.1467 117.682 25.8213 117.788 25.384C117.906 24.936 118.018 24.3333 118.124 23.576L120.236 23.912C120.194 24.1573 120.151 24.4187 120.108 24.696C120.066 24.9733 120.028 25.2293 119.996 25.464C119.964 25.6987 119.948 25.8907 119.948 26.04C119.948 26.1787 119.986 26.312 120.06 26.44C120.146 26.5573 120.295 26.6533 120.508 26.728C120.732 26.8027 121.047 26.84 121.452 26.84C121.74 26.84 121.986 26.8027 122.188 26.728C122.402 26.6533 122.562 26.5307 122.668 26.36C122.786 26.1893 122.844 25.9653 122.844 25.688C122.844 25.2933 122.754 24.776 122.572 24.136C122.391 23.496 122.178 22.824 121.932 22.12L124.188 21.448C124.359 21.9067 124.508 22.3973 124.636 22.92C124.775 23.432 124.882 23.9333 124.956 24.424C125.042 24.904 125.084 25.3253 125.084 25.688C125.084 26.232 124.999 26.7173 124.828 27.144C124.658 27.56 124.418 27.912 124.108 28.2C123.799 28.488 123.431 28.7067 123.004 28.856C122.578 29.0053 122.108 29.08 121.596 29.08C120.978 29.08 120.471 29.0213 120.076 28.904C119.682 28.776 119.378 28.568 119.164 28.28C118.962 27.9813 118.828 27.576 118.764 27.064H119.308C119.084 27.6933 118.834 28.152 118.556 28.44C118.279 28.7173 117.948 28.8933 117.564 28.968C117.191 29.0427 116.722 29.08 116.156 29.08C115.804 29.08 115.442 29.0427 115.068 28.968C114.706 28.8827 114.38 28.6907 114.092 28.392C113.804 28.0933 113.591 27.6293 113.452 27L114.316 26.968C114.092 27.5973 113.799 28.0613 113.436 28.36C113.084 28.6587 112.679 28.856 112.22 28.952C111.762 29.0373 111.25 29.08 110.684 29.08ZM119.052 19.176C118.786 19.176 118.551 19.0747 118.348 18.872C118.156 18.6693 118.06 18.4293 118.06 18.152C118.06 17.8747 118.156 17.64 118.348 17.448C118.551 17.256 118.786 17.16 119.052 17.16C119.33 17.16 119.564 17.256 119.756 17.448C119.948 17.64 120.044 17.8747 120.044 18.152C120.044 18.4293 119.948 18.6693 119.756 18.872C119.564 19.0747 119.33 19.176 119.052 19.176ZM117.772 21.288C117.506 21.288 117.271 21.1867 117.068 20.984C116.876 20.7813 116.78 20.5413 116.78 20.264C116.78 19.9867 116.876 19.752 117.068 19.56C117.271 19.368 117.506 19.272 117.772 19.272C118.05 19.272 118.284 19.368 118.476 19.56C118.668 19.752 118.764 19.9867 118.764 20.264C118.764 20.5413 118.668 20.7813 118.476 20.984C118.284 21.1867 118.05 21.288 117.772 21.288ZM120.252 21.288C119.986 21.288 119.751 21.1867 119.548 20.984C119.356 20.7813 119.26 20.5413 119.26 20.264C119.26 19.9867 119.356 19.752 119.548 19.56C119.751 19.368 119.986 19.272 120.252 19.272C120.53 19.272 120.764 19.368 120.956 19.56C121.148 19.752 121.244 19.9867 121.244 20.264C121.244 20.5413 121.148 20.7813 120.956 20.984C120.764 21.1867 120.53 21.288 120.252 21.288ZM132.691 28.552C132.691 28.3067 132.712 28.0187 132.755 27.688C132.798 27.3573 132.878 26.984 132.995 26.568C133.112 26.1413 133.288 25.6667 133.523 25.144L135.491 25.832C135.374 26.1627 135.272 26.4667 135.187 26.744C135.102 27.0107 135.038 27.2613 134.995 27.496C134.952 27.72 134.931 27.944 134.931 28.168C134.931 28.6907 135.048 29.1173 135.283 29.448C135.528 29.7893 135.87 30.04 136.307 30.2C136.744 30.3707 137.251 30.456 137.827 30.456C138.488 30.456 139.032 30.3653 139.459 30.184C139.886 30.0133 140.216 29.784 140.451 29.496C140.686 29.2187 140.851 28.9147 140.947 28.584C141.043 28.2427 141.091 27.912 141.091 27.592C141.091 27.1547 141.016 26.6373 140.867 26.04C140.718 25.432 140.451 24.7493 140.067 23.992L142.131 23.112C142.344 23.4853 142.542 23.9227 142.723 24.424C142.904 24.9147 143.048 25.4267 143.155 25.96C143.272 26.4933 143.331 27 143.331 27.48C143.331 27.9067 143.278 28.36 143.171 28.84C143.064 29.3093 142.883 29.7733 142.627 30.232C142.382 30.6907 142.046 31.1013 141.619 31.464C141.192 31.8373 140.664 32.136 140.035 32.36C139.406 32.584 138.654 32.696 137.779 32.696C137.075 32.696 136.414 32.616 135.795 32.456C135.187 32.3067 134.648 32.0667 134.179 31.736C133.72 31.4053 133.358 30.9733 133.091 30.44C132.824 29.9173 132.691 29.288 132.691 28.552ZM137.907 22.472C137.576 22.472 137.294 22.36 137.059 22.136C136.835 21.912 136.723 21.6347 136.723 21.304C136.723 20.9733 136.835 20.6907 137.059 20.456C137.294 20.2213 137.576 20.104 137.907 20.104C138.227 20.104 138.499 20.2213 138.723 20.456C138.958 20.6907 139.075 20.9733 139.075 21.304C139.075 21.6347 138.958 21.912 138.723 22.136C138.499 22.36 138.227 22.472 137.907 22.472ZM148.328 35.928V34.808L152.104 33.688V34.84L148.328 35.928ZM148.246 32.68L147.782 30.44C148.54 30.344 149.201 30.2267 149.766 30.088C150.332 29.96 150.806 29.7787 151.19 29.544C151.574 29.3093 151.862 28.9893 152.054 28.584C152.246 28.168 152.342 27.6347 152.342 26.984C152.342 26.3547 152.246 25.8533 152.054 25.48C151.862 25.1067 151.606 24.92 151.286 24.92C151.062 24.92 150.876 25 150.726 25.16C150.577 25.3093 150.465 25.4907 150.39 25.704C150.326 25.9067 150.294 26.088 150.294 26.248C150.294 26.344 150.321 26.4453 150.374 26.552C150.428 26.6587 150.545 26.7493 150.726 26.824C150.908 26.8987 151.19 26.9413 151.574 26.952C151.969 26.9627 152.502 26.9253 153.174 26.84H155.862C156.268 26.84 156.556 26.9467 156.726 27.16C156.908 27.3627 156.998 27.6187 156.998 27.928C156.998 28.2587 156.886 28.536 156.662 28.76C156.438 28.9733 156.118 29.08 155.702 29.08H151.302C150.63 29.08 150.054 29 149.574 28.84C149.094 28.68 148.726 28.424 148.47 28.072C148.214 27.7093 148.086 27.2293 148.086 26.632C148.086 26.152 148.166 25.672 148.326 25.192C148.497 24.712 148.732 24.2747 149.03 23.88C149.329 23.4747 149.676 23.1547 150.07 22.92C150.476 22.6747 150.913 22.552 151.382 22.552C152.022 22.552 152.582 22.7493 153.062 23.144C153.542 23.5387 153.916 24.0613 154.182 24.712C154.46 25.3627 154.598 26.072 154.598 26.84C154.598 28.0453 154.342 29.0693 153.83 29.912C153.318 30.7547 152.588 31.4053 151.638 31.864C150.689 32.3333 149.558 32.6053 148.246 32.68ZM163.262 31.928V30.808L167.038 29.688V30.84L163.262 31.928ZM158.925 29.08L159.085 26.84C159.437 26.84 159.725 26.8133 159.949 26.76C160.173 26.696 160.354 26.5627 160.493 26.36C160.642 26.1467 160.77 25.832 160.877 25.416C160.994 24.9893 161.122 24.4133 161.261 23.688L163.341 24.072C163.309 24.232 163.272 24.4187 163.229 24.632C163.186 24.8453 163.149 25.064 163.117 25.288C163.085 25.5013 163.069 25.6933 163.069 25.864C163.069 26.1627 163.165 26.4027 163.357 26.584C163.549 26.7547 163.912 26.84 164.445 26.84C164.712 26.84 164.941 26.8133 165.133 26.76C165.336 26.696 165.506 26.5627 165.645 26.36C165.794 26.1467 165.922 25.8213 166.029 25.384C166.146 24.936 166.258 24.3333 166.365 23.576L168.477 23.912C168.434 24.1573 168.392 24.4187 168.349 24.696C168.306 24.9733 168.269 25.2293 168.237 25.464C168.205 25.6987 168.189 25.8907 168.189 26.04C168.189 26.1787 168.226 26.312 168.301 26.44C168.386 26.5573 168.536 26.6533 168.749 26.728C168.973 26.8027 169.288 26.84 169.693 26.84C169.981 26.84 170.226 26.8027 170.429 26.728C170.642 26.6533 170.802 26.5307 170.909 26.36C171.026 26.1893 171.085 25.9653 171.085 25.688C171.085 25.2933 170.994 24.776 170.813 24.136C170.632 23.496 170.418 22.824 170.173 22.12L172.429 21.448C172.6 21.9067 172.749 22.3973 172.877 22.92C173.016 23.432 173.122 23.9333 173.197 24.424C173.282 24.904 173.325 25.3253 173.325 25.688C173.325 26.232 173.24 26.7173 173.069 27.144C172.898 27.56 172.658 27.912 172.349 28.2C172.04 28.488 171.672 28.7067 171.245 28.856C170.818 29.0053 170.349 29.08 169.837 29.08C169.218 29.08 168.712 29.0213 168.317 28.904C167.922 28.776 167.618 28.568 167.405 28.28C167.202 27.9813 167.069 27.576 167.005 27.064H167.549C167.325 27.6933 167.074 28.152 166.797 28.44C166.52 28.7173 166.189 28.8933 165.805 28.968C165.432 29.0427 164.962 29.08 164.397 29.08C164.045 29.08 163.682 29.0427 163.309 28.968C162.946 28.8827 162.621 28.6907 162.333 28.392C162.045 28.0933 161.832 27.6293 161.693 27L162.557 26.968C162.333 27.5973 162.04 28.0613 161.677 28.36C161.325 28.6587 160.92 28.856 160.461 28.952C160.002 29.0373 159.49 29.08 158.925 29.08Z"
				fill="#FF9A23"
			/>
		</svg>
	);
}
