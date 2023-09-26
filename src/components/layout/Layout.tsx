import MainNavigation from "./MainNavigation";

const Layout = ({
    children,
  }: {
    children: React.ReactNode
  }) => {
    return (
        <div>
            <MainNavigation />
            <main className='m-3' >
                {children}
            </main>
        </div>
    )
}

export default Layout;