import Nav from "./nav"
import Bot from "./bott"

const Layout = ({ children, categories, seo }) => (
  <>
    <Nav categories={categories} />
    {children}
    <Bot />
  </>
  
)

export default Layout
