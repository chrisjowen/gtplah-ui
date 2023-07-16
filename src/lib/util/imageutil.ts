import { PUBLIC_IMG_CDN_BASE } from "$env/static/public";

export function imageUrl(path: string, size: any = { }) {
    let sizeModifier = (size.w &&  size.h  && PUBLIC_IMG_CDN_BASE.indexOf("localhost") == -1) ? `/tr:w-${size.w},h-${size.h}` : ``;
    return `${PUBLIC_IMG_CDN_BASE}${sizeModifier}${path}`
}