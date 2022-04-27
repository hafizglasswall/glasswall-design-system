import { SvgIconComponent } from "@mui/icons-material";
import { SvgIcon, SvgIconClasses, SvgIconProps, SxProps, Theme } from "@mui/material";
import { CommonProps } from "@mui/material/OverridableComponent";
import React, { ElementType, ReactNode, SVGProps } from "react";
interface CustomSvgIconProps extends SvgIconProps {
    width: string;
    height: string;
}
export const ReportIcon = (props: CustomSvgIconProps) => (
    <SvgIcon sx={{ width: props.width, height: props.height }} {...props}>
        <g opacity="0.4" filter="url(#filter0_d_295_11173)">
            <path d="M23.4041 10.5881H14.6802L20.4902 16.398C20.7122 16.62 21.0777 16.6381 21.306 16.423C22.7288 15.0825 23.7074 13.2756 23.9946 11.2443C24.0438 10.8965 23.7552 10.5881 23.4041 10.5881V10.5881ZM22.8221 8.20572C22.5192 3.81382 19.0096 0.30427 14.6177 0.00132941C14.2824 -0.0218323 14.0001 0.260888 14.0001 0.596916V8.82337H22.2269C22.5629 8.82337 22.8453 8.54102 22.8221 8.20572ZM12.2354 10.5881V1.86419C12.2354 1.51309 11.9269 1.22449 11.5795 1.27375C7.19824 1.89287 3.84935 5.72044 4.00523 10.3076C4.16552 15.0186 8.22177 18.8818 12.935 18.8226C14.7879 18.7995 16.5001 18.2024 17.9078 17.2039C18.1982 16.998 18.2174 16.5704 17.9655 16.3186L12.2354 10.5881Z" fill="white" />
        </g>
        <defs>
            <filter id="filter0_d_295_11173" x="0" y="0" width="28" height="26.8232" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_295_11173" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_295_11173" result="shape" />
            </filter>
        </defs>
    </SvgIcon>
)

// width="18" height="19"

// import { SvgIconComponent } from "@mui/icons-material";
// import { SvgIcon, SvgIconClasses, SvgIconProps, SxProps, Theme } from "@mui/material";
// import { CommonProps } from "@mui/material/OverridableComponent";
// import React, { ElementType, ReactNode, SVGProps } from "react";

// export const DashboardIcon = (props: SvgIconProps) => (
//     <SvgIcon {...props}>
//         <path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M1.38461 0H6.92306C7.68629 0 8.30767 0.621374 8.30767 1.38461V6.92306C8.30767 7.68629 7.68629 8.30767 6.92306 8.30767H1.38461C0.621374 8.30767 0 7.68629 0 6.92306V1.38461C0 0.621374 0.621374 0 1.38461 0ZM11.0769 0H16.6153C17.3786 0 17.9999 0.621374 17.9999 1.38461V6.92306C17.9999 7.68629 17.3786 8.30767 16.6153 8.30767H11.0769C10.3137 8.30767 9.69228 7.68629 9.69228 6.92306V1.38461C9.69228 0.621374 10.3137 0 11.0769 0ZM6.92306 10H1.38461C0.621374 10 0 10.6214 0 11.3846V16.9231C0 17.6863 0.621374 18.3077 1.38461 18.3077H6.92306C7.68629 18.3077 8.30767 17.6863 8.30767 16.9231V11.3846C8.30767 10.6214 7.68629 10 6.92306 10ZM11.0769 9.69233H16.6153C17.3786 9.69233 17.9999 10.3137 17.9999 11.0769V16.6154C17.9999 17.3786 17.3786 18 16.6153 18H11.0769C10.3137 18 9.69228 17.3786 9.69228 16.6154V11.0769C9.69228 10.3137 10.3137 9.69233 11.0769 9.69233Z" fill="white" />
//     </SvgIcon>
// )