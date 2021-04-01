import SvgIcon from '@material-ui/core/SvgIcon';

export default ({active, disabled, ...props}) => 
<SvgIcon 
    width="16" height="17" 
    viewBox="0 0 16 17" fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path d="M8.42105 10.7278V12.4197C7.65888 12.1607 6.84318 12.0812 6.04245 12.188C5.24171 12.2948 4.47933 12.5848 3.81931 13.0335C3.1593 13.4822 2.62092 14.0767 2.2494 14.7669C1.87788 15.4571 1.68406 16.2229 1.68421 17L2.17648e-07 16.9992C-0.000261149 16.0107 0.234881 15.0352 0.687409 14.1476C1.13994 13.2599 1.79784 12.4836 2.61071 11.8782C3.42358 11.2727 4.36983 10.8542 5.37697 10.6547C6.38411 10.4551 7.4254 10.4799 8.42105 10.727V10.7278ZM6.73684 9.71429C3.94526 9.71429 1.68421 7.54071 1.68421 4.85714C1.68421 2.17357 3.94526 0 6.73684 0C9.52842 0 11.7895 2.17357 11.7895 4.85714C11.7895 7.54071 9.52842 9.71429 6.73684 9.71429ZM6.73684 8.09524C8.59789 8.09524 10.1053 6.64619 10.1053 4.85714C10.1053 3.0681 8.59789 1.61905 6.73684 1.61905C4.87579 1.61905 3.36842 3.0681 3.36842 4.85714C3.36842 6.64619 4.87579 8.09524 6.73684 8.09524ZM11.7895 12.9524V10.5238H13.4737V12.9524H16V14.5714H13.4737V17H11.7895V14.5714H9.26316V12.9524H11.7895Z" 
    fill={active?"#065BFB":"#b3b3b3"}/>
</SvgIcon>