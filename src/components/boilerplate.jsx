function Navbar() {
    return <nav className="nav">
        <a href="/" className="site-title">CV Creater</a>
    </nav>

}

function Footer() {
    return <p className="footer">
        Copyright @ The Odin Project 2023
    </p>

}

// eslint-disable-next-line react/prop-types
function SectionHeader({className, defaultValue = "Section Header"}) {
    return (
        <>
            <p className={"sectionHeader " + className}>
            {defaultValue}    
            </p>
            <hr className={"sectionHR " + className}></hr>
        </>
    );
}

export {Navbar, Footer, SectionHeader}