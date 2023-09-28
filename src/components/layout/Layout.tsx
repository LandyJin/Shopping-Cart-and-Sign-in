import { UserInfo } from "@/models/types";
import MainNavigation from "./MainNavigation";

const Layout = ({
    children,
    userInfo
  }: {
    children: React.ReactNode,
    userInfo?: UserInfo
  }) => {
    return (
        <div>
            <MainNavigation userInfo={userInfo}/>
            <main className='m-3' >
                {children}
            </main>
        </div>
    )
}

export default Layout;