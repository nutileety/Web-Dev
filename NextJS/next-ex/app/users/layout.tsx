import { ReactElement } from "react";

export default function userLayout({children}: any) {
    return (<div>
        <div className="border-b-2">Hi there</div>
        <div>{children}</div>
    </div>)
}