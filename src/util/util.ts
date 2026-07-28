
export function redirect(pathName: string) {
    if(pathName) {
        window.location.href = `${window.location.origin}/Blog-Web/${pathName}`;
    } else {
        console.log('Pfadname invalid')
    }
}