const Header = ({setSelectBtn}) => {
    return <header>
                <div className="logoAndBtn">
                <div className="logo">
                    <img className="logoImage" alt="logo" src={`${process.env.PUBLIC_URL}/public_assets/logo.png`}/>                    
                </div>
                <div className="memberClickButtons">
                    <button className="memberBtn" onClick={() => {
                        setSelectBtn('winter')
                    }}>윈터</button>
                    <button className="memberBtn" onClick={() => {
                        setSelectBtn('karina')
                    }}>카리나</button>
                    <button className="memberBtn" onClick={() => {
                        setSelectBtn('ningning')
                    }}>닝닝</button>
                    <button className="memberBtn" onClick={() => {
                        setSelectBtn('giselle')
                    }}>지젤</button>
                </div>
                </div>
            </header>
}

export default Header