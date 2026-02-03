import '../App.css'

function MainContent() {
    return(
        <>
        <div className="MainContent-middle">
            <div className="Header">
                ABOUT
            </div>

            <div className="Container">
                <img src='/Hero.png'></img>
                <div className="Details">
                    <div className="Title">
                    </div>
                    <div className="Caption">
                        This section covers personal projects I have done. Mainly 
                        done for fun or out of curiosity. Details of said projects 
                        are discussed in greater detail in their respective 
                        repositories on my GitHub
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default MainContent