import { UserInfo } from "@/models/types";

export default function Usercard ({userInfo}: {userInfo: UserInfo}) {
    return (
        <img className="rounded-full" src={userInfo.image} alt={userInfo.name} width="40" height="40"/>
    )
}